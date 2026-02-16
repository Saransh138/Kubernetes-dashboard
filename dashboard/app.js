class KubernetesDashboard {
    constructor() {
        this.ws = null;
        this.currentNamespace = '';
        this.data = {
            pods: [],
            services: [],
            deployments: [],
            nodes: [],
            namespaces: []
        };
        
        this.init();
    }

    init() {
        this.setupWebSocket();
        this.setupEventListeners();
        this.loadInitialData();
    }

    setupWebSocket() {
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const wsUrl = `${protocol}//${window.location.hostname}:8080`;
        
        this.ws = new WebSocket(wsUrl);
        
        this.ws.onopen = () => {
            console.log('WebSocket connected');
            this.updateConnectionStatus(true);
        };
        
        this.ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.type === 'update') {
                this.data = { ...this.data, ...message.data };
                this.updateUI();
            }
        };
        
        this.ws.onclose = () => {
            console.log('WebSocket disconnected');
            this.updateConnectionStatus(false);
            // Reconnect after 5 seconds
            setTimeout(() => this.setupWebSocket(), 5000);
        };
        
        this.ws.onerror = (error) => {
            console.error('WebSocket error:', error);
            this.updateConnectionStatus(false);
        };
    }

    updateConnectionStatus(connected) {
        const statusDot = document.getElementById('connection-status');
        const statusText = statusDot.nextElementSibling;
        
        if (connected) {
            statusDot.classList.add('connected');
            statusText.textContent = 'Connected';
        } else {
            statusDot.classList.remove('connected');
            statusText.textContent = 'Disconnected';
        }
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = e.target.dataset.section;
                this.showSection(section);
            });
        });

        // Namespace filter
        document.getElementById('namespace-filter').addEventListener('change', (e) => {
            this.currentNamespace = e.target.value;
            this.updatePodsTable();
        });

        // Modal close buttons
        document.querySelectorAll('.close').forEach(closeBtn => {
            closeBtn.addEventListener('click', () => {
                closeBtn.closest('.modal').style.display = 'none';
            });
        });

        // Scale confirmation
        document.getElementById('scale-confirm').addEventListener('click', () => {
            this.confirmScale();
        });

        // Close modals when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
            }
        });
    }

    async loadInitialData() {
        try {
            const [namespaces, pods, services, deployments, nodes] = await Promise.all([
                fetch('/api/namespaces').then(r => r.json()),
                fetch('/api/pods').then(r => r.json()),
                fetch('/api/services').then(r => r.json()),
                fetch('/api/deployments').then(r => r.json()),
                fetch('/api/nodes').then(r => r.json())
            ]);

            this.data = { namespaces, pods, services, deployments, nodes };
            this.updateUI();
            this.populateNamespaceFilter();
        } catch (error) {
            console.error('Error loading initial data:', error);
        }
    }

    populateNamespaceFilter() {
        const select = document.getElementById('namespace-filter');
        select.innerHTML = '<option value="">All Namespaces</option>';
        
        this.data.namespaces.forEach(ns => {
            const option = document.createElement('option');
            option.value = ns.metadata.name;
            option.textContent = ns.metadata.name;
            select.appendChild(option);
        });
    }

    showSection(sectionName) {
        // Update navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

        // Show section
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionName).classList.add('active');
    }

    updateUI() {
        this.updateOverview();
        this.updatePodsTable();
        this.updateServicesTable();
        this.updateDeploymentsTable();
        this.updateNodesTable();
    }

    updateOverview() {
        const podStats = this.calculatePodStats();
        const deploymentStats = this.calculateDeploymentStats();
        const nodeStats = this.calculateNodeStats();

        document.getElementById('pods-count').textContent = this.data.pods.length;
        document.getElementById('pods-running').textContent = `${podStats.running} Running`;
        document.getElementById('pods-pending').textContent = `${podStats.pending} Pending`;
        document.getElementById('pods-failed').textContent = `${podStats.failed} Failed`;

        document.getElementById('services-count').textContent = this.data.services.length;
        
        document.getElementById('deployments-count').textContent = this.data.deployments.length;
        document.getElementById('deployments-ready').textContent = `${deploymentStats.ready} Ready`;
        
        document.getElementById('nodes-count').textContent = this.data.nodes.length;
        document.getElementById('nodes-ready').textContent = `${nodeStats.ready} Ready`;
    }

    calculatePodStats() {
        return this.data.pods.reduce((stats, pod) => {
            const phase = pod.status.phase;
            if (phase === 'Running') stats.running++;
            else if (phase === 'Pending') stats.pending++;
            else if (phase === 'Failed') stats.failed++;
            return stats;
        }, { running: 0, pending: 0, failed: 0 });
    }

    calculateDeploymentStats() {
        return this.data.deployments.reduce((stats, deployment) => {
            const ready = deployment.status.readyReplicas || 0;
            const desired = deployment.spec.replicas || 0;
            if (ready === desired && desired > 0) stats.ready++;
            return stats;
        }, { ready: 0 });
    }

    calculateNodeStats() {
        return this.data.nodes.reduce((stats, node) => {
            const ready = node.status.conditions.find(c => c.type === 'Ready');
            if (ready && ready.status === 'True') stats.ready++;
            return stats;
        }, { ready: 0 });
    }

    updatePodsTable() {
        const tbody = document.getElementById('pods-table-body');
        tbody.innerHTML = '';

        const filteredPods = this.currentNamespace 
            ? this.data.pods.filter(pod => pod.metadata.namespace === this.currentNamespace)
            : this.data.pods;

        filteredPods.forEach(pod => {
            const row = this.createPodRow(pod);
            tbody.appendChild(row);
        });
    }

    createPodRow(pod) {
        const row = document.createElement('tr');
        const ready = this.getPodReadyCount(pod);
        const restarts = this.getPodRestartCount(pod);
        const age = this.getAge(pod.metadata.creationTimestamp);

        row.innerHTML = `
            <td>${pod.metadata.name}</td>
            <td>${pod.metadata.namespace}</td>
            <td><span class="status-badge status-${pod.status.phase.toLowerCase()}">${pod.status.phase}</span></td>
            <td>${ready}</td>
            <td>${restarts}</td>
            <td>${age}</td>
            <td>
                <button class="btn btn-secondary" onclick="dashboard.showLogs('${pod.metadata.namespace}', '${pod.metadata.name}')">Logs</button>
                <button class="btn btn-danger" onclick="dashboard.deletePod('${pod.metadata.namespace}', '${pod.metadata.name}')">Delete</button>
            </td>
        `;
        return row;
    }

    getPodReadyCount(pod) {
        if (!pod.status.containerStatuses) return '0/0';
        const ready = pod.status.containerStatuses.filter(c => c.ready).length;
        const total = pod.status.containerStatuses.length;
        return `${ready}/${total}`;
    }

    getPodRestartCount(pod) {
        if (!pod.status.containerStatuses) return 0;
        return pod.status.containerStatuses.reduce((sum, c) => sum + c.restartCount, 0);
    }

    updateServicesTable() {
        const tbody = document.getElementById('services-table-body');
        tbody.innerHTML = '';

        this.data.services.forEach(service => {
            const row = this.createServiceRow(service);
            tbody.appendChild(row);
        });
    }

    createServiceRow(service) {
        const row = document.createElement('tr');
        const ports = service.spec.ports ? service.spec.ports.map(p => `${p.port}:${p.targetPort}/${p.protocol}`).join(', ') : '';
        const externalIP = service.status.loadBalancer?.ingress?.[0]?.ip || service.spec.externalIPs?.[0] || '-';
        const age = this.getAge(service.metadata.creationTimestamp);

        row.innerHTML = `
            <td>${service.metadata.name}</td>
            <td>${service.metadata.namespace}</td>
            <td>${service.spec.type}</td>
            <td>${service.spec.clusterIP}</td>
            <td>${externalIP}</td>
            <td>${ports}</td>
            <td>${age}</td>
        `;
        return row;
    }

    updateDeploymentsTable() {
        const tbody = document.getElementById('deployments-table-body');
        tbody.innerHTML = '';

        this.data.deployments.forEach(deployment => {
            const row = this.createDeploymentRow(deployment);
            tbody.appendChild(row);
        });
    }

    createDeploymentRow(deployment) {
        const row = document.createElement('tr');
        const ready = `${deployment.status.readyReplicas || 0}/${deployment.spec.replicas || 0}`;
        const upToDate = deployment.status.updatedReplicas || 0;
        const available = deployment.status.availableReplicas || 0;
        const age = this.getAge(deployment.metadata.creationTimestamp);

        row.innerHTML = `
            <td>${deployment.metadata.name}</td>
            <td>${deployment.metadata.namespace}</td>
            <td>${ready}</td>
            <td>${upToDate}</td>
            <td>${available}</td>
            <td>${age}</td>
            <td>
                <button class="btn btn-primary" onclick="dashboard.scaleDeployment('${deployment.metadata.namespace}', '${deployment.metadata.name}', ${deployment.spec.replicas})">Scale</button>
            </td>
        `;
        return row;
    }

    updateNodesTable() {
        const tbody = document.getElementById('nodes-table-body');
        tbody.innerHTML = '';

        this.data.nodes.forEach(node => {
            const row = this.createNodeRow(node);
            tbody.appendChild(row);
        });
    }

    createNodeRow(node) {
        const row = document.createElement('tr');
        const ready = node.status.conditions.find(c => c.type === 'Ready');
        const status = ready && ready.status === 'True' ? 'Ready' : 'NotReady';
        const roles = Object.keys(node.metadata.labels || {})
            .filter(label => label.startsWith('node-role.kubernetes.io/'))
            .map(label => label.split('/')[1])
            .join(', ') || 'worker';
        const version = node.status.nodeInfo.kubeletVersion;
        const os = `${node.status.nodeInfo.osImage}`;
        const kernel = node.status.nodeInfo.kernelVersion;
        const age = this.getAge(node.metadata.creationTimestamp);

        row.innerHTML = `
            <td>${node.metadata.name}</td>
            <td><span class="status-badge status-${status.toLowerCase()}">${status}</span></td>
            <td>${roles}</td>
            <td>${version}</td>
            <td>${os}</td>
            <td>${kernel}</td>
            <td>${age}</td>
        `;
        return row;
    }

    getAge(timestamp) {
        const now = new Date();
        const created = new Date(timestamp);
        const diffMs = now - created;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

        if (diffDays > 0) return `${diffDays}d`;
        if (diffHours > 0) return `${diffHours}h`;
        return `${diffMinutes}m`;
    }

    async showLogs(namespace, podName) {
        try {
            const response = await fetch(`/api/pods/${namespace}/${podName}/logs`);
            const data = await response.json();
            
            document.getElementById('logs-title').textContent = `Logs: ${podName}`;
            document.getElementById('logs-content').textContent = data.logs;
            document.getElementById('logs-modal').style.display = 'block';
        } catch (error) {
            console.error('Error fetching logs:', error);
            alert('Error fetching logs');
        }
    }

    async deletePod(namespace, podName) {
        if (!confirm(`Are you sure you want to delete pod ${podName}?`)) return;

        try {
            const response = await fetch(`/api/pods/${namespace}/${podName}`, {
                method: 'DELETE'
            });
            
            if (response.ok) {
                alert('Pod deleted successfully');
                this.loadInitialData(); // Refresh data
            } else {
                throw new Error('Failed to delete pod');
            }
        } catch (error) {
            console.error('Error deleting pod:', error);
            alert('Error deleting pod');
        }
    }

    scaleDeployment(namespace, deploymentName, currentReplicas) {
        document.getElementById('replica-count').value = currentReplicas;
        document.getElementById('scale-modal').style.display = 'block';
        
        // Store deployment info for scaling
        this.scaleTarget = { namespace, deploymentName };
    }

    async confirmScale() {
        const replicas = document.getElementById('replica-count').value;
        
        try {
            const response = await fetch(`/api/deployments/${this.scaleTarget.namespace}/${this.scaleTarget.deploymentName}/scale`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ replicas: parseInt(replicas) })
            });
            
            if (response.ok) {
                alert('Deployment scaled successfully');
                document.getElementById('scale-modal').style.display = 'none';
                this.loadInitialData(); // Refresh data
            } else {
                throw new Error('Failed to scale deployment');
            }
        } catch (error) {
            console.error('Error scaling deployment:', error);
            alert('Error scaling deployment');
        }
    }
}

// Initialize dashboard
const dashboard = new KubernetesDashboard();
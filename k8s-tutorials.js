// Kubernetes Tutorial Series Data
const k8sTutorials = [
    // Beginner Level (Posts 1-7)
    {
        id: 1,
        level: 'beginner',
        title: 'What is Kubernetes? Understanding Container Orchestration',
        excerpt: 'Learn what problems Kubernetes solves, understand container orchestration, and explore real-world use cases.',
        topics: [
            'What problems does Kubernetes solve?',
            'Container vs VM comparison',
            'Why container orchestration is needed',
            'Kubernetes vs Docker Swarm',
            'Real-world use cases'
        ],
        handsOn: 'Set up a simple multi-container application without orchestration to show the pain points',
        readTime: '15 min',
        difficulty: 'beginner',
        url: 'tutorials/01-what-is-kubernetes.html',
        status: 'available'
    },
    {
        id: 2,
        level: 'beginner',
        title: 'Kubernetes Architecture Explained — Master and Worker Nodes',
        excerpt: 'Deep dive into Kubernetes architecture including Control Plane and Worker Node components.',
        topics: [
            'Control Plane components (API Server, etcd, Scheduler)',
            'Worker Node components (kubelet, kube-proxy)',
            'How components communicate',
            'Visual diagrams and analogies'
        ],
        handsOn: 'Explore a running cluster with kubectl get nodes and component status',
        readTime: '20 min',
        difficulty: 'beginner',
        url: 'tutorials/02-kubernetes-architecture.html',
        status: 'available'
    },
    {
        id: 3,
        level: 'beginner',
        title: 'Setting Up Your First Kubernetes Cluster',
        excerpt: 'Complete guide to setting up local and cloud Kubernetes clusters with practical examples.',
        topics: [
            'Local options: minikube, kind, Docker Desktop',
            'Cloud options: EKS, GKE, AKS comparison',
            'Installation walkthrough for minikube',
            'Basic kubectl commands'
        ],
        handsOn: 'Complete local cluster setup + first pod deployment',
        readTime: '25 min',
        difficulty: 'beginner',
        url: 'tutorials/03-setting-up-cluster.html',
        status: 'available'
    },
    {
        id: 4,
        level: 'beginner',
        title: 'Pods — The Building Blocks of Kubernetes',
        excerpt: 'Master Kubernetes Pods, the fundamental unit of deployment in Kubernetes.',
        topics: [
            'What is a Pod and why not just containers?',
            'Pod lifecycle and states',
            'Multi-container pods (sidecar pattern)',
            'Pod networking basics',
            'YAML structure explained'
        ],
        handsOn: 'Create pods with single and multiple containers, inspect logs and exec into pods',
        readTime: '35 min',
        difficulty: 'beginner',
        url: 'tutorials/04-pods.html',
        status: 'available'
    },
    {
        id: 5,
        level: 'beginner',
        title: 'Deployments — Managing Application Rollouts',
        excerpt: 'Master Kubernetes Deployments for managing application lifecycle and updates.',
        topics: [
            'Deployments vs ReplicaSets vs Pods',
            'Rolling updates and rollbacks',
            'Deployment strategies',
            'Scaling applications'
        ],
        handsOn: 'Deploy nginx, perform rolling updates, scale up/down, rollback',
        readTime: '45 min',
        difficulty: 'beginner',
        url: 'tutorials/05-deployments.html',
        status: 'available'
    },
    {
        id: 6,
        level: 'beginner',
        title: 'Services — Connecting Your Applications',
        excerpt: 'Learn how Kubernetes Services enable networking and service discovery.',
        topics: [
            'Why do we need Services?',
            'Service types: ClusterIP, NodePort, LoadBalancer',
            'Service discovery and DNS',
            'Endpoints and how Services find Pods'
        ],
        handsOn: 'Create different service types and test connectivity',
        readTime: '40 min',
        difficulty: 'beginner',
        url: 'tutorials/06-services.html',
        status: 'available'
    },
    {
        id: 7,
        level: 'beginner',
        title: 'ConfigMaps and Secrets — Managing Application Configuration',
        excerpt: 'Learn to separate configuration from code using ConfigMaps and Secrets.',
        topics: [
            'Separating config from code',
            'Creating and using ConfigMaps',
            'Secret types and best practices',
            'Mounting configs as files vs environment variables'
        ],
        handsOn: 'Configure an app using both ConfigMaps and Secrets',
        readTime: '40 min',
        difficulty: 'beginner',
        url: 'tutorials/07-configmaps-secrets.html',
        status: 'available'
    },
    
    // Intermediate Level (Posts 8-14)
    {
        id: 8,
        level: 'intermediate',
        title: 'Persistent Storage — Volumes, PVs, and PVCs',
        excerpt: 'Master persistent storage in Kubernetes for stateful applications.',
        topics: [
            'Stateless vs Stateful applications',
            'Volume types and use cases',
            'PersistentVolume and PersistentVolumeClaim workflow',
            'StorageClasses and dynamic provisioning'
        ],
        handsOn: 'Deploy a database with persistent storage',
        readTime: '50 min',
        difficulty: 'intermediate',
        url: 'tutorials/08-persistent-storage.html',
        status: 'available'
    },
    {
        id: 9,
        level: 'intermediate',
        title: 'Namespaces and Resource Management',
        excerpt: 'Organize and isolate resources using Namespaces with resource quotas.',
        topics: [
            'Why use namespaces?',
            'Default namespaces in Kubernetes',
            'Resource quotas and limits',
            'Network policies basics'
        ],
        handsOn: 'Create multi-tenant environment with resource boundaries',
        readTime: '45 min',
        difficulty: 'intermediate',
        url: 'tutorials/09-namespaces-quotas.html',
        status: 'available'
    },
    {
        id: 10,
        level: 'intermediate',
        title: 'Labels, Selectors, and Annotations — Organizing Your Resources',
        excerpt: 'Learn to organize and query Kubernetes resources effectively.',
        topics: [
            'Labels vs Annotations differences',
            'Label selectors (equality and set-based)',
            'Best practices for labeling strategy',
            'Using labels for deployments and services'
        ],
        handsOn: 'Implement a labeling strategy for a multi-tier application',
        readTime: '40 min',
        difficulty: 'intermediate',
        url: 'tutorials/10-labels-selectors.html',
        status: 'available'
    },
    {
        id: 11,
        level: 'intermediate',
        title: 'StatefulSets — Managing Stateful Applications',
        excerpt: 'Deploy and manage stateful applications with stable network identities.',
        topics: [
            'StatefulSets vs Deployments',
            'Ordered deployment and scaling',
            'Stable network identities',
            'Persistent storage guarantees'
        ],
        handsOn: 'Deploy a MongoDB cluster using StatefulSets',
        readTime: '50 min',
        difficulty: 'intermediate',
        url: 'tutorials/11-statefulsets.html',
        status: 'available'
    },
    {
        id: 12,
        level: 'intermediate',
        title: 'DaemonSets and Jobs — Special Workload Types',
        excerpt: 'Learn about specialized workload types for specific use cases.',
        topics: [
            'When to use DaemonSets (logging, monitoring agents)',
            'Job types: Job, CronJob',
            'Job patterns and best practices',
            'Init containers'
        ],
        handsOn: 'Set up log collection with DaemonSet and scheduled backup job',
        readTime: '45 min',
        difficulty: 'intermediate',
        url: 'tutorials/12-daemonsets-jobs.html',
        status: 'available'
    },
    {
        id: 13,
        level: 'intermediate',
        title: 'Ingress — External Access to Your Services',
        excerpt: 'Expose your applications to the internet with Ingress controllers.',
        topics: [
            'Ingress vs LoadBalancer vs NodePort',
            'Ingress Controllers (nginx, traefik, istio)',
            'Path-based and host-based routing',
            'TLS termination'
        ],
        handsOn: 'Set up ingress with SSL certificates for multiple services',
        readTime: '50 min',
        difficulty: 'intermediate',
        url: 'tutorials/13-ingress.html',
        status: 'available'
    },
    {
        id: 14,
        level: 'intermediate',
        title: 'Health Checks — Keeping Your Apps Healthy',
        excerpt: 'Implement comprehensive health checks for application reliability.',
        topics: [
            'Liveness, Readiness, and Startup probes',
            'Probe types: HTTP, TCP, Exec',
            'Probe configuration and timing',
            'Graceful shutdown patterns'
        ],
        handsOn: 'Implement comprehensive health checks for a web application',
        readTime: '45 min',
        difficulty: 'intermediate',
        url: 'tutorials/14-health-checks.html',
        status: 'available'
    },
    
    // Advanced Level (Posts 15-20)
    {
        id: 15,
        level: 'advanced',
        title: 'Resource Management — CPU, Memory, and QoS',
        excerpt: 'Master resource management and auto-scaling in Kubernetes.',
        topics: [
            'Requests vs Limits',
            'Quality of Service classes',
            'Resource quotas and limit ranges',
            'Horizontal Pod Autoscaler (HPA)'
        ],
        handsOn: 'Configure auto-scaling based on CPU and memory metrics',
        readTime: '50 min',
        difficulty: 'advanced',
        url: 'tutorials/15-resource-management.html',
        status: 'available'
    },
    {
        id: 16,
        level: 'advanced',
        title: 'Security Best Practices in Kubernetes',
        excerpt: 'Secure your Kubernetes cluster with industry best practices.',
        topics: [
            'Pod Security Standards',
            'Service Accounts and RBAC',
            'Network Policies',
            'Image scanning and admission controllers'
        ],
        handsOn: 'Secure a multi-tier application with proper RBAC and network policies',
        readTime: '55 min',
        difficulty: 'advanced',
        url: 'tutorials/16-security-best-practices.html',
        status: 'available'
    },
    {
        id: 17,
        level: 'advanced',
        title: 'Monitoring and Logging Your Kubernetes Cluster',
        excerpt: 'Set up comprehensive monitoring and logging for production clusters.',
        topics: [
            'Metrics server and kubectl top',
            'Prometheus and Grafana setup',
            'Centralized logging with ELK/EFK stack',
            'Alerting strategies'
        ],
        handsOn: 'Set up a complete monitoring and logging solution',
        readTime: '40 min',
        difficulty: 'advanced'
    },
    {
        id: 18,
        level: 'advanced',
        title: 'Kubernetes Networking Deep Dive',
        excerpt: 'Master Kubernetes networking, CNI plugins, and service mesh.',
        topics: [
            'CNI plugins comparison',
            'Service mesh introduction (Istio basics)',
            'Network troubleshooting',
            'DNS resolution in Kubernetes'
        ],
        handsOn: 'Troubleshoot network connectivity issues and implement service mesh',
        readTime: '35 min',
        difficulty: 'advanced'
    },
    {
        id: 19,
        level: 'advanced',
        title: 'GitOps and CI/CD with Kubernetes',
        excerpt: 'Implement GitOps workflows for automated deployments.',
        topics: [
            'GitOps principles',
            'ArgoCD or Flux setup',
            'CI/CD pipeline integration',
            'Automated deployments and rollbacks'
        ],
        handsOn: 'Build a complete GitOps workflow from code commit to production',
        readTime: '45 min',
        difficulty: 'advanced'
    },
    {
        id: 20,
        level: 'advanced',
        title: 'Production Deployment Strategies and Best Practices',
        excerpt: 'Master advanced deployment strategies for production environments.',
        topics: [
            'Blue-Green vs Canary deployments',
            'Multi-cluster strategies',
            'Disaster recovery planning',
            'Cost optimization techniques'
        ],
        handsOn: 'Implement advanced deployment strategy with monitoring and automated rollback',
        readTime: '40 min',
        difficulty: 'advanced'
    },
    
    // Expert Level (Bonus)
    {
        id: 21,
        level: 'expert',
        title: 'RBAC Deep Dive — Roles, ClusterRoles, and Permissions',
        excerpt: 'Master Role-Based Access Control for enterprise Kubernetes security.',
        topics: [
            'Role vs ClusterRole',
            'RoleBinding vs ClusterRoleBinding',
            'Least privilege principle',
            'Service accounts',
            'Real enterprise scenarios'
        ],
        handsOn: 'Create namespace-limited user + read-only global access',
        readTime: '50 min',
        difficulty: 'expert'
    }
];

// Render tutorials by level
function renderTutorials() {
    const levels = {
        beginner: document.getElementById('beginnerTutorials'),
        intermediate: document.getElementById('intermediateTutorials'),
        advanced: document.getElementById('advancedTutorials'),
        expert: document.getElementById('expertTutorials')
    };
    
    k8sTutorials.forEach(tutorial => {
        const card = createTutorialCard(tutorial);
        if (levels[tutorial.level]) {
            levels[tutorial.level].innerHTML += card;
        }
    });
}

function createTutorialCard(tutorial) {
    const difficultyClass = `difficulty-${tutorial.difficulty}`;
    const topicsList = tutorial.topics.map(topic => `<li>${topic}</li>`).join('');
    
    // Check if tutorial is available
    const isAvailable = tutorial.status === 'available';
    const cardLink = isAvailable ? `onclick="window.location.href='${tutorial.url}'" style="cursor: pointer;"` : '';
    const comingSoonBadge = !isAvailable ? '<span class="hands-on-badge" style="background: #ed8936;">📅 Coming Soon</span>' : '';
    
    return `
        <div class="tutorial-card" ${cardLink}>
            <div class="tutorial-number">${tutorial.id}</div>
            <h3>${tutorial.title}</h3>
            <p class="excerpt">${tutorial.excerpt}</p>
            
            <div class="tutorial-topics">
                <h4>📚 What You'll Learn:</h4>
                <ul>
                    ${topicsList}
                </ul>
            </div>
            
            <div class="tutorial-topics">
                <h4>💻 Hands-On Project:</h4>
                <p style="color: #4a5568; font-size: 0.95rem; margin: 0;">${tutorial.handsOn}</p>
            </div>
            
            <div style="margin-top: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;">
                <div>
                    ${isAvailable ? '<span class="hands-on-badge">🎯 Available Now</span>' : comingSoonBadge}
                    <span class="difficulty-badge ${difficultyClass}">${tutorial.difficulty.toUpperCase()}</span>
                </div>
                <span style="color: #718096; font-size: 0.9rem;">
                    <i class="far fa-clock"></i> ${tutorial.readTime}
                </span>
            </div>
            ${isAvailable ? '<div style="margin-top: 15px; text-align: center; color: #667eea; font-weight: 600;">Click to start learning →</div>' : ''}
        </div>
    `;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderTutorials();
});

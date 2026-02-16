// Common sidebar and topbar HTML
const sidebarHTML = `
    <div class="sidebar-header">
        <div class="logo">
            <span class="material-icons">dashboard</span>
        </div>
        <div class="sidebar-title">K8s Dashboard Pro</div>
    </div>
    <ul class="menu-list">
        <li class="menu-item" data-page="index">
            <span class="material-icons menu-icon">dashboard</span>
            <span>Dashboard</span>
        </li>
        <li class="menu-item" data-page="monitoring">
            <span class="material-icons menu-icon">notifications</span>
            <span>Monitoring</span>
        </li>
        <li class="menu-item" data-page="node-monitoring">
            <span class="material-icons menu-icon">developer_board</span>
            <span>Node Monitoring</span>
        </li>
        <li class="menu-item" data-page="resource-monitor">
            <span class="material-icons menu-icon">manage_search</span>
            <span>Resource Monitor</span>
        </li>
        <li class="menu-item" data-page="pods">
            <span class="material-icons menu-icon">view_in_ar</span>
            <span>Pods</span>
        </li>
        <li class="menu-item" data-page="services">
            <span class="material-icons menu-icon">hub</span>
            <span>Services</span>
        </li>
        <li class="menu-item" data-page="deployments">
            <span class="material-icons menu-icon">rocket_launch</span>
            <span>Deployments</span>
        </li>
        <li class="menu-item" data-page="statefulsets">
            <span class="material-icons menu-icon">dns</span>
            <span>StatefulSets</span>
        </li>
        <li class="menu-item" data-page="daemonsets">
            <span class="material-icons menu-icon">layers</span>
            <span>DaemonSets</span>
        </li>
        <li class="menu-item" data-page="data-services">
            <span class="material-icons menu-icon">storage</span>
            <span>Data Services</span>
        </li>
        <li class="menu-item" data-page="kafka">
            <span class="material-icons menu-icon">dns</span>
            <span>Kafka Manager</span>
        </li>
        <li class="menu-item" data-page="redis">
            <span class="material-icons menu-icon" style="color: #DC382D;">circle</span>
            <span>Redis Manager</span>
        </li>
        <li class="menu-item" data-page="file-manager">
            <span class="material-icons menu-icon">folder_open</span>
            <span>File Manager</span>
        </li>
        <li class="menu-item" data-page="configmaps">
            <span class="material-icons menu-icon">settings</span>
            <span>ConfigMaps</span>
        </li>
        <li class="menu-item" data-page="secrets">
            <span class="material-icons menu-icon">vpn_key</span>
            <span>Secrets</span>
        </li>
        <li class="menu-item" data-page="volumes">
            <span class="material-icons menu-icon">storage</span>
            <span>Volumes</span>
        </li>
        <li class="menu-item" data-page="ingresses">
            <span class="material-icons menu-icon">router</span>
            <span>Ingresses</span>
        </li>
        <li class="menu-item" data-page="network-graph">
            <span class="material-icons menu-icon">account_tree</span>
            <span>Network Graph</span>
        </li>
        <li class="menu-item" data-page="logs">
            <span class="material-icons menu-icon">article</span>
            <span>Logs</span>
        </li>
        <li class="menu-item" data-page="nodes">
            <span class="material-icons menu-icon">computer</span>
            <span>Nodes</span>
        </li>
        <li class="menu-item" data-page="events">
            <span class="material-icons menu-icon">event</span>
            <span>Events</span>
        </li>
        <li class="menu-item" data-page="terminal">
            <span class="material-icons menu-icon">terminal</span>
            <span>Terminal</span>
        </li>
        <li class="menu-item" data-page="yaml-editor">
            <span class="material-icons menu-icon">code</span>
            <span>YAML Editor</span>
        </li>
    </ul>
`;

const topbarHTML = `
    <select class="namespace-select">
        <option>All Namespaces</option>
        <option selected>default</option>
        <option>kube-system</option>
        <option>monitoring</option>
    </select>
    <div class="resource-chips">
        <span class="chip">Pods: 24</span>
        <span class="chip">Services: 12</span>
        <span class="chip">Deployments: 8</span>
        <span class="chip">Nodes: 3</span>
    </div>
    <button class="refresh-btn">
        <span class="material-icons">refresh</span>
    </button>
`;

const noticeBannerHTML = `
    <div class="notice-banner" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 16px 24px; border-radius: 8px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);">
        <div style="display: flex; align-items: center; gap: 16px;">
            <span class="material-icons" style="font-size: 32px;">info</span>
            <div>
                <h3 style="margin: 0 0 4px 0; font-size: 18px; font-weight: 600;">Static Demo Dashboard</h3>
                <p style="margin: 0; font-size: 14px; opacity: 0.95;">This is a static demo with sample data. For the full project with real Kubernetes integration, visit my GitHub repository.</p>
            </div>
        </div>
        <a href="https://github.com/Saransh138/Kubernetes-dashboard" target="_blank" style="background: white; color: #667eea; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; display: flex; align-items: center; gap: 8px; transition: all 0.3s;">
            <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            View on GitHub
        </a>
    </div>
`;

// Initialize sidebar and topbar
document.addEventListener('DOMContentLoaded', function() {
    const sidebarEl = document.getElementById('sidebar');
    const topbarEl = document.getElementById('topbar');
    
    if (sidebarEl) {
        sidebarEl.className = 'sidebar';
        sidebarEl.innerHTML = sidebarHTML;
    }
    
    if (topbarEl) {
        topbarEl.className = 'topbar';
        topbarEl.innerHTML = topbarHTML;
    }
    
    // Add notice banner to main content if it exists
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        const pageTitle = mainContent.querySelector('.page-title');
        if (pageTitle) {
            pageTitle.insertAdjacentHTML('afterend', noticeBannerHTML);
        }
    }
    
    // Set active menu item based on current page
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        const page = item.getAttribute('data-page');
        if (page === currentPage || (currentPage === '' && page === 'index')) {
            item.classList.add('active');
        }
        
        // Add click handler for navigation
        item.addEventListener('click', function() {
            const targetPage = this.getAttribute('data-page');
            if (targetPage === 'index') {
                window.location.href = '../dashboard-static.html';
            } else {
                window.location.href = `${targetPage}.html`;
            }
        });
    });
});

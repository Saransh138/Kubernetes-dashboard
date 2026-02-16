// Extended blog posts with full content
const allBlogPosts = [
    {
        id: 1,
        title: "Kubernetes Best Practices for Production",
        excerpt: "Learn essential best practices for running Kubernetes clusters in production environments, including security, monitoring, and resource management.",
        content: `
            <p>Running Kubernetes in production requires careful planning and adherence to best practices. This comprehensive guide covers the essential aspects you need to consider.</p>
            
            <h2>1. Resource Management</h2>
            <p>Proper resource management is crucial for cluster stability and cost optimization.</p>
            <ul>
                <li>Always set resource requests and limits for containers</li>
                <li>Use Horizontal Pod Autoscaler (HPA) for automatic scaling</li>
                <li>Implement Vertical Pod Autoscaler (VPA) for right-sizing</li>
                <li>Monitor resource utilization with Prometheus and Grafana</li>
            </ul>
            
            <h3>Example Resource Configuration</h3>
            <pre><code>apiVersion: v1
kind: Pod
metadata:
  name: frontend
spec:
  containers:
  - name: app
    image: nginx
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"</code></pre>
            
            <h2>2. Security Best Practices</h2>
            <p>Security should be a top priority in production environments.</p>
            <ul>
                <li>Enable RBAC and follow the principle of least privilege</li>
                <li>Use Pod Security Standards (PSS) or Pod Security Policies</li>
                <li>Implement Network Policies to control traffic flow</li>
                <li>Scan container images for vulnerabilities</li>
                <li>Use secrets management solutions like HashiCorp Vault</li>
            </ul>
            
            <h2>3. High Availability</h2>
            <p>Ensure your applications are resilient and highly available.</p>
            <ul>
                <li>Run multiple replicas of critical workloads</li>
                <li>Use Pod Disruption Budgets (PDB)</li>
                <li>Implement proper health checks (liveness and readiness probes)</li>
                <li>Distribute pods across multiple availability zones</li>
            </ul>
            
            <h2>4. Monitoring and Logging</h2>
            <p>Comprehensive observability is essential for production systems.</p>
            <ul>
                <li>Deploy Prometheus for metrics collection</li>
                <li>Use Grafana for visualization and alerting</li>
                <li>Implement centralized logging with ELK or Loki</li>
                <li>Set up distributed tracing with Jaeger or Zipkin</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>Following these best practices will help you build a robust, secure, and scalable Kubernetes infrastructure. Remember that production readiness is an ongoing process that requires continuous monitoring and improvement.</p>
        `,
        date: "2024-02-10",
        readTime: "8 min read",
        tags: ["Kubernetes", "DevOps", "Production", "Best Practices"],
        icon: "⚙️",
        author: "Saransh"
    },
    {
        id: 2,
        title: "Implementing GitOps with ArgoCD",
        excerpt: "A comprehensive guide to implementing GitOps workflows using ArgoCD for automated Kubernetes deployments and continuous delivery.",
        content: `
            <p>GitOps is a paradigm that uses Git as the single source of truth for declarative infrastructure and applications. ArgoCD is a declarative, GitOps continuous delivery tool for Kubernetes.</p>
            
            <h2>What is GitOps?</h2>
            <p>GitOps is a way of implementing Continuous Deployment for cloud native applications. It focuses on using Git as a single source of truth for declarative infrastructure and applications.</p>
            
            <h2>Why ArgoCD?</h2>
            <ul>
                <li>Automated deployment of applications to specified target environments</li>
                <li>Support for multiple config management tools (Helm, Kustomize, Jsonnet)</li>
                <li>Ability to manage and deploy to multiple clusters</li>
                <li>SSO Integration (OIDC, OAuth2, LDAP, SAML 2.0)</li>
                <li>Web UI and CLI for visualization and management</li>
            </ul>
            
            <h2>Installing ArgoCD</h2>
            <pre><code>kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# Access the ArgoCD API server
kubectl port-forward svc/argocd-server -n argocd 8080:443</code></pre>
            
            <h2>Creating Your First Application</h2>
            <pre><code>apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: guestbook
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/argoproj/argocd-example-apps.git
    targetRevision: HEAD
    path: guestbook
  destination:
    server: https://kubernetes.default.svc
    namespace: guestbook
  syncPolicy:
    automated:
      prune: true
      selfHeal: true</code></pre>
            
            <h2>Best Practices</h2>
            <ul>
                <li>Use separate Git repositories for application code and manifests</li>
                <li>Implement proper RBAC for ArgoCD access</li>
                <li>Use ArgoCD Projects to organize applications</li>
                <li>Enable automated sync with self-healing</li>
                <li>Implement proper secret management</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>ArgoCD simplifies the deployment process and ensures that your Kubernetes clusters are always in sync with your Git repositories. It's a powerful tool for implementing GitOps practices in your organization.</p>
        `,
        date: "2024-02-05",
        readTime: "10 min read",
        tags: ["GitOps", "ArgoCD", "CI/CD", "Kubernetes"],
        icon: "🔄",
        author: "Saransh"
    },
    {
        id: 3,
        title: "Securing Kubernetes Clusters: A Complete Guide",
        excerpt: "Deep dive into Kubernetes security best practices, from RBAC and network policies to pod security standards and secrets management.",
        content: `
            <p>Security in Kubernetes is a multi-layered approach that requires attention at every level of your infrastructure. This guide covers comprehensive security practices.</p>
            
            <h2>1. Authentication and Authorization</h2>
            <h3>RBAC (Role-Based Access Control)</h3>
            <p>RBAC is the standard for managing access to Kubernetes resources.</p>
            <pre><code>apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: default
  name: pod-reader
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "watch", "list"]</code></pre>
            
            <h2>2. Pod Security</h2>
            <p>Implement Pod Security Standards to enforce security policies.</p>
            <ul>
                <li>Privileged: Unrestricted policy (not recommended for production)</li>
                <li>Baseline: Minimally restrictive policy</li>
                <li>Restricted: Heavily restricted policy (recommended)</li>
            </ul>
            
            <h2>3. Network Security</h2>
            <h3>Network Policies</h3>
            <pre><code>apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all
spec:
  podSelector: {}
  policyTypes:
  - Ingress
  - Egress</code></pre>
            
            <h2>4. Secrets Management</h2>
            <p>Never store secrets in plain text. Use proper secrets management solutions.</p>
            <ul>
                <li>HashiCorp Vault for dynamic secrets</li>
                <li>Sealed Secrets for encrypted secrets in Git</li>
                <li>External Secrets Operator for cloud provider integration</li>
            </ul>
            
            <h2>5. Image Security</h2>
            <ul>
                <li>Scan images for vulnerabilities using Trivy or Clair</li>
                <li>Use minimal base images (distroless, alpine)</li>
                <li>Implement image signing and verification</li>
                <li>Use private registries with authentication</li>
            </ul>
            
            <h2>6. Runtime Security</h2>
            <ul>
                <li>Use Falco for runtime threat detection</li>
                <li>Implement admission controllers</li>
                <li>Enable audit logging</li>
                <li>Use security contexts to restrict container capabilities</li>
            </ul>
            
            <h2>Security Checklist</h2>
            <ul>
                <li>✓ Enable RBAC and follow least privilege principle</li>
                <li>✓ Implement Network Policies</li>
                <li>✓ Use Pod Security Standards</li>
                <li>✓ Scan container images regularly</li>
                <li>✓ Encrypt secrets at rest and in transit</li>
                <li>✓ Enable audit logging</li>
                <li>✓ Keep Kubernetes and components updated</li>
                <li>✓ Implement runtime security monitoring</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>Kubernetes security is not a one-time task but an ongoing process. Regular security audits, updates, and monitoring are essential for maintaining a secure cluster.</p>
        `,
        date: "2024-01-28",
        readTime: "12 min read",
        tags: ["Security", "Kubernetes", "DevSecOps", "RBAC"],
        icon: "🔒",
        author: "Saransh"
    },
    {
        id: 4,
        title: "Monitoring Kubernetes with Prometheus & Grafana",
        excerpt: "Set up comprehensive monitoring for your Kubernetes clusters using Prometheus for metrics collection and Grafana for visualization.",
        content: `
            <p>Effective monitoring is crucial for maintaining healthy Kubernetes clusters. This guide walks you through setting up a complete monitoring stack.</p>
            
            <h2>Why Prometheus and Grafana?</h2>
            <ul>
                <li>Prometheus: Time-series database optimized for metrics</li>
                <li>Grafana: Powerful visualization and dashboarding tool</li>
                <li>Native Kubernetes integration</li>
                <li>Active community and extensive ecosystem</li>
            </ul>
            
            <h2>Installing Prometheus Stack</h2>
            <p>The easiest way is using the kube-prometheus-stack Helm chart.</p>
            <pre><code>helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

helm install prometheus prometheus-community/kube-prometheus-stack \\
  --namespace monitoring \\
  --create-namespace</code></pre>
            
            <h2>Key Components</h2>
            <h3>1. Prometheus Server</h3>
            <p>Collects and stores metrics from various sources.</p>
            
            <h3>2. Node Exporter</h3>
            <p>Exposes hardware and OS metrics from Kubernetes nodes.</p>
            
            <h3>3. Kube State Metrics</h3>
            <p>Generates metrics about Kubernetes objects.</p>
            
            <h3>4. Alertmanager</h3>
            <p>Handles alerts sent by Prometheus server.</p>
            
            <h2>Creating Custom Metrics</h2>
            <pre><code>apiVersion: v1
kind: Service
metadata:
  name: my-app
  labels:
    app: my-app
  annotations:
    prometheus.io/scrape: "true"
    prometheus.io/port: "8080"
    prometheus.io/path: "/metrics"
spec:
  ports:
  - port: 8080
    name: metrics
  selector:
    app: my-app</code></pre>
            
            <h2>Essential Grafana Dashboards</h2>
            <ul>
                <li>Kubernetes Cluster Monitoring (ID: 7249)</li>
                <li>Node Exporter Full (ID: 1860)</li>
                <li>Kubernetes Pod Resources (ID: 6417)</li>
                <li>Kubernetes Deployment Statefulset Daemonset (ID: 8588)</li>
            </ul>
            
            <h2>Setting Up Alerts</h2>
            <pre><code>apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: example-alert
  namespace: monitoring
spec:
  groups:
  - name: example
    rules:
    - alert: HighPodMemory
      expr: container_memory_usage_bytes > 1000000000
      for: 5m
      labels:
        severity: warning
      annotations:
        summary: "High memory usage detected"</code></pre>
            
            <h2>Best Practices</h2>
            <ul>
                <li>Set appropriate retention periods for metrics</li>
                <li>Use recording rules for frequently queried metrics</li>
                <li>Implement proper alert routing and notification</li>
                <li>Create role-based dashboards for different teams</li>
                <li>Monitor the monitoring stack itself</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>A well-configured monitoring stack is essential for maintaining reliable Kubernetes clusters. Prometheus and Grafana provide a powerful, flexible solution for comprehensive observability.</p>
        `,
        date: "2024-01-20",
        readTime: "9 min read",
        tags: ["Monitoring", "Prometheus", "Grafana", "Observability"],
        icon: "📊",
        author: "Saransh"
    },
    {
        id: 5,
        title: "Kubernetes Networking Demystified",
        excerpt: "Understanding Kubernetes networking concepts including Services, Ingress, Network Policies, and service mesh implementations.",
        content: `
            <p>Kubernetes networking can be complex, but understanding the fundamentals is crucial for building robust applications.</p>
            
            <h2>The Kubernetes Network Model</h2>
            <p>Kubernetes imposes the following fundamental requirements:</p>
            <ul>
                <li>Pods can communicate with all other pods without NAT</li>
                <li>Nodes can communicate with all pods without NAT</li>
                <li>The IP a pod sees itself as is the same IP others see it as</li>
            </ul>
            
            <h2>Services</h2>
            <p>Services provide stable networking for pods.</p>
            
            <h3>ClusterIP (Default)</h3>
            <pre><code>apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  type: ClusterIP
  selector:
    app: my-app
  ports:
  - port: 80
    targetPort: 8080</code></pre>
            
            <h3>NodePort</h3>
            <p>Exposes the service on each node's IP at a static port.</p>
            
            <h3>LoadBalancer</h3>
            <p>Exposes the service externally using a cloud provider's load balancer.</p>
            
            <h2>Ingress</h2>
            <p>Ingress manages external access to services, typically HTTP/HTTPS.</p>
            <pre><code>apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: my-service
            port:
              number: 80</code></pre>
            
            <h2>Network Policies</h2>
            <p>Control traffic flow between pods and network endpoints.</p>
            <pre><code>apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-frontend
spec:
  podSelector:
    matchLabels:
      app: backend
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: frontend
    ports:
    - protocol: TCP
      port: 8080</code></pre>
            
            <h2>Service Mesh</h2>
            <p>Service meshes like Istio and Linkerd provide advanced networking features:</p>
            <ul>
                <li>Traffic management and routing</li>
                <li>Service-to-service authentication</li>
                <li>Observability and tracing</li>
                <li>Circuit breaking and retries</li>
            </ul>
            
            <h2>DNS in Kubernetes</h2>
            <p>CoreDNS provides service discovery within the cluster.</p>
            <ul>
                <li>Service: my-service.my-namespace.svc.cluster.local</li>
                <li>Pod: pod-ip.my-namespace.pod.cluster.local</li>
            </ul>
            
            <h2>Troubleshooting Network Issues</h2>
            <pre><code># Test connectivity
kubectl run -it --rm debug --image=nicolaka/netshoot --restart=Never -- /bin/bash

# Check DNS resolution
nslookup my-service

# Test connectivity
curl http://my-service:80</code></pre>
            
            <h2>Conclusion</h2>
            <p>Understanding Kubernetes networking is essential for building reliable, scalable applications. Start with the basics and gradually explore advanced concepts like service meshes as your needs grow.</p>
        `,
        date: "2024-01-15",
        readTime: "11 min read",
        tags: ["Networking", "Kubernetes", "Service Mesh", "Ingress"],
        icon: "🌐",
        author: "Saransh"
    },
    {
        id: 6,
        title: "Helm Charts: Package Management for Kubernetes",
        excerpt: "Master Helm charts for efficient Kubernetes application deployment, including chart creation, templating, and best practices.",
        content: `
            <p>Helm is the package manager for Kubernetes, making it easier to define, install, and upgrade complex Kubernetes applications.</p>
            
            <h2>What is Helm?</h2>
            <p>Helm helps you manage Kubernetes applications through Helm Charts, which define, install, and upgrade even the most complex Kubernetes applications.</p>
            
            <h2>Installing Helm</h2>
            <pre><code># Using script
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash

# Verify installation
helm version</code></pre>
            
            <h2>Basic Helm Commands</h2>
            <pre><code># Add a repository
helm repo add bitnami https://charts.bitnami.com/bitnami

# Search for charts
helm search repo nginx

# Install a chart
helm install my-release bitnami/nginx

# List releases
helm list

# Upgrade a release
helm upgrade my-release bitnami/nginx

# Uninstall a release
helm uninstall my-release</code></pre>
            
            <h2>Creating Your First Chart</h2>
            <pre><code># Create a new chart
helm create my-app

# Chart structure
my-app/
  Chart.yaml          # Chart metadata
  values.yaml         # Default configuration values
  charts/             # Chart dependencies
  templates/          # Template files
    deployment.yaml
    service.yaml
    ingress.yaml
    _helpers.tpl      # Template helpers</code></pre>
            
            <h2>Chart.yaml Example</h2>
            <pre><code>apiVersion: v2
name: my-app
description: A Helm chart for my application
type: application
version: 0.1.0
appVersion: "1.0"
dependencies:
  - name: postgresql
    version: 11.x.x
    repository: https://charts.bitnami.com/bitnami</code></pre>
            
            <h2>Templating</h2>
            <p>Helm uses Go templates for dynamic configuration.</p>
            <pre><code>apiVersion: v1
kind: Service
metadata:
  name: {{ include "my-app.fullname" . }}
  labels:
    {{- include "my-app.labels" . | nindent 4 }}
spec:
  type: {{ .Values.service.type }}
  ports:
    - port: {{ .Values.service.port }}
      targetPort: http
  selector:
    {{- include "my-app.selectorLabels" . | nindent 4 }}</code></pre>
            
            <h2>Values.yaml</h2>
            <pre><code>replicaCount: 3

image:
  repository: nginx
  pullPolicy: IfNotPresent
  tag: "1.21"

service:
  type: ClusterIP
  port: 80

ingress:
  enabled: true
  className: nginx
  hosts:
    - host: example.com
      paths:
        - path: /
          pathType: Prefix

resources:
  limits:
    cpu: 100m
    memory: 128Mi
  requests:
    cpu: 100m
    memory: 128Mi</code></pre>
            
            <h2>Best Practices</h2>
            <ul>
                <li>Use semantic versioning for charts</li>
                <li>Document all values in values.yaml with comments</li>
                <li>Use _helpers.tpl for reusable template snippets</li>
                <li>Test charts with 'helm lint' and 'helm template'</li>
                <li>Use .helmignore to exclude unnecessary files</li>
                <li>Implement proper RBAC in charts</li>
            </ul>
            
            <h2>Testing Charts</h2>
            <pre><code># Lint the chart
helm lint my-app/

# Dry run installation
helm install my-release my-app/ --dry-run --debug

# Template rendering
helm template my-release my-app/</code></pre>
            
            <h2>Conclusion</h2>
            <p>Helm simplifies Kubernetes application management significantly. By mastering Helm charts, you can create reusable, configurable, and maintainable Kubernetes deployments.</p>
        `,
        date: "2024-01-08",
        readTime: "7 min read",
        tags: ["Helm", "Kubernetes", "Package Management", "DevOps"],
        icon: "📦",
        author: "Saransh"
    }
];

// Load all blog posts
function loadAllBlogPosts(filter = 'all') {
    const blogGrid = document.getElementById('blogPostsGrid');
    if (!blogGrid) return;

    let filteredPosts = allBlogPosts;
    
    if (filter !== 'all') {
        filteredPosts = allBlogPosts.filter(post => 
            post.tags.includes(filter)
        );
    }

    blogGrid.innerHTML = filteredPosts.map(post => `
        <div class="blog-article" data-tags="${post.tags.join(',')}" onclick="openBlogPost(${post.id})">
            <div class="blog-article-image">${post.icon}</div>
            <div class="blog-article-content">
                <div class="blog-article-meta">
                    <span><i class="far fa-calendar"></i> ${formatDate(post.date)}</span>
                    <span><i class="far fa-clock"></i> ${post.readTime}</span>
                    <span><i class="far fa-user"></i> ${post.author}</span>
                </div>
                <h3>${post.title}</h3>
                <p class="blog-article-excerpt">${post.excerpt}</p>
                <div class="blog-article-tags">
                    ${post.tags.map(tag => `<span class="blog-article-tag">${tag}</span>`).join('')}
                </div>
                <span class="read-more">Read More <i class="fas fa-arrow-right"></i></span>
            </div>
        </div>
    `).join('');
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Open blog post (for now, just scroll to top - can be extended to show full post)
function openBlogPost(postId) {
    window.location.href = `blog-post.html?id=${postId}`;
}

// Filter functionality
document.addEventListener('DOMContentLoaded', () => {
    loadAllBlogPosts();

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            loadAllBlogPosts(filter);
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput?.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const articles = document.querySelectorAll('.blog-article');
        
        articles.forEach(article => {
            const title = article.querySelector('h3').textContent.toLowerCase();
            const excerpt = article.querySelector('.blog-article-excerpt').textContent.toLowerCase();
            const tags = article.getAttribute('data-tags').toLowerCase();
            
            if (title.includes(searchTerm) || excerpt.includes(searchTerm) || tags.includes(searchTerm)) {
                article.style.display = 'flex';
            } else {
                article.style.display = 'none';
            }
        });
    });

    // Mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});

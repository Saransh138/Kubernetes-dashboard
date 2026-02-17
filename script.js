// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Blog posts data
const blogPosts = [
    {
        title: "Kubernetes Best Practices for Production",
        excerpt: "Learn essential best practices for running Kubernetes clusters in production environments, including security, monitoring, and resource management.",
        date: "2024-02-10",
        readTime: "8 min read",
        tags: ["Kubernetes", "DevOps", "Production"],
        icon: "⚙️"
    },
    {
        title: "Implementing GitOps with ArgoCD",
        excerpt: "A comprehensive guide to implementing GitOps workflows using ArgoCD for automated Kubernetes deployments and continuous delivery.",
        date: "2024-02-05",
        readTime: "10 min read",
        tags: ["GitOps", "ArgoCD", "CI/CD"],
        icon: "🔄"
    },
    {
        title: "Securing Kubernetes Clusters: A Complete Guide",
        excerpt: "Deep dive into Kubernetes security best practices, from RBAC and network policies to pod security standards and secrets management.",
        date: "2024-01-28",
        readTime: "12 min read",
        tags: ["Security", "Kubernetes", "DevSecOps"],
        icon: "🔒"
    },
    {
        title: "Monitoring Kubernetes with Prometheus & Grafana",
        excerpt: "Set up comprehensive monitoring for your Kubernetes clusters using Prometheus for metrics collection and Grafana for visualization.",
        date: "2024-01-20",
        readTime: "9 min read",
        tags: ["Monitoring", "Prometheus", "Grafana"],
        icon: "📊"
    },
    {
        title: "Kubernetes Networking Demystified",
        excerpt: "Understanding Kubernetes networking concepts including Services, Ingress, Network Policies, and service mesh implementations.",
        date: "2024-01-15",
        readTime: "11 min read",
        tags: ["Networking", "Kubernetes", "Service Mesh"],
        icon: "🌐"
    },
    {
        title: "Helm Charts: Package Management for Kubernetes",
        excerpt: "Master Helm charts for efficient Kubernetes application deployment, including chart creation, templating, and best practices.",
        date: "2024-01-08",
        readTime: "7 min read",
        tags: ["Helm", "Kubernetes", "Package Management"],
        icon: "📦"
    }
];

// Load blog posts
function loadBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    const postsToShow = blogPosts.slice(0, 3);
    
    blogGrid.innerHTML = postsToShow.map(post => `
        <div class="blog-card" onclick="window.location.href='blog.html'">
            <div class="blog-image">${post.icon}</div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span><i class="far fa-calendar"></i> ${formatDate(post.date)}</span>
                    <span><i class="far fa-clock"></i> ${post.readTime}</span>
                </div>
                <h3>${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-tags">
                    ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles if not already present
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                z-index: 10000;
                animation: slideIn 0.3s ease;
                max-width: 400px;
            }
            .notification-success {
                background: #10b981;
                color: white;
            }
            .notification-error {
                background: #ef4444;
                color: white;
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
            }
            .notification-content i {
                font-size: 1.25rem;
            }
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    loadBlogPosts();
    
    // Add animation classes
    const animateElements = document.querySelectorAll('.project-card, .blog-card, .skill-category');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Terminal typing effect
const terminalCommands = [
    'kubectl get pods --all-namespaces',
    'kubectl get services',
    'kubectl describe deployment nginx',
    'helm list --all-namespaces',
    'kubectl logs -f pod/nginx-deployment'
];

let commandIndex = 0;

function typeCommand() {
    const terminalBody = document.querySelector('.terminal-body');
    if (!terminalBody) return;
    
    // Clear and add new command
    setTimeout(() => {
        const command = terminalCommands[commandIndex];
        terminalBody.innerHTML = `
            <p><span class="prompt">$</span> ${command}</p>
            <p class="output">NAMESPACE     NAME                    READY   STATUS</p>
            <p class="output success">kube-system   coredns-5d78c9869d     1/1     Running</p>
            <p class="output success">default       nginx-deployment       3/3     Running</p>
            <p><span class="prompt">$</span> <span class="cursor">|</span></p>
        `;
        
        commandIndex = (commandIndex + 1) % terminalCommands.length;
    }, 5000);
}

// Start terminal animation
setInterval(typeCommand, 5000);


// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animate counters when hero section is visible
            if (entry.target.classList.contains('hero-stats')) {
                animateCounters();
            }
        }
    });
}, observerOptions);

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .blog-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(el);
    });
    
    // Observe hero stats for counter animation
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        fadeInObserver.observe(heroStats);
    }
    
    // Create particles
    createParticles();
});

// Create animated particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: rgba(0, 245, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Add particle float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0);
        }
        25% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
        }
        50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
        }
        75% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
        }
    }
`;
document.head.appendChild(style);


// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add loading animation to page - REMOVED (was causing issues)
// window.addEventListener('load', () => {
//     document.body.classList.add('loaded');
// });

// Improve mobile menu close on link click
const navLinks = document.querySelectorAll('.nav-link');
const navMenu = document.getElementById('navMenu');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

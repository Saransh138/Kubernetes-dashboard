#!/bin/bash

# Portfolio Deployment Script for devsecopssolution.in
# This script helps deploy the portfolio website

set -e

echo "🚀 DevSecOps Solutions - Portfolio Deployment"
echo "=============================================="

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored output
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# Check if running as root for system-wide deployment
check_permissions() {
    if [ "$EUID" -ne 0 ] && [ "$1" == "system" ]; then 
        print_error "Please run as root for system-wide deployment"
        exit 1
    fi
}

# Deployment options
echo ""
echo "Select deployment option:"
echo "1) Deploy to Netlify"
echo "2) Deploy to Vercel"
echo "3) Deploy to local Nginx"
echo "4) Build Docker image"
echo "5) Deploy to Kubernetes"
echo "6) Create deployment package"
read -p "Enter option (1-6): " option

case $option in
    1)
        print_info "Deploying to Netlify..."
        if ! command -v netlify &> /dev/null; then
            print_error "Netlify CLI not found. Installing..."
            npm install -g netlify-cli
        fi
        netlify deploy --prod --dir=.
        print_success "Deployed to Netlify!"
        ;;
    
    2)
        print_info "Deploying to Vercel..."
        if ! command -v vercel &> /dev/null; then
            print_error "Vercel CLI not found. Installing..."
            npm install -g vercel
        fi
        vercel --prod
        print_success "Deployed to Vercel!"
        ;;
    
    3)
        print_info "Deploying to local Nginx..."
        check_permissions "system"
        
        # Install Nginx if not present
        if ! command -v nginx &> /dev/null; then
            print_info "Installing Nginx..."
            apt-get update
            apt-get install -y nginx
        fi
        
        # Copy files
        print_info "Copying files to /var/www/devsecopssolution..."
        mkdir -p /var/www/devsecopssolution
        cp -r ./* /var/www/devsecopssolution/
        
        # Set permissions
        chown -R www-data:www-data /var/www/devsecopssolution
        chmod -R 755 /var/www/devsecopssolution
        
        # Create Nginx config
        cat > /etc/nginx/sites-available/devsecopssolution << 'EOF'
server {
    listen 80;
    listen [::]:80;
    
    server_name devsecopssolution.in www.devsecopssolution.in;
    
    root /var/www/devsecopssolution;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
EOF
        
        # Enable site
        ln -sf /etc/nginx/sites-available/devsecopssolution /etc/nginx/sites-enabled/
        
        # Test and reload Nginx
        nginx -t
        systemctl reload nginx
        
        print_success "Deployed to Nginx!"
        print_info "Access at: http://localhost or http://devsecopssolution.in"
        print_info "To enable HTTPS, run: sudo certbot --nginx -d devsecopssolution.in"
        ;;
    
    4)
        print_info "Building Docker image..."
        
        # Create Dockerfile if not exists
        if [ ! -f "Dockerfile" ]; then
            cat > Dockerfile << 'EOF'
FROM nginx:alpine

# Copy portfolio files
COPY . /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
EOF
        fi
        
        # Create nginx.conf
        cat > nginx.conf << 'EOF'
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
    
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
}
EOF
        
        # Build image
        docker build -t devsecopssolution-portfolio:latest .
        
        print_success "Docker image built successfully!"
        print_info "Run with: docker run -d -p 80:80 devsecopssolution-portfolio:latest"
        ;;
    
    5)
        print_info "Deploying to Kubernetes..."
        
        # Create ConfigMap from files
        kubectl create configmap portfolio-files --from-file=. --dry-run=client -o yaml > portfolio-configmap.yaml
        
        # Create deployment manifest
        cat > portfolio-k8s.yaml << 'EOF'
apiVersion: apps/v1
kind: Deployment
metadata:
  name: portfolio
  labels:
    app: portfolio
spec:
  replicas: 2
  selector:
    matchLabels:
      app: portfolio
  template:
    metadata:
      labels:
        app: portfolio
    spec:
      containers:
      - name: nginx
        image: nginx:alpine
        ports:
        - containerPort: 80
        volumeMounts:
        - name: portfolio-content
          mountPath: /usr/share/nginx/html
        resources:
          requests:
            memory: "64Mi"
            cpu: "100m"
          limits:
            memory: "128Mi"
            cpu: "200m"
      volumes:
      - name: portfolio-content
        configMap:
          name: portfolio-files
---
apiVersion: v1
kind: Service
metadata:
  name: portfolio
spec:
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 80
  selector:
    app: portfolio
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: portfolio
  annotations:
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
spec:
  ingressClassName: nginx
  tls:
  - hosts:
    - devsecopssolution.in
    - www.devsecopssolution.in
    secretName: portfolio-tls
  rules:
  - host: devsecopssolution.in
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: portfolio
            port:
              number: 80
EOF
        
        # Apply to cluster
        kubectl apply -f portfolio-configmap.yaml
        kubectl apply -f portfolio-k8s.yaml
        
        print_success "Deployed to Kubernetes!"
        print_info "Check status: kubectl get pods -l app=portfolio"
        ;;
    
    6)
        print_info "Creating deployment package..."
        
        # Create package directory
        PACKAGE_NAME="devsecopssolution-portfolio-$(date +%Y%m%d-%H%M%S)"
        mkdir -p "../$PACKAGE_NAME"
        
        # Copy files
        cp -r ./* "../$PACKAGE_NAME/"
        
        # Create archive
        cd ..
        tar -czf "$PACKAGE_NAME.tar.gz" "$PACKAGE_NAME"
        rm -rf "$PACKAGE_NAME"
        
        print_success "Package created: $PACKAGE_NAME.tar.gz"
        print_info "Upload this package to your web host"
        ;;
    
    *)
        print_error "Invalid option"
        exit 1
        ;;
esac

echo ""
print_success "Deployment completed!"
echo ""

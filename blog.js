// Extended blog posts with full content
const allBlogPosts = [
    {
        id: 8,
        title: "Docker Mastery: From Zero to Hero with Visual Architecture",
        excerpt: "A comprehensive, visually-rich guide to mastering Docker from scratch. Learn containers, images, Dockerfiles, networking, and orchestration with animated explanations and real-world examples.",
        content: `
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; color: white; margin-bottom: 30px;">
                <h1 style="color: white; margin: 0 0 10px 0;">🐳 Docker Mastery: The Complete Visual Guide</h1>
                <p style="margin: 0; font-size: 18px;">Master containerization from the ground up with animated architecture diagrams and hands-on examples</p>
            </div>

            <h2>📚 Table of Contents</h2>
            <ol style="line-height: 2;">
                <li><a href="#what-is-docker">What is Docker? The Big Picture</a></li>
                <li><a href="#architecture">Docker Architecture Explained</a></li>
                <li><a href="#images-vs-containers">Images vs Containers: The Blueprint Analogy</a></li>
                <li><a href="#dockerfile">Dockerfile: Building Your First Image</a></li>
                <li><a href="#container-lifecycle">Container Lifecycle Management</a></li>
                <li><a href="#networking">Docker Networking Deep Dive</a></li>
                <li><a href="#volumes">Data Persistence with Volumes</a></li>
                <li><a href="#docker-compose">Multi-Container Apps with Docker Compose</a></li>
                <li><a href="#best-practices">Production Best Practices</a></li>
            </ol>

            <hr style="margin: 40px 0; border: none; border-top: 2px solid #e0e0e0;">

            <h2 id="what-is-docker">1. What is Docker? The Big Picture 🎯</h2>
            
            <div style="background: #2d3748; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0; color: #e2e8f0;">
                <h3 style="margin-top: 0; color: #fff;">The Problem Docker Solves</h3>
                <p><strong>Before Docker:</strong> "It works on my machine!" 😫</p>
                <ul>
                    <li>Different OS versions across dev, staging, production</li>
                    <li>Dependency conflicts between applications</li>
                    <li>Complex setup and deployment processes</li>
                    <li>Resource waste from running full VMs</li>
                </ul>
                <p><strong>After Docker:</strong> "It works everywhere!" 🎉</p>
            </div>

            <h3>🏗️ The Shipping Container Analogy</h3>
            <p>Think of Docker like shipping containers in the real world:</p>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
                <div style="background: #1a365d; padding: 15px; border-radius: 8px; color: #e2e8f0;">
                    <h4 style="color: #90cdf4;">🚢 Physical Shipping Container</h4>
                    <ul>
                        <li>Standard size and shape</li>
                        <li>Can hold anything inside</li>
                        <li>Works on ships, trucks, trains</li>
                        <li>Isolated from other containers</li>
                    </ul>
                </div>
                <div style="background: #44337a; padding: 15px; border-radius: 8px; color: #e2e8f0;">
                    <h4 style="color: #d6bcfa;">🐳 Docker Container</h4>
                    <ul>
                        <li>Standard runtime environment</li>
                        <li>Can run any application</li>
                        <li>Works on any OS with Docker</li>
                        <li>Isolated from other containers</li>
                    </ul>
                </div>
            </div>

            <h2 id="architecture">2. Docker Architecture Explained 🏛️</h2>
            
            <div style="background: #2d3748; padding: 20px; border-radius: 10px; margin: 20px 0; color: #e2e8f0;">
                <h3 style="color: #fff;">Visual Architecture Breakdown</h3>
                <pre style="background: #263238; color: #aed581; padding: 15px; border-radius: 5px; overflow-x: auto;">
┌─────────────────────────────────────────────────────────────┐
│                     YOUR COMPUTER                            │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │           DOCKER CLIENT (CLI)                      │    │
│  │   $ docker run, docker build, docker pull          │    │
│  └──────────────────┬─────────────────────────────────┘    │
│                     │ REST API                              │
│                     ▼                                        │
│  ┌────────────────────────────────────────────────────┐    │
│  │           DOCKER DAEMON (dockerd)                  │    │
│  │   • Manages containers, images, networks, volumes  │    │
│  │   • Listens for API requests                       │    │
│  └──────────────────┬─────────────────────────────────┘    │
│                     │                                        │
│         ┌───────────┴───────────┬──────────────┐           │
│         ▼                       ▼              ▼           │
│  ┌──────────┐          ┌──────────┐    ┌──────────┐       │
│  │Container1│          │Container2│    │Container3│       │
│  │  nginx   │          │  redis   │    │  postgres│       │
│  │  :80     │          │  :6379   │    │  :5432   │       │
│  └──────────┘          └──────────┘    └──────────┘       │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │              DOCKER IMAGES (Local)                 │    │
│  │   ubuntu:22.04, nginx:latest, node:18-alpine      │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                          │
                          │ docker pull/push
                          ▼
              ┌─────────────────────────┐
              │   DOCKER HUB (Registry) │
              │   hub.docker.com        │
              └─────────────────────────┘
                </pre>
            </div>

            <h3>Key Components Explained</h3>
            <ol>
                <li><strong>Docker Client:</strong> The command-line tool you interact with (<code>docker</code> command)</li>
                <li><strong>Docker Daemon:</strong> The background service that does the heavy lifting</li>
                <li><strong>Docker Registry:</strong> Storage for Docker images (Docker Hub, private registries)</li>
                <li><strong>Containers:</strong> Running instances of images</li>
                <li><strong>Images:</strong> Read-only templates for creating containers</li>
            </ol>

            <h2 id="images-vs-containers">3. Images vs Containers: The Blueprint Analogy 📐</h2>
            
            <div style="background: #1a202c; padding: 25px; border-radius: 10px; margin: 20px 0; color: #e2e8f0;">
                <h3 style="color: #fff;">Think of it like Building a House</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 20px;">
                    <div>
                        <h4 style="color: #90cdf4;">🏗️ Docker Image = Blueprint</h4>
                        <ul>
                            <li>Read-only template</li>
                            <li>Contains OS, app code, dependencies</li>
                            <li>Can create multiple containers from one image</li>
                            <li>Stored in layers (like floors in a building)</li>
                        </ul>
                        <pre style="background: #263238; color: #aed581; padding: 10px; border-radius: 5px;"><code>docker images
# Lists all blueprints</code></pre>
                    </div>
                    <div>
                        <h4 style="color: #d6bcfa;">🏠 Docker Container = Actual House</h4>
                        <ul>
                            <li>Running instance of an image</li>
                            <li>Has its own filesystem, network, processes</li>
                            <li>Can be started, stopped, deleted</li>
                            <li>Changes don't affect the image</li>
                        </ul>
                        <pre style="background: #263238; color: #aed581; padding: 10px; border-radius: 5px;"><code>docker ps
# Lists all running houses</code></pre>
                    </div>
                </div>
            </div>

            <h3>Image Layers: The Secret Sauce 🎂</h3>
            <p>Docker images are built in layers, like a cake:</p>
            <pre style="background: #263238; color: #aed581; padding: 20px; border-radius: 8px; overflow-x: auto;">
┌─────────────────────────────────────┐
│  Layer 4: Your Application Code    │  ← Your app (5 MB)
├─────────────────────────────────────┤
│  Layer 3: Node.js Dependencies      │  ← npm packages (50 MB)
├─────────────────────────────────────┤
│  Layer 2: Node.js Runtime           │  ← Node.js (100 MB)
├─────────────────────────────────────┤
│  Layer 1: Base OS (Ubuntu/Alpine)   │  ← Operating system (30 MB)
└─────────────────────────────────────┘

💡 Each layer is cached! If Layer 1-3 don't change,
   Docker reuses them = SUPER FAST builds!
            </pre>

            <h2 id="dockerfile">4. Dockerfile: Building Your First Image 🔨</h2>
            
            <p>A Dockerfile is a recipe for creating an image. Let's build a Node.js app step by step:</p>

            <h3>Example: Simple Node.js Web Server</h3>
            
            <div style="background: #2d3748; padding: 15px; border-radius: 8px; margin: 20px 0; color: #e2e8f0;">
                <h4 style="color: #90cdf4;">Step 1: Create app.js</h4>
                <pre><code>// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Docker! 🐳');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});</code></pre>
            </div>

            <div style="background: #1c4532; padding: 15px; border-radius: 8px; margin: 20px 0; color: #e2e8f0;">
                <h4 style="color: #9ae6b4;">Step 2: Create package.json</h4>
                <pre><code>{
  "name": "docker-demo",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.0"
  },
  "scripts": {
    "start": "node app.js"
  }
}</code></pre>
            </div>

            <div style="background: #744210; padding: 15px; border-radius: 8px; margin: 20px 0; color: #e2e8f0;">
                <h4 style="color: #fbd38d;">Step 3: Create Dockerfile (The Magic Recipe! ✨)</h4>
                <pre><code># Dockerfile - Every line creates a new layer!

# 1. Start with a base image (the foundation)
FROM node:18-alpine
# Why alpine? It's tiny! (5MB vs 900MB for full node image)

# 2. Set working directory inside container
WORKDIR /app
# All commands run from here

# 3. Copy package files first (for caching!)
COPY package*.json ./
# If these don't change, Docker reuses this layer

# 4. Install dependencies
RUN npm install --production
# Only runs if package.json changed

# 5. Copy application code
COPY . .
# Your app code goes here

# 6. Expose port (documentation, not security)
EXPOSE 3000
# Tells others which port the app uses

# 7. Define startup command
CMD ["npm", "start"]
# Runs when container starts</code></pre>
            </div>

            <h3>🎯 Dockerfile Best Practices Explained</h3>
            <div style="background: #1e4e5f; padding: 20px; border-radius: 8px; margin: 20px 0; color: #e2e8f0;">
                <h4 style="color: #90cdf4;">1. Order Matters for Caching</h4>
                <pre><code># ❌ BAD: Copy everything first
COPY . .
RUN npm install
# Every code change = reinstall all packages!

# ✅ GOOD: Copy package.json first
COPY package*.json ./
RUN npm install
COPY . .
# Code changes don't trigger npm install!</code></pre>

                <h4>2. Use .dockerignore</h4>
                <pre><code># .dockerignore (like .gitignore)
node_modules
npm-debug.log
.git
.env
*.md</code></pre>

                <h4>3. Multi-stage Builds (Advanced)</h4>
                <pre><code># Build stage
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install --production
CMD ["node", "dist/server.js"]

# Result: Smaller final image! 🎉</code></pre>
            </div>

            <h3>Building and Running Your Image</h3>
            <pre><code># Build the image
docker build -t my-node-app:1.0 .
#        │      │           │    │
#        │      │           │    └─ Build context (current directory)
#        │      │           └────── Version tag
#        │      └────────────────── Image name
#        └───────────────────────── Tag flag

# Run a container from the image
docker run -d -p 3000:3000 --name my-app my-node-app:1.0
#          │  │            │              │
#          │  │            │              └─ Image to use
#          │  │            └──────────────── Container name
#          │  └───────────────────────────── Port mapping (host:container)
#          └──────────────────────────────── Detached mode (background)

# Test it!
curl http://localhost:3000
# Output: Hello from Docker! 🐳</code></pre>

            <h2 id="container-lifecycle">5. Container Lifecycle Management 🔄</h2>
            
            <div style="background: #44337a; padding: 20px; border-radius: 10px; margin: 20px 0; color: #e2e8f0;">
                <h3 style="color: #fff;">Container States Visualized</h3>
                <pre style="background: #263238; color: #aed581; padding: 15px; border-radius: 5px;">
                    ┌─────────┐
                    │ CREATED │
                    └────┬────┘
                         │ docker start
                         ▼
    ┌──────────────────────────────────┐
    │          RUNNING                 │ ◄─┐
    │  • Processes executing           │   │
    │  • Using CPU/Memory              │   │ docker restart
    │  • Network accessible            │   │
    └──┬───────────────────────────┬───┘   │
       │                           │       │
       │ docker stop               │ docker pause
       │                           │       │
       ▼                           ▼       │
    ┌─────────┐               ┌─────────┐ │
    │ STOPPED │               │ PAUSED  │─┘
    └────┬────┘               └─────────┘
         │                         │
         │ docker rm               │ docker unpause
         ▼                         ▼
    ┌─────────┐               (back to RUNNING)
    │ DELETED │
    └─────────┘
                </pre>
            </div>

            <h3>Essential Container Commands</h3>
            <pre><code># List containers
docker ps              # Running containers only
docker ps -a           # All containers (including stopped)

# Start/Stop containers
docker start my-app    # Start stopped container
docker stop my-app     # Graceful shutdown (SIGTERM)
docker kill my-app     # Force stop (SIGKILL)
docker restart my-app  # Stop then start

# Interact with containers
docker exec -it my-app bash        # Open shell inside container
docker logs my-app                 # View container logs
docker logs -f my-app              # Follow logs (like tail -f)
docker stats                       # Real-time resource usage

# Inspect containers
docker inspect my-app              # Detailed JSON info
docker top my-app                  # Running processes
docker port my-app                 # Port mappings

# Clean up
docker rm my-app                   # Remove stopped container
docker rm -f my-app                # Force remove running container
docker container prune             # Remove all stopped containers</code></pre>

            <h3>🎓 Pro Tips for Container Management</h3>
            <div style="background: #744210; padding: 15px; border-radius: 8px; margin: 20px 0; color: #e2e8f0;">
                <ul>
                    <li><strong>Always name your containers:</strong> <code style="background: #2d3748; padding: 2px 6px; border-radius: 3px;">--name my-app</code> instead of random names</li>
                    <li><strong>Use restart policies:</strong> <code style="background: #2d3748; padding: 2px 6px; border-radius: 3px;">--restart unless-stopped</code> for production</li>
                    <li><strong>Limit resources:</strong> <code style="background: #2d3748; padding: 2px 6px; border-radius: 3px;">--memory="512m" --cpus="1.0"</code></li>
                    <li><strong>Health checks:</strong> Add HEALTHCHECK in Dockerfile for monitoring</li>
                </ul>
            </div>

            <h2 id="networking">6. Docker Networking Deep Dive 🌐</h2>
            
            <p>Docker networking allows containers to communicate with each other and the outside world.</p>

            <h3>Network Types</h3>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin: 20px 0;">
                <div style="background: #1a365d; padding: 15px; border-radius: 8px; color: #e2e8f0;">
                    <h4 style="color: #90cdf4;">🌉 Bridge (Default)</h4>
                    <p>Containers on same host communicate via internal network</p>
                    <pre><code>docker network create my-network
docker run --network my-network nginx</code></pre>
                </div>
                <div style="background: #44337a; padding: 15px; border-radius: 8px; color: #e2e8f0;">
                    <h4 style="color: #d6bcfa;">🏠 Host</h4>
                    <p>Container uses host's network directly (no isolation)</p>
                    <pre><code>docker run --network host nginx</code></pre>
                </div>
                <div style="background: #744210; padding: 15px; border-radius: 8px; color: #e2e8f0;">
                    <h4 style="color: #fbd38d;">🚫 None</h4>
                    <p>No network access (complete isolation)</p>
                    <pre><code>docker run --network none alpine</code></pre>
                </div>
                <div style="background: #1c4532; padding: 15px; border-radius: 8px; color: #e2e8f0;">
                    <h4 style="color: #9ae6b4;">🔗 Overlay</h4>
                    <p>Multi-host networking (Docker Swarm)</p>
                    <pre><code>docker network create -d overlay my-overlay</code></pre>
                </div>
            </div>

            <h3>Container Communication Example</h3>
            <pre><code># Create a custom network
docker network create app-network

# Run database container
docker run -d \\
  --name postgres-db \\
  --network app-network \\
  -e POSTGRES_PASSWORD=secret \\
  postgres:15

# Run app container (can access db by name!)
docker run -d \\
  --name web-app \\
  --network app-network \\
  -e DATABASE_URL=postgresql://postgres-db:5432/mydb \\
  my-node-app:1.0

# Inside web-app container, you can:
# ping postgres-db  ← Works! DNS resolution by container name</code></pre>

            <h2 id="volumes">7. Data Persistence with Volumes 💾</h2>
            
            <div style="background: #742a2a; padding: 20px; border-radius: 10px; margin: 20px 0; color: #e2e8f0;">
                <h3 style="color: #fff;">⚠️ Important: Containers are Ephemeral!</h3>
                <p>When you delete a container, all data inside is LOST! Use volumes to persist data.</p>
            </div>

            <h3>Three Ways to Persist Data</h3>
            <pre style="background: #263238; color: #aed581; padding: 20px; border-radius: 8px;">
1. VOLUMES (Recommended) 🏆
   Managed by Docker, stored in /var/lib/docker/volumes/
   
   docker volume create my-data
   docker run -v my-data:/app/data nginx

2. BIND MOUNTS
   Mount host directory into container
   
   docker run -v /host/path:/container/path nginx

3. TMPFS MOUNTS (Memory only)
   Stored in RAM, lost on container stop
   
   docker run --tmpfs /app/cache nginx
            </pre>

            <h3>Volume Management Commands</h3>
            <pre><code># Create volume
docker volume create postgres-data

# List volumes
docker volume ls

# Inspect volume
docker volume inspect postgres-data

# Use volume with container
docker run -d \\
  --name db \\
  -v postgres-data:/var/lib/postgresql/data \\
  postgres:15

# Backup volume
docker run --rm \\
  -v postgres-data:/data \\
  -v $(pwd):/backup \\
  alpine tar czf /backup/backup.tar.gz /data

# Remove volume
docker volume rm postgres-data

# Clean up unused volumes
docker volume prune</code></pre>

            <h2 id="docker-compose">8. Multi-Container Apps with Docker Compose 🎼</h2>
            
            <p>Docker Compose lets you define and run multi-container applications using a YAML file.</p>

            <h3>Complete Example: Full-Stack Application</h3>
            <pre><code># docker-compose.yml
version: '3.8'

services:
  # Frontend React App
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_API_URL=http://backend:8080
    depends_on:
      - backend
    networks:
      - app-network
    restart: unless-stopped

  # Backend Node.js API
  backend:
    build: ./backend
    ports:
      - "8080:8080"
    environment:
      - DATABASE_URL=postgresql://postgres:secret@db:5432/myapp
      - REDIS_URL=redis://cache:6379
    depends_on:
      - db
      - cache
    networks:
      - app-network
    volumes:
      - ./backend:/app
      - /app/node_modules
    restart: unless-stopped

  # PostgreSQL Database
  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=secret
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - app-network
    restart: unless-stopped

  # Redis Cache
  cache:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    networks:
      - app-network
    restart: unless-stopped

  # Nginx Reverse Proxy
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - frontend
      - backend
    networks:
      - app-network
    restart: unless-stopped

networks:
  app-network:
    driver: bridge

volumes:
  postgres-data:</code></pre>

            <h3>Docker Compose Commands</h3>
            <pre><code># Start all services
docker-compose up -d

# View logs
docker-compose logs -f
docker-compose logs backend  # Specific service

# List services
docker-compose ps

# Stop services
docker-compose stop

# Stop and remove containers
docker-compose down

# Rebuild images
docker-compose build
docker-compose up -d --build

# Scale services
docker-compose up -d --scale backend=3

# Execute command in service
docker-compose exec backend bash</code></pre>

            <h2 id="best-practices">9. Production Best Practices 🏆</h2>
            
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 25px; border-radius: 10px; color: white; margin: 20px 0;">
                <h3 style="color: white;">Security Best Practices</h3>
                <ul style="line-height: 1.8;">
                    <li>✅ Use official base images from trusted sources</li>
                    <li>✅ Scan images for vulnerabilities (docker scan, Trivy)</li>
                    <li>✅ Run containers as non-root user</li>
                    <li>✅ Use secrets management (Docker secrets, Vault)</li>
                    <li>✅ Keep images updated and minimal</li>
                    <li>✅ Use read-only filesystems where possible</li>
                </ul>
            </div>

            <h3>Dockerfile Security Example</h3>
            <pre><code># Secure Dockerfile
FROM node:18-alpine

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \\
    adduser -S nodejs -u 1001

# Set working directory
WORKDIR /app

# Copy files with correct ownership
COPY --chown=nodejs:nodejs package*.json ./
RUN npm ci --only=production

COPY --chown=nodejs:nodejs . .

# Switch to non-root user
USER nodejs

# Use exec form for proper signal handling
CMD ["node", "server.js"]</code></pre>

            <h3>Performance Optimization</h3>
            <ul>
                <li><strong>Use Alpine images:</strong> 5MB vs 900MB for full images</li>
                <li><strong>Multi-stage builds:</strong> Separate build and runtime stages</li>
                <li><strong>Layer caching:</strong> Order Dockerfile commands strategically</li>
                <li><strong>Minimize layers:</strong> Combine RUN commands with &&</li>
                <li><strong>.dockerignore:</strong> Exclude unnecessary files</li>
            </ul>

            <h3>Monitoring and Logging</h3>
            <pre><code># View container stats
docker stats

# Export logs to file
docker logs my-app > app.log 2>&1

# Use logging drivers
docker run --log-driver=json-file \\
  --log-opt max-size=10m \\
  --log-opt max-file=3 \\
  my-app

# Health checks in Dockerfile
HEALTHCHECK --interval=30s --timeout=3s \\
  CMD curl -f http://localhost:3000/health || exit 1</code></pre>

            <h2>🎓 Summary: Your Docker Journey</h2>
            
            <div style="background: #1c4532; padding: 25px; border-radius: 10px; margin: 20px 0; color: #e2e8f0;">
                <h3 style="color: #fff;">What You've Learned</h3>
                <ol style="line-height: 2;">
                    <li>✅ Docker architecture and how it works</li>
                    <li>✅ Difference between images and containers</li>
                    <li>✅ Writing efficient Dockerfiles</li>
                    <li>✅ Managing container lifecycle</li>
                    <li>✅ Docker networking concepts</li>
                    <li>✅ Data persistence with volumes</li>
                    <li>✅ Multi-container apps with Docker Compose</li>
                    <li>✅ Production best practices</li>
                </ol>
            </div>

            <h3>Next Steps 🚀</h3>
            <ul>
                <li>Practice building your own Dockerfiles</li>
                <li>Containerize an existing application</li>
                <li>Learn Kubernetes for orchestration</li>
                <li>Explore Docker Swarm for clustering</li>
                <li>Implement CI/CD with Docker</li>
            </ul>

            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px; color: white; margin: 30px 0; text-align: center;">
                <h3 style="color: white; margin: 0 0 10px 0;">🐳 Happy Dockerizing!</h3>
                <p style="margin: 0;">You're now ready to containerize the world!</p>
            </div>

            <hr style="margin: 30px 0;">
            
            <p><em>Questions or feedback? Connect with me on <a href="https://www.linkedin.com/in/saransh-jain13/" target="_blank">LinkedIn</a> or <a href="https://github.com/Saransh138" target="_blank">GitHub</a>!</em></p>
        `,
        date: "2026-02-17",
        readTime: "25 min read",
        tags: ["Docker", "Containers", "DevOps", "Tutorial", "Beginner"],
        icon: "🐳",
        author: "Saransh Jain"
    },
    {
        id: 7,
        title: "Building iOS Apps with Azure Pipelines and Xcode",
        excerpt: "Complete guide to automating iOS app builds using Azure DevOps Pipelines with Xcode, including code signing, testing, and deployment to App Store Connect.",
        content: `
            <p>Automating iOS app builds and deployments can significantly improve your development workflow. This guide walks you through setting up Azure Pipelines to build Xcode projects and deploy to Apple's App Store Connect.</p>
            
            <h2>Prerequisites</h2>
            <p>Before starting, ensure you have:</p>
            <ul>
                <li>An Azure DevOps account and project</li>
                <li>An Apple Developer account</li>
                <li>Xcode project in a Git repository</li>
                <li>App Store Connect API key</li>
                <li>Valid provisioning profiles and certificates</li>
            </ul>
            
            <h2>Step 1: Set Up Azure Pipeline Agent</h2>
            <p>Azure Pipelines provides macOS agents with Xcode pre-installed. Specify the agent in your pipeline YAML:</p>
            <pre><code>pool:
  vmImage: 'macOS-latest'

variables:
  scheme: 'YourAppScheme'
  configuration: 'Release'
  sdk: 'iphoneos'</code></pre>
            
            <h2>Step 2: Install Certificates and Provisioning Profiles</h2>
            <p>Use the InstallAppleCertificate and InstallAppleProvisioningProfile tasks to securely install your signing credentials:</p>
            <pre><code>- task: InstallAppleCertificate@2
  inputs:
    certSecureFile: 'ios_distribution.p12'
    certPwd: '$(P12Password)'
    keychain: 'temp'

- task: InstallAppleProvisioningProfile@1
  inputs:
    provisioningProfileLocation: 'secureFiles'
    provProfileSecureFile: 'YourApp_AppStore.mobileprovision'</code></pre>
            
            <h2>Step 3: Build the Xcode Project</h2>
            <p>Use the Xcode task to build and archive your iOS app:</p>
            <pre><code>- task: Xcode@5
  inputs:
    actions: 'build archive'
    scheme: '$(scheme)'
    sdk: '$(sdk)'
    configuration: '$(configuration)'
    xcWorkspacePath: '**/*.xcworkspace'
    xcodeVersion: 'default'
    packageApp: true
    exportPath: '$(Build.ArtifactStagingDirectory)'
    exportOptions: 'plist'
    exportOptionsPlist: 'ExportOptions.plist'
    signingOption: 'manual'
    signingIdentity: '$(APPLE_CERTIFICATE_SIGNING_IDENTITY)'
    provisioningProfileUuid: '$(APPLE_PROV_PROFILE_UUID)'</code></pre>
            
            <h2>Step 4: Run Unit Tests</h2>
            <p>Execute your test suite before deployment:</p>
            <pre><code>- task: Xcode@5
  inputs:
    actions: 'test'
    scheme: '$(scheme)'
    sdk: 'iphonesimulator'
    configuration: 'Debug'
    xcWorkspacePath: '**/*.xcworkspace'
    destinationPlatformOption: 'iOS'
    destinationSimulators: 'iPhone 14'
    publishJUnitResults: true</code></pre>
            
            <h2>Step 5: Deploy to App Store Connect</h2>
            <p>Use the AppStoreRelease task to upload your IPA to App Store Connect:</p>
            <pre><code>- task: AppStoreRelease@1
  inputs:
    serviceEndpoint: 'AppStoreConnection'
    appIdentifier: 'com.yourcompany.yourapp'
    appType: 'iOS'
    ipaPath: '$(Build.ArtifactStagingDirectory)/**/*.ipa'
    releaseTrack: 'TestFlight'
    shouldSkipWaitingForProcessing: true
    shouldSkipSubmission: true</code></pre>
            
            <h2>Step 6: Complete Pipeline YAML</h2>
            <p>Here's the complete azure-pipelines.yml file:</p>
            <pre><code>trigger:
  branches:
    include:
    - main
    - release/*

pool:
  vmImage: 'macOS-latest'

variables:
  scheme: 'YourApp'
  configuration: 'Release'
  sdk: 'iphoneos'

steps:
- task: InstallAppleCertificate@2
  displayName: 'Install Apple Certificate'
  inputs:
    certSecureFile: 'ios_distribution.p12'
    certPwd: '$(P12Password)'
    keychain: 'temp'

- task: InstallAppleProvisioningProfile@1
  displayName: 'Install Provisioning Profile'
  inputs:
    provisioningProfileLocation: 'secureFiles'
    provProfileSecureFile: 'YourApp_AppStore.mobileprovision'

- task: CocoaPods@0
  displayName: 'Install CocoaPods'
  inputs:
    forceRepoUpdate: false

- task: Xcode@5
  displayName: 'Build and Archive'
  inputs:
    actions: 'build archive'
    scheme: '$(scheme)'
    sdk: '$(sdk)'
    configuration: '$(configuration)'
    xcWorkspacePath: '**/*.xcworkspace'
    xcodeVersion: 'default'
    packageApp: true
    exportPath: '$(Build.ArtifactStagingDirectory)'
    exportOptions: 'plist'
    exportOptionsPlist: 'ExportOptions.plist'
    signingOption: 'manual'
    signingIdentity: '$(APPLE_CERTIFICATE_SIGNING_IDENTITY)'
    provisioningProfileUuid: '$(APPLE_PROV_PROFILE_UUID)'

- task: CopyFiles@2
  displayName: 'Copy IPA to Artifacts'
  inputs:
    contents: '**/*.ipa'
    targetFolder: '$(Build.ArtifactStagingDirectory)'

- task: PublishBuildArtifacts@1
  displayName: 'Publish Artifacts'
  inputs:
    pathToPublish: '$(Build.ArtifactStagingDirectory)'
    artifactName: 'drop'

- task: AppStoreRelease@1
  displayName: 'Deploy to TestFlight'
  inputs:
    serviceEndpoint: 'AppStoreConnection'
    appIdentifier: 'com.yourcompany.yourapp'
    appType: 'iOS'
    ipaPath: '$(Build.ArtifactStagingDirectory)/**/*.ipa'
    releaseTrack: 'TestFlight'
    shouldSkipWaitingForProcessing: true
    shouldSkipSubmission: true</code></pre>
            
            <h2>Setting Up Secure Files</h2>
            <p>Store your certificates and provisioning profiles securely in Azure DevOps:</p>
            <ol>
                <li>Go to Pipelines → Library → Secure files</li>
                <li>Upload your .p12 certificate file</li>
                <li>Upload your .mobileprovision file</li>
                <li>Create a variable group for sensitive data like P12Password</li>
            </ol>
            
            <h2>Creating ExportOptions.plist</h2>
            <p>Create an ExportOptions.plist file in your repository root:</p>
            <pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd"&gt;
&lt;plist version="1.0"&gt;
&lt;dict&gt;
    &lt;key&gt;method&lt;/key&gt;
    &lt;string&gt;app-store&lt;/string&gt;
    &lt;key&gt;teamID&lt;/key&gt;
    &lt;string&gt;YOUR_TEAM_ID&lt;/string&gt;
    &lt;key&gt;uploadBitcode&lt;/key&gt;
    &lt;false/&gt;
    &lt;key&gt;uploadSymbols&lt;/key&gt;
    &lt;true/&gt;
    &lt;key&gt;compileBitcode&lt;/key&gt;
    &lt;false/&gt;
&lt;/dict&gt;
&lt;/plist&gt;</code></pre>
            
            <h2>Troubleshooting Common Issues</h2>
            <h3>Code Signing Errors</h3>
            <ul>
                <li>Verify certificate and provisioning profile match</li>
                <li>Check that the bundle identifier matches</li>
                <li>Ensure the certificate hasn't expired</li>
                <li>Verify the provisioning profile includes all required devices</li>
            </ul>
            
            <h3>Build Failures</h3>
            <ul>
                <li>Check Xcode version compatibility</li>
                <li>Verify all dependencies are installed (CocoaPods, Carthage)</li>
                <li>Ensure scheme is shared in Xcode</li>
                <li>Check for missing frameworks or resources</li>
            </ul>
            
            <h2>Best Practices</h2>
            <ul>
                <li>Use separate pipelines for development, staging, and production</li>
                <li>Implement automated testing before deployment</li>
                <li>Version your builds using semantic versioning</li>
                <li>Store sensitive data in Azure Key Vault</li>
                <li>Enable notifications for build failures</li>
                <li>Archive build artifacts for rollback capability</li>
                <li>Use TestFlight for beta testing before App Store release</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>Automating iOS builds with Azure Pipelines streamlines your development workflow, reduces manual errors, and enables continuous delivery. By following this guide, you can set up a robust CI/CD pipeline that builds, tests, and deploys your iOS applications automatically.</p>
            
            <p>Remember to keep your certificates and provisioning profiles up to date, and regularly review your pipeline configuration to ensure it meets your team's evolving needs.</p>
        `,
        date: "2026-02-16",
        readTime: "12 min read",
        tags: ["Azure DevOps", "iOS", "Xcode", "CI/CD", "App Store"],
        icon: "📱",
        author: "Saransh Jain"
    },
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

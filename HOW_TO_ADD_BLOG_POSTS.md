# How to Add Blog Posts

## Quick Guide

Your blog posts are stored in `blog.js`. Here's how to add new articles:

## Step 1: Edit blog.js

Open `portfolio/blog.js` and add your new post at the beginning of the `allBlogPosts` array:

```javascript
const allBlogPosts = [
    {
        id: 8,  // Increment the ID
        title: "Your Article Title",
        excerpt: "A short summary of your article (1-2 sentences)",
        content: `
            <p>Your article content goes here in HTML format.</p>
            
            <h2>Section Heading</h2>
            <p>More content...</p>
            
            <h3>Subsection</h3>
            <ul>
                <li>Bullet point 1</li>
                <li>Bullet point 2</li>
            </ul>
            
            <pre><code>// Code examples
kubectl get pods
docker ps</code></pre>
        `,
        date: "2026-02-16",  // Today's date
        readTime: "5 min read",  // Estimated reading time
        tags: ["Tag1", "Tag2", "Tag3"],  // Relevant tags
        icon: "🚀",  // Emoji icon
        author: "Saransh Jain"
    },
    // ... existing posts below
];
```

## Step 2: HTML Formatting Guide

### Paragraphs
```html
<p>Your paragraph text here.</p>
```

### Headings
```html
<h2>Main Section</h2>
<h3>Subsection</h3>
```

### Lists
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

<ol>
    <li>Step 1</li>
    <li>Step 2</li>
</ol>
```

### Code Blocks
```html
<pre><code>your code here
can be multiple lines
kubectl apply -f deployment.yaml</code></pre>
```

### Links
```html
<a href="https://example.com" target="_blank">Link Text</a>
```

### Images
```html
<img src="path/to/image.jpg" alt="Description">
```

## Step 3: Push to GitHub

After editing `blog.js`:

```bash
cd portfolio
git add blog.js
git commit -m "Add new blog post: Your Title"
git push origin main
```

Wait 2-3 minutes for GitHub Pages to rebuild, then your new post will be live!

## Step 4: View Your Blog

Visit: https://devsecopssolution.in/blog.html

Your new post will appear at the top of the list.

---

## Example: Complete Blog Post

```javascript
{
    id: 9,
    title: "Deploying Microservices with Docker Compose",
    excerpt: "Learn how to orchestrate multiple microservices using Docker Compose for local development and testing.",
    content: `
        <p>Docker Compose simplifies the process of running multi-container applications. This guide shows you how to set up a microservices architecture locally.</p>
        
        <h2>Prerequisites</h2>
        <ul>
            <li>Docker installed on your machine</li>
            <li>Basic understanding of Docker</li>
            <li>Microservices application code</li>
        </ul>
        
        <h2>Creating docker-compose.yml</h2>
        <p>Start by creating a docker-compose.yml file:</p>
        <pre><code>version: '3.8'
services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend
  
  backend:
    build: ./backend
    ports:
      - "8080:8080"
    environment:
      - DATABASE_URL=postgresql://db:5432/myapp
    depends_on:
      - db
  
  db:
    image: postgres:15
    environment:
      - POSTGRES_PASSWORD=secret
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:</code></pre>
        
        <h2>Running Your Services</h2>
        <p>Start all services with a single command:</p>
        <pre><code>docker-compose up -d</code></pre>
        
        <h2>Useful Commands</h2>
        <ul>
            <li><code>docker-compose ps</code> - View running services</li>
            <li><code>docker-compose logs -f</code> - View logs</li>
            <li><code>docker-compose down</code> - Stop all services</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Docker Compose makes it easy to manage complex multi-container applications during development. It's an essential tool for modern microservices development.</p>
    `,
    date: "2026-02-16",
    readTime: "6 min read",
    tags: ["Docker", "Microservices", "DevOps", "Containers"],
    icon: "🐳",
    author: "Saransh Jain"
}
```

---

## Tips

1. **ID Numbers**: Always increment the ID for new posts (current highest is 7)
2. **Date Format**: Use YYYY-MM-DD format
3. **Read Time**: Estimate ~200 words per minute
4. **Tags**: Use 3-5 relevant tags
5. **Emoji Icons**: Choose relevant emojis (🚀 📱 🐳 ⚙️ 🔧 📊 🛠️)
6. **Code Formatting**: Always wrap code in `<pre><code>` tags
7. **Testing**: Test locally first with `python3 -m http.server 8000`

---

## Current Blog Posts

You now have 7 blog posts:
1. Kubernetes Best Practices for Production
2. Implementing GitOps with ArgoCD
3. Docker Security Best Practices
4. Monitoring Kubernetes with Prometheus
5. CI/CD Pipeline with Jenkins
6. Infrastructure as Code with Terraform
7. **Building iOS Apps with Azure Pipelines** (NEW!)

---

## Need Help?

If you want to:
- Add images to your posts
- Create a new blog category
- Change the blog layout
- Add comments functionality

Just ask and I'll help you implement it!

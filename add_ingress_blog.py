#!/usr/bin/env python3
"""
Script to add Kubernetes Ingress vs API Gateway blog post
"""

# Read the current blog.js file
with open('blog.js', 'r') as f:
    content = f.read()

# Find where to insert (after the opening of allBlogPosts array)
insert_marker = 'const allBlogPosts = [\n    {'

# Check if post already exists
if '"id": 11' in content or 'id: 11' in content:
    print("Post ID 11 already exists! Skipping...")
    exit(0)

# The new blog post (part 1 - will be continued in next file)
new_post_part1 = '''    {
        id: 11,
        title: "Kubernetes Ingress vs API Gateway: Complete Comparison Guide",
        excerpt: "Deep dive into Kubernetes Ingress and API Gateway patterns.",
        content: `
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; color: white; margin-bottom: 30px;">
                <h1 style="color: white; margin: 0 0 10px 0;">🌐 Kubernetes Ingress vs API Gateway</h1>
                <p style="margin: 0; font-size: 18px;">Complete comparison guide for cloud-native architectures</p>
            </div>

            <p>Understanding the difference between Kubernetes Ingress and API Gateways is crucial for designing scalable cloud-native applications.</p>

            <h2 style="color: #667eea;">📋 Table of Contents</h2>
            <ol style="background: #2d3748; padding: 20px 20px 20px 40px; border-radius: 8px; color: #e2e8f0; line-height: 2;">
                <li><a href="#what-is-ingress" style="color: #90cdf4; text-decoration: none;">What is Kubernetes Ingress?</a></li>
                <li><a href="#what-is-api-gateway" style="color: #90cdf4; text-decoration: none;">What is an API Gateway?</a></li>
                <li><a href="#key-differences" style="color: #90cdf4; text-decoration: none;">Key Differences</a></li>
                <li><a href="#when-to-use" style="color: #90cdf4; text-decoration: none;">When to Use Each</a></li>
                <li><a href="#implementation" style="color: #90cdf4; text-decoration: none;">Implementation Examples</a></li>
            </ol>

            <p>See NEW_BLOG_INGRESS_CONTENT.md for full content...</p>
        `,
        date: "2026-02-17",
        readTime: "15 min read",
        tags: ["Kubernetes", "Ingress", "API Gateway", "Networking"],
        icon: "🌐",
        author: "Saransh Jain"
    },
'''

print("Run this manually - file too complex for automated insertion")
print("Add the post manually to blog.js after id: 10")

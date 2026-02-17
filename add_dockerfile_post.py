#!/usr/bin/env python3
import json

# Read the current blog.js
with open('blog.js', 'r') as f:
    content = f.read()

# Find where to insert (after "const allBlogPosts = [")
insert_point = content.find('const allBlogPosts = [') + len('const allBlogPosts = [')

# The new blog post
new_post = '''
    {
        id: 9,
        title: "Dockerfile Mastery: Every Instruction Explained",
        excerpt: "Complete reference guide to all Dockerfile instructions with real-world examples, parameters, and best practices.",
        content: \`DOCKERFILE_CONTENT_PLACEHOLDER\`,
        date: "2026-02-17",
        readTime: "18 min read",
        tags: ["Docker", "Dockerfile", "DevOps", "Containers"],
        icon: "📝",
        author: "Saransh Jain"
    },
'''

# Insert the new post
new_content = content[:insert_point] + new_post + content[insert_point:]

# Write back
with open('blog.js', 'w') as f:
    f.write(new_content)

print("Blog post structure added! Now need to add full content.")

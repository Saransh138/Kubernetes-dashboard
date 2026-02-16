#!/bin/bash

# GitHub Pages Deployment Script
# Usage: ./deploy-github.sh

echo "🚀 Deploying to GitHub Pages..."

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing git repository..."
    git init
fi

# Add all files
echo "📝 Adding files..."
git add .

# Commit
echo "💾 Committing changes..."
read -p "Enter commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Update portfolio website"
fi
git commit -m "$commit_msg"

# Check if remote exists
if ! git remote | grep -q origin; then
    echo "🔗 Adding remote repository..."
    echo "Please enter your GitHub repository URL:"
    echo "Example: https://github.com/Saransh138/devsecopssolution.git"
    read -p "Repository URL: " repo_url
    git remote add origin "$repo_url"
fi

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📍 Next steps:"
echo "1. Go to: https://github.com/Saransh138/devsecopssolution/settings/pages"
echo "2. Enable GitHub Pages (Source: main branch)"
echo "3. Your site will be live at: https://saransh138.github.io/devsecopssolution/"
echo ""
echo "🌐 To add custom domain (devsecopssolution.in):"
echo "1. Add domain in GitHub Pages settings"
echo "2. Update DNS records at your domain registrar"
echo ""

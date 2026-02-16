// Load blog post from URL parameter
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    
    if (!postId || !allBlogPosts) {
        window.location.href = 'blog.html';
        return;
    }
    
    const post = allBlogPosts.find(p => p.id === postId);
    
    if (!post) {
        window.location.href = 'blog.html';
        return;
    }
    
    // Load post content
    loadPost(post);
    
    // Load related posts
    loadRelatedPosts(post);
    
    // Setup navigation
    setupPostNavigation(postId);
    
    // Highlight code blocks
    setTimeout(() => {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });
    }, 100);
});

function loadPost(post) {
    // Update page title
    document.title = `${post.title} - DevSecOps Solutions`;
    document.getElementById('postTitle').textContent = post.title;
    
    // Update header
    document.getElementById('postIcon').textContent = post.icon;
    document.getElementById('postTitleMain').textContent = post.title;
    document.getElementById('postDate').textContent = formatDate(post.date);
    document.getElementById('postReadTime').textContent = post.readTime;
    document.getElementById('postAuthor').textContent = post.author;
    
    // Update tags
    const tagsContainer = document.getElementById('postTags');
    tagsContainer.innerHTML = post.tags.map(tag => 
        `<span class="post-tag">${tag}</span>`
    ).join('');
    
    // Update content
    document.getElementById('postContent').innerHTML = post.content;
}

function loadRelatedPosts(currentPost) {
    const relatedContainer = document.getElementById('relatedPosts');
    
    // Find posts with similar tags
    const related = allBlogPosts
        .filter(p => p.id !== currentPost.id)
        .filter(p => p.tags.some(tag => currentPost.tags.includes(tag)))
        .slice(0, 3);
    
    if (related.length === 0) {
        relatedContainer.innerHTML = '<p>No related posts found.</p>';
        return;
    }
    
    relatedContainer.innerHTML = related.map(post => `
        <div class="blog-article" onclick="window.location.href='blog-post.html?id=${post.id}'">
            <div class="blog-article-image">${post.icon}</div>
            <div class="blog-article-content">
                <div class="blog-article-meta">
                    <span><i class="far fa-calendar"></i> ${formatDate(post.date)}</span>
                    <span><i class="far fa-clock"></i> ${post.readTime}</span>
                </div>
                <h3>${post.title}</h3>
                <p class="blog-article-excerpt">${post.excerpt}</p>
                <div class="blog-article-tags">
                    ${post.tags.map(tag => `<span class="blog-article-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function setupPostNavigation(currentId) {
    const currentIndex = allBlogPosts.findIndex(p => p.id === currentId);
    
    // Previous post
    if (currentIndex > 0) {
        const prevPost = allBlogPosts[currentIndex - 1];
        const prevLink = document.getElementById('prevPost');
        prevLink.style.display = 'flex';
        prevLink.href = `blog-post.html?id=${prevPost.id}`;
        document.getElementById('prevTitle').textContent = prevPost.title;
    }
    
    // Next post
    if (currentIndex < allBlogPosts.length - 1) {
        const nextPost = allBlogPosts[currentIndex + 1];
        const nextLink = document.getElementById('nextPost');
        nextLink.style.display = 'flex';
        nextLink.href = `blog-post.html?id=${nextPost.id}`;
        document.getElementById('nextTitle').textContent = nextPost.title;
    }
}

// Share functions
function shareOnTwitter() {
    const url = window.location.href;
    const text = document.getElementById('postTitleMain').textContent;
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
}

function shareOnLinkedIn() {
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
}

function shareOnFacebook() {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
}

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

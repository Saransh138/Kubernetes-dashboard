# Quick Deploy - Easiest Method

## 🚀 Deploy to Netlify (2 Minutes)

### Method 1: Drag & Drop (Easiest!)

1. **Go to Netlify Drop:**
   - Visit: https://app.netlify.com/drop
   
2. **Drag your portfolio folder:**
   - Open your file manager
   - Drag the entire `portfolio` folder to the Netlify page
   
3. **Done!** Your site is live instantly at:
   - `https://random-name-12345.netlify.app`

4. **Change site name (optional):**
   - Click "Site settings"
   - Change site name to: `devsecopssolution`
   - Your URL becomes: `https://devsecopssolution.netlify.app`

5. **Add custom domain (optional):**
   - Go to: Domain settings → Add custom domain
   - Enter: `devsecopssolution.in`
   - Follow DNS instructions

---

## Alternative: Create New GitHub Repository

If you prefer GitHub Pages:

### Step 1: Create New Repository
1. Go to: https://github.com/new
2. Repository name: `portfolio` or `devsecopssolution`
3. Make it **Public**
4. **Don't** check "Initialize with README"
5. Click "Create repository"

### Step 2: Push Your Code
```bash
cd portfolio

# Remove old remote
git remote remove origin

# Add new remote (replace with YOUR new repo URL)
git remote add origin https://github.com/Saransh138/portfolio.git

# Push
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to: Repository Settings → Pages
2. Source: Deploy from `main` branch
3. Save
4. Site will be live at: `https://saransh138.github.io/portfolio/`

---

## 🎯 My Recommendation

**Use Netlify Drag & Drop** - It's the fastest and easiest!

1. No Git needed
2. No command line
3. Instant deployment
4. Free SSL certificate
5. Custom domain support

Just drag your `portfolio` folder to https://app.netlify.com/drop and you're done! 🚀

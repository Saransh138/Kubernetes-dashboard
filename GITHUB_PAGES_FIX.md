# GitHub Pages Configuration Issue - Tutorial 5 (404 Error)

## Problem
Tutorial 5 (Deployments) is giving a 404 error while all other tutorials work fine.

## Root Cause Analysis

The file `05-deployments.html` exists in Git but GitHub Pages is not serving it. This could be due to:

1. **GitHub Pages hasn't rebuilt yet** (most likely)
2. **Path configuration issue** in GitHub Pages settings
3. **File not properly committed** to the branch GitHub Pages is serving from

## Verification Steps

### Step 1: Check if file exists on GitHub
Visit: https://github.com/Saransh138/Kubernetes-dashboard/blob/main/portfolio/tutorials/05-deployments.html

If you see the file, it's in Git. If you get 404, the file wasn't pushed correctly.

### Step 2: Check GitHub Pages Settings
1. Go to: https://github.com/Saransh138/Kubernetes-dashboard/settings/pages
2. Verify:
   - Source: "Deploy from a branch"
   - Branch: `main`
   - Folder: Check if it's `/` (root) or `/portfolio`

### Step 3: Check GitHub Actions/Deployment
1. Go to: https://github.com/Saransh138/Kubernetes-dashboard/actions
2. Look for the latest workflow run
3. Check if it completed successfully
4. If there's an error, click on it to see details

## Solutions

### Solution 1: Wait for GitHub Pages to Rebuild (2-5 minutes)
GitHub Pages typically rebuilds within 2-5 minutes after a push. Just pushed an empty commit to trigger rebuild.

**Wait 5 minutes, then try again.**

### Solution 2: Check GitHub Pages Path Configuration

If GitHub Pages is configured to serve from `/portfolio`:
- URL should be: `https://devsecopssolution.in/tutorials/05-deployments.html`

If GitHub Pages is configured to serve from `/` (root):
- URL should be: `https://devsecopssolution.in/portfolio/tutorials/05-deployments.html`

**To fix:**
1. Go to GitHub Pages settings
2. If "Folder" is set to `/` (root), change URLs in `k8s-tutorials.js` to:
   ```javascript
   url: 'portfolio/tutorials/05-deployments.html'
   ```

### Solution 3: Verify File is in Correct Branch

```bash
# Check which branch GitHub Pages is using
# Then verify file exists in that branch
git ls-tree -r main --name-only | grep "05-deployments"
```

Should output: `portfolio/tutorials/05-deployments.html`

### Solution 4: Manual Rebuild Trigger

If automatic rebuild doesn't work:

```bash
cd ~/Downloads/kubernetesdashboard/k8h/portfolio

# Make a trivial change to force rebuild
echo "<!-- Rebuild trigger -->" >> tutorials/05-deployments.html
git add tutorials/05-deployments.html
git commit -m "Trigger rebuild for tutorial 5"
git push origin main
```

## Quick Diagnostic Commands

Run these to diagnose:

```bash
cd ~/Downloads/kubernetesdashboard/k8h/portfolio

# 1. Verify file exists locally
ls -la tutorials/05-deployments.html

# 2. Verify file is tracked in Git
git ls-files tutorials/05-deployments.html

# 3. Verify file is in remote repository
git ls-tree origin/main:portfolio/tutorials/05-deployments.html

# 4. Check recent commits
git log --oneline -5 -- tutorials/05-deployments.html

# 5. Verify file content
head -10 tutorials/05-deployments.html
```

## Expected Results

After GitHub Pages rebuilds (5 minutes):
- ✅ Tutorial 5 should open: `https://devsecopssolution.in/tutorials/05-deployments.html`
- ✅ No 404 error
- ✅ Page shows "Deployments — Managing Application Rollouts"

## If Still Not Working

1. **Check browser console** (F12 → Console) for JavaScript errors
2. **Try direct URL**: `https://devsecopssolution.in/tutorials/05-deployments.html`
3. **Compare with working tutorial**: Try Tutorial 4 URL and see the pattern
4. **Check GitHub Pages deployment logs** in Actions tab

## Contact Points

If issue persists after 10 minutes:
1. Check GitHub Actions for deployment errors
2. Verify custom domain DNS settings
3. Check if other new files are also 404ing (indicates broader issue)

---

**Status:** Triggered rebuild at $(date). Wait 5 minutes and test again.

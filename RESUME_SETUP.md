# Resume Setup

The "Download Resume" button on your portfolio links to `resume.pdf`.

## To Add Your Resume:

1. **Create/Export your resume as PDF**
   - Name it exactly: `resume.pdf`
   - Keep file size under 2MB for fast downloads

2. **Add to portfolio folder**
   ```bash
   # Copy your resume to the portfolio folder
   cp /path/to/your/resume.pdf portfolio/resume.pdf
   ```

3. **Commit and push**
   ```bash
   cd portfolio
   git add resume.pdf
   git commit -m "Add resume PDF"
   git push origin main
   ```

4. **Test it**
   - Go to https://devsecopssolution.in
   - Click "Download Resume" button
   - Your resume should download

## Alternative: Link to Google Drive/Dropbox

If you prefer to host your resume elsewhere:

1. Upload resume to Google Drive/Dropbox
2. Get shareable link
3. Update the button in `index.html`:
   ```html
   <!-- Change this line -->
   <a href="resume.pdf" download class="btn btn-outline">
   
   <!-- To this -->
   <a href="YOUR_GOOGLE_DRIVE_LINK" target="_blank" class="btn btn-outline">
   ```

## Resume Tips:

- Keep it 1-2 pages
- Include: Contact info, Summary, Experience, Skills, Education, Certifications
- Highlight DevOps achievements with metrics
- List technologies you've used
- Include links to GitHub, LinkedIn
- Export as PDF (not Word doc)

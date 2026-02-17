# Contact Form Setup Guide

Your contact form is currently configured but needs a backend service to actually send emails to you. Here are your options:

## 🚀 Quick Setup (Recommended): FormSpree

FormSpree is the easiest option - it's free and takes 2 minutes to set up.

### Steps:

1. **Go to FormSpree**: https://formspree.io/

2. **Sign up for free** (using your email: sj138310@gmail.com)

3. **Create a new form**:
   - Click "New Form"
   - Enter your email: sj138310@gmail.com
   - Give it a name: "Portfolio Contact Form"
   - Click "Create Form"

4. **Get your Form ID**:
   - After creating, you'll see an endpoint like: `https://formspree.io/f/xyzabc123`
   - Copy the part after `/f/` (e.g., `xyzabc123`)

5. **Update your config**:
   - Open `portfolio/contact-config.js`
   - Replace `YOUR_FORM_ID` with your actual form ID
   - Example: `endpoint: 'https://formspree.io/f/xyzabc123'`

6. **Commit and push**:
   ```bash
   cd portfolio
   git add contact-config.js index.html
   git commit -m "Configure contact form with FormSpree"
   git push origin main
   ```

7. **Test it**: 
   - Go to https://devsecopssolution.in
   - Fill out the contact form
   - Submit
   - Check your email (sj138310@gmail.com)

### FormSpree Features (Free Plan):
- ✅ 50 submissions per month
- ✅ Email notifications
- ✅ Spam filtering
- ✅ File uploads
- ✅ Auto-responder

---

## 🔧 Alternative Option 1: EmailJS

If you prefer EmailJS (also free):

1. **Sign up**: https://www.emailjs.com/
2. **Create email service** (Gmail, Outlook, etc.)
3. **Create email template**
4. **Get your credentials**:
   - Service ID
   - Template ID
   - Public Key
5. **Update `contact-config.js`**:
   ```javascript
   formspree: {
       enabled: false  // Disable FormSpree
   },
   emailjs: {
       enabled: true,
       serviceId: 'YOUR_SERVICE_ID',
       templateId: 'YOUR_TEMPLATE_ID',
       publicKey: 'YOUR_PUBLIC_KEY'
   }
   ```
6. **Add EmailJS SDK** to `index.html` (before closing `</body>`):
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```

---

## 🔧 Alternative Option 2: Custom Backend

If you want to build your own backend:

1. Create an API endpoint (Node.js, Python, etc.)
2. Deploy it (Vercel, Netlify Functions, AWS Lambda, etc.)
3. Update `contact-config.js`:
   ```javascript
   formspree: {
       enabled: false
   },
   customApi: {
       enabled: true,
       endpoint: 'https://your-api.com/contact',
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       }
   }
   ```

---

## 📧 Current Behavior

Right now, when someone submits the form:
- ❌ The email is NOT sent to you
- ✅ The form shows a success message
- ✅ The form data is logged to browser console
- ℹ️ This is just a demo mode until you configure a backend

---

## 🎯 Recommended: Use FormSpree

**Why FormSpree?**
- ✅ Easiest to set up (2 minutes)
- ✅ No coding required
- ✅ Free for 50 submissions/month
- ✅ Reliable and secure
- ✅ Spam protection included
- ✅ Works immediately

---

## 🆘 Need Help?

If you have any issues:
1. Check browser console for errors (F12)
2. Verify your FormSpree form ID is correct
3. Make sure you've pushed the changes to GitHub
4. Wait 2-3 minutes for GitHub Pages to update

---

## 📝 Files Modified

- ✅ `contact-config.js` - Created (needs YOUR_FORM_ID)
- ✅ `index.html` - Updated to load config
- ✅ `script.js` - Already configured to use the config

---

## 🔍 Testing

After setup, test by:
1. Going to https://devsecopssolution.in
2. Scrolling to "Get In Touch" section
3. Filling out the form
4. Clicking "Send Message"
5. Checking your email: sj138310@gmail.com

You should receive the form submission within seconds!

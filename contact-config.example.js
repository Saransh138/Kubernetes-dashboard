// Contact Form Configuration
// Rename this file to contact-config.js and update with your details

const contactConfig = {
    // Option 1: FormSpree (Easiest - No backend needed)
    // Sign up at https://formspree.io/
    formspree: {
        enabled: true,
        endpoint: 'https://formspree.io/f/YOUR_FORM_ID'
    },
    
    // Option 2: EmailJS (Free email service)
    // Sign up at https://www.emailjs.com/
    emailjs: {
        enabled: false,
        serviceId: 'YOUR_SERVICE_ID',
        templateId: 'YOUR_TEMPLATE_ID',
        publicKey: 'YOUR_PUBLIC_KEY'
    },
    
    // Option 3: Custom API endpoint
    customApi: {
        enabled: false,
        endpoint: 'https://your-api.com/contact',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    },
    
    // Option 4: Netlify Forms (If deployed on Netlify)
    netlify: {
        enabled: false,
        // Just add data-netlify="true" to your form in HTML
        // No additional configuration needed
    },
    
    // Success/Error messages
    messages: {
        success: 'Thank you for your message! I will get back to you soon.',
        error: 'Oops! Something went wrong. Please try again or email me directly.',
        validation: 'Please fill in all required fields.'
    },
    
    // Email for direct contact (shown on error)
    fallbackEmail: 'contact@devsecopssolution.in'
};

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = contactConfig;
}

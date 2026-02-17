// Contact Form Configuration
const contactConfig = {
    // FormSpree - Free email forwarding service
    // This will forward form submissions to your email: sj138310@gmail.com
    formspree: {
        enabled: true,
        // You need to create a free account at https://formspree.io/
        // Then create a form and replace YOUR_FORM_ID with the actual ID
        endpoint: 'https://formspree.io/f/YOUR_FORM_ID'
    },
    
    // EmailJS (Alternative option)
    emailjs: {
        enabled: false,
        serviceId: 'YOUR_SERVICE_ID',
        templateId: 'YOUR_TEMPLATE_ID',
        publicKey: 'YOUR_PUBLIC_KEY'
    },
    
    // Custom API endpoint
    customApi: {
        enabled: false,
        endpoint: 'https://your-api.com/contact',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    },
    
    // Success/Error messages
    messages: {
        success: 'Thank you for your message! I will get back to you soon.',
        error: 'Oops! Something went wrong. Please try again or email me directly at sj138310@gmail.com',
        validation: 'Please fill in all required fields.'
    },
    
    // Email for direct contact (shown on error)
    fallbackEmail: 'sj138310@gmail.com'
};

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = contactConfig;
}

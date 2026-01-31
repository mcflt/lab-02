// ===================================
// Mobile Menu Toggle
// ===================================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links a');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close menu when clicking on a link
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

// ===================================
// Smooth Scroll for Navigation
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Scroll Animations
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Reveal Observer for scrolling animations
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };

    const observer = new IntersectionObserver(revealCallback, { threshold: 0.1 });

    // Target elements to animate
    const animElements = document.querySelectorAll('.project-card, .skill-tag, .contact-card');
    
    animElements.forEach((el, i) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = `all 0.6s ease-out ${i * 0.05}s`;
        observer.observe(el);
    });
});

// Helper for observer to trigger the CSS
document.addEventListener('scroll', () => {
    document.querySelectorAll('.project-card, .skill-tag, .contact-card').forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

// ===================================
// Image Loading Animation
// ===================================
document.querySelectorAll('.card-image-container img').forEach(img => {
    img.style.opacity = "0";
    img.style.transition = "opacity 0.5s ease-in";
    
    img.addEventListener('load', () => {
        img.style.opacity = "1";
    });
});

// To handle cached images that might load before the script runs
window.addEventListener('load', () => {
    document.querySelectorAll('.card-image-container img').forEach(img => {
        if (img.complete) img.style.opacity = "1";
    });
});

// ===================================
// Hero Section Animation on Load
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const heroElements = [
        '.status-indicator',
        '.hero-title',
        '.hero-description',
        '.hero-actions',
        '.hero-visual'
    ];

    heroElements.forEach((selector, index) => {
        const el = document.querySelector(selector);
        if (el) {
            el.style.opacity = "0";
            el.style.transform = "translateY(30px)";
            el.style.transition = `all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.15}s`;
            
            setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }, 100);
        }
    });
});

// ===================================
// Form Submission Handler
// ===================================
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const feedback = document.getElementById('feedback');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        feedback.textContent = '';
        
        // Get form data
        const formData = new FormData(contactForm);
        
        try {
            // Submit to Formspree
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                feedback.textContent = '✓ Message sent successfully!';
                feedback.style.color = 'var(--accent)';
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            feedback.textContent = '✗ Something went wrong. Please try again.';
            feedback.style.color = '#ff4444';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });
}

// ===================================
// Navbar Scroll Effect
// ===================================
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.padding = '15px 8%';
        nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    } else {
        nav.style.padding = '20px 8%';
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Console Message
// ===================================
console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; font-weight: bold; color: #00d4ff;');
console.log('%cInterested in working together? Let\'s connect!', 'font-size: 14px; color: #a3a3a3;');
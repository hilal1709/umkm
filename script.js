// Enhanced JavaScript for Omah Lumpia Website - Full Anime.js Implementation

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animations
    initPageLoadAnimations();
    initNavigationAnimations();
    initScrollAnimations();
    initInteractiveAnimations();
    initMobileMenu();
    initScrollEffects();
    initVideoHandlers();
    initOtherFeatures();
});

// Page Load Animations
function initPageLoadAnimations() {
    // Hero section animations
    const heroContent = document.querySelector('.hero-content');
    const heroTitle = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero p');
    const ctaButton = document.querySelector('.hero .cta-button');
    const heroFloatingElement = document.querySelector('.hero::after');

    // Hero content entrance
    anime({
        targets: heroContent,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        easing: 'easeOutCubic',
        delay: 500
    });

    // Hero title animation
    anime({
        targets: heroTitle,
        opacity: [0, 1],
        translateY: [30, 0],
        scale: [0.9, 1],
        duration: 800,
        easing: 'easeOutBack',
        delay: 700
    });

    // Hero text animation
    anime({
        targets: heroText,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 600,
        easing: 'easeOutQuad',
        delay: 900
    });

    // CTA button animation
    anime({
        targets: ctaButton,
        opacity: [0, 1],
        translateY: [30, 0],
        scale: [0.8, 1],
        duration: 600,
        easing: 'easeOutBack',
        delay: 1100
    });

    // Floating emoji animation
    anime({
        targets: '.hero::after',
        opacity: [0, 0.7],
        duration: 1000,
        delay: 1500,
        complete: function() {
            // Start continuous floating animation
            anime({
                targets: '.hero::after',
                translateY: [0, -10, 0],
                duration: 3000,
                easing: 'easeInOutSine',
                loop: true
            });
        }
    });

    // Menu icons floating animation
    anime({
        targets: '.menu-icon',
        translateY: [0, -10, 0],
        duration: 3000,
        easing: 'easeInOutSine',
        loop: true,
        delay: anime.stagger(500)
    });
}

// Navigation Animations
function initNavigationAnimations() {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelectorAll('.nav-links li');
    const hamburger = document.querySelector('.hamburger');
    
    // Header slide down animation
    anime({
        targets: header,
        translateY: ['-100%', '0%'],
        duration: 800,
        easing: 'easeOutCubic',
        delay: 300,
        complete: function() {
            header.classList.add('loaded');
        }
    });
    
    // Logo animation
    anime({
        targets: logo,
        opacity: [0, 1],
        translateX: [-30, 0],
        scale: [0.8, 1],
        duration: 600,
        easing: 'easeOutBack',
        delay: 800
    });
    
    // Navigation links staggered animation
    anime({
        targets: navLinks,
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 500,
        easing: 'easeOutBack',
        delay: anime.stagger(100, {start: 1000})
    });
    
    // Hamburger menu animation (mobile)
    if (window.innerWidth <= 768) {
        anime({
            targets: hamburger,
            opacity: [0, 1],
            translateX: [30, 0],
            duration: 500,
            easing: 'easeOutBack',
            delay: 1200
        });
    }
    
    // Navigation link hover animations
    navLinks.forEach(link => {
        const anchor = link.querySelector('a');
        
        link.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: [1, 1.05],
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        link.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: [1.05, 1],
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
    
    // Update active navigation
    updateActiveNavigation();
}

// Scroll-based Animations
function initScrollAnimations() {
    // Create intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElement(entry.target);
            }
        });
    }, observerOptions);

    // About section animations
    const aboutTitle = document.querySelector('.about-text h2');
    const aboutText = document.querySelector('.about-text p');
    const aboutImage = document.querySelector('.about-image');
    const featureItems = document.querySelectorAll('.feature-item');

    if (aboutTitle) observer.observe(aboutTitle);
    if (aboutText) observer.observe(aboutText);
    if (aboutImage) observer.observe(aboutImage);
    featureItems.forEach(item => observer.observe(item));

    // Menu section animations
    const menuSection = document.querySelector('.menu-section');
    const menuTitle = document.querySelector('.menu-section h2');
    const menuSubtitle = document.querySelector('.menu-subtitle');
    const menuItems = document.querySelectorAll('.menu-item');
    const menuInfo = document.querySelector('.menu-info');

    if (menuSection) observer.observe(menuSection);
    if (menuTitle) observer.observe(menuTitle);
    if (menuSubtitle) observer.observe(menuSubtitle);
    menuItems.forEach(item => observer.observe(item));
    if (menuInfo) observer.observe(menuInfo);

    // Gallery section animations
    const galleryTitle = document.querySelector('.gallery-section h2');
    const gallerySubtitle = document.querySelector('.gallery-subtitle');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (galleryTitle) observer.observe(galleryTitle);
    if (gallerySubtitle) observer.observe(gallerySubtitle);
    galleryItems.forEach(item => observer.observe(item));

    // Contact section animations
    const contactTitle = document.querySelector('.contact-section h2');
    const contactItems = document.querySelectorAll('.contact-item');
    const orderMethodsTitle = document.querySelector('.order-methods h3');
    const orderOptions = document.querySelectorAll('.order-option');

    if (contactTitle) observer.observe(contactTitle);
    contactItems.forEach(item => observer.observe(item));
    if (orderMethodsTitle) observer.observe(orderMethodsTitle);
    orderOptions.forEach(option => observer.observe(option));

    // Footer animation
    const footer = document.querySelector('footer');
    if (footer) observer.observe(footer);
}

// Animate elements based on their type
function animateElement(element) {
    const className = element.className;
    
    if (element.classList.contains('about-text') && element.tagName === 'H2') {
        anime({
            targets: element,
            opacity: [0, 1],
            translateX: [-50, 0],
            duration: 800,
            easing: 'easeOutBack'
        });
    } else if (element.classList.contains('about-text') && element.tagName === 'P') {
        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            easing: 'easeOutQuad',
            delay: 200
        });
    } else if (element.classList.contains('about-image')) {
        anime({
            targets: element,
            opacity: [0, 1],
            translateX: [50, 0],
            scale: [0.9, 1],
            duration: 800,
            easing: 'easeOutBack',
            delay: 300
        });
    } else if (element.classList.contains('feature-item')) {
        const index = Array.from(document.querySelectorAll('.feature-item')).indexOf(element);
        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [30, 0],
            scale: [0.9, 1],
            duration: 600,
            easing: 'easeOutBack',
            delay: index * 150
        });
    } else if (element.classList.contains('menu-section')) {
        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 800,
            easing: 'easeOutCubic'
        });
    } else if (element.classList.contains('menu-section') && element.tagName === 'H2') {
        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [-30, 0],
            scale: [0.9, 1],
            duration: 600,
            easing: 'easeOutBack'
        });
    } else if (element.classList.contains('menu-subtitle')) {
        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 500,
            easing: 'easeOutQuad',
            delay: 200
        });
    } else if (element.classList.contains('menu-item')) {
        const index = Array.from(document.querySelectorAll('.menu-item')).indexOf(element);
        
        // Main menu item animation
        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [50, 0],
            scale: [0.8, 1],
            duration: 600,
            easing: 'easeOutBack',
            delay: index * 200
        });

        // Animate bestseller badge if exists
        const badge = element.querySelector('.bestseller-badge');
        if (badge) {
            anime({
                targets: badge,
                opacity: [0, 1],
                scale: [0, 1],
                duration: 400,
                easing: 'easeOutBack',
                delay: (index * 200) + 300
            });
        }

        // Animate ingredients list
        const ingredients = element.querySelectorAll('.ingredients li');
        if (ingredients.length > 0) {
            anime({
                targets: ingredients,
                opacity: [0, 1],
                translateY: [10, 0],
                duration: 300,
                easing: 'easeOutQuad',
                delay: anime.stagger(50, {start: (index * 200) + 400})
            });
        }

        // Animate buttons
        const buttons = element.querySelectorAll('.btn-order, .btn-info');
        if (buttons.length > 0) {
            anime({
                targets: buttons,
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 400,
                easing: 'easeOutQuad',
                delay: anime.stagger(100, {start: (index * 200) + 500})
            });
        }
    } else if (element.classList.contains('menu-info')) {
        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            easing: 'easeOutQuad'
        });
    } else if (element.classList.contains('gallery-section') && element.tagName === 'H2') {
        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [-30, 0],
            scale: [0.9, 1],
            duration: 600,
            easing: 'easeOutBack'
        });
    } else if (element.classList.contains('gallery-subtitle')) {
        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 500,
            easing: 'easeOutQuad',
            delay: 200
        });
    } else if (element.classList.contains('gallery-item')) {
        const index = Array.from(document.querySelectorAll('.gallery-item')).indexOf(element);
        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [50, 0],
            scale: [0.8, 1],
            duration: 600,
            easing: 'easeOutBack',
            delay: index * 150
        });
    } else if (element.classList.contains('contact-section') && element.tagName === 'H2') {
        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [-30, 0],
            duration: 600,
            easing: 'easeOutBack'
        });
    } else if (element.classList.contains('contact-item')) {
        const index = Array.from(document.querySelectorAll('.contact-item')).indexOf(element);
        anime({
            targets: element,
            opacity: [0, 1],
            translateX: [-50, 0],
            duration: 600,
            easing: 'easeOutBack',
            delay: index * 150
        });
    } else if (element.classList.contains('order-methods') && element.tagName === 'H3') {
        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [-20, 0],
            duration: 500,
            easing: 'easeOutQuad'
        });
    } else if (element.classList.contains('order-option')) {
        const index = Array.from(document.querySelectorAll('.order-option')).indexOf(element);
        anime({
            targets: element,
            opacity: [0, 1],
            translateX: [50, 0],
            duration: 600,
            easing: 'easeOutBack',
            delay: index * 150
        });
    } else if (element.tagName === 'FOOTER') {
        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            easing: 'easeOutQuad'
        });
    }
}

// Interactive Animations
function initInteractiveAnimations() {
    // Enhanced button interactions
    const allButtons = document.querySelectorAll('.cta-button, .btn-contact, .btn-order, .btn-info');
    allButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
        
        button.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
        
        button.addEventListener('click', function(e) {
            // Button click animation
            anime({
                targets: this,
                scale: [1, 0.95, 1],
                duration: 200,
                easing: 'easeOutQuad'
            });

            // Ripple effect
            createRippleEffect(e, this);
        });
    });

    // Menu item hover animations
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.02,
                translateY: -5,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        item.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                translateY: 0,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });

    // Gallery item hover animations
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.02,
                translateY: -10,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        item.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                translateY: 0,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });

    // Feature item hover animations
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                translateY: -5,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        item.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                translateY: 0,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });

    // Logo click animation
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', function() {
        anime({
            targets: this,
            rotate: '360deg',
            scale: [1, 1.1, 1],
            duration: 800,
            easing: 'easeOutBack'
        });
        
        // Scroll to top
        anime({
            targets: document.documentElement,
            scrollTop: 0,
            duration: 1000,
            easing: 'easeOutCubic'
        });
    });
}

// Create ripple effect
function createRippleEffect(e, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    element.appendChild(ripple);
    
    anime({
        targets: ripple,
        scale: [0, 4],
        opacity: [0.3, 0],
        duration: 600,
        easing: 'easeOutQuad',
        complete: function() {
            ripple.remove();
        }
    });
}

// Mobile Menu with Enhanced Animations
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links li');
    
    hamburger.addEventListener('click', function() {
        const isActive = hamburger.classList.contains('active');
        
        if (!isActive) {
            // Open menu animation
            hamburger.classList.add('active');
            navLinks.classList.add('active');
            
            // Animate menu background
            anime({
                targets: navLinks,
                opacity: [0, 1],
                duration: 300,
                easing: 'easeOutQuad'
            });
            
            // Animate menu items with stagger
            anime({
                targets: navLinkItems,
                opacity: [0, 1],
                translateX: [-50, 0],
                duration: 400,
                easing: 'easeOutBack',
                delay: anime.stagger(80, {start: 200})
            });
            
        } else {
            // Close menu animation
            anime({
                targets: navLinkItems,
                opacity: [1, 0],
                translateX: [0, -50],
                duration: 300,
                easing: 'easeInBack',
                delay: anime.stagger(50, {direction: 'reverse'}),
                complete: function() {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });
        }
    });

    // Close mobile menu when clicking on a link
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                anime({
                    targets: navLinkItems,
                    opacity: [1, 0],
                    translateX: [0, -50],
                    duration: 300,
                    easing: 'easeInBack',
                    delay: anime.stagger(50, {direction: 'reverse'}),
                    complete: function() {
                        hamburger.classList.remove('active');
                        navLinks.classList.remove('active');
                    }
                });
            }
        });
    });
}

// Scroll Effects with Anime.js
function initScrollEffects() {
    const header = document.querySelector('header');
    const scrollTopBtn = document.getElementById('scrollTop');
    let lastScrollTop = 0;
    let ticking = false;
    
    function updateScrollEffects() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Header scroll effects
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide/show header on scroll with animation
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            anime({
                targets: header,
                translateY: '-100%',
                duration: 400,
                easing: 'easeInQuad'
            });
        } else {
            // Scrolling up
            anime({
                targets: header,
                translateY: '0%',
                duration: 400,
                easing: 'easeOutQuad'
            });
        }
        
        // Scroll to top button
        if (scrollTop > 300) {
            if (!scrollTopBtn.classList.contains('visible')) {
                scrollTopBtn.classList.add('visible');
                anime({
                    targets: scrollTopBtn,
                    scale: [0, 1],
                    opacity: [0, 1],
                    duration: 400,
                    easing: 'easeOutBack'
                });
            }
        } else {
            if (scrollTopBtn.classList.contains('visible')) {
                anime({
                    targets: scrollTopBtn,
                    scale: [1, 0],
                    opacity: [1, 0],
                    duration: 300,
                    easing: 'easeInBack',
                    complete: function() {
                        scrollTopBtn.classList.remove('visible');
                    }
                });
            }
        }
        
        // Update active navigation
        updateActiveNavigation();
        
        lastScrollTop = scrollTop;
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });
    
    // Scroll to top functionality with animation
    scrollTopBtn.addEventListener('click', function() {
        anime({
            targets: scrollTopBtn,
            rotate: '360deg',
            duration: 600,
            easing: 'easeInOutQuad'
        });
        
        anime({
            targets: document.documentElement,
            scrollTop: 0,
            duration: 1000,
            easing: 'easeOutCubic'
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                anime({
                    targets: document.documentElement,
                    scrollTop: targetPosition,
                    duration: 1000,
                    easing: 'easeInOutCubic'
                });
                
                // Add click animation to the link
                anime({
                    targets: this,
                    scale: [1, 0.95, 1],
                    duration: 200,
                    easing: 'easeOutQuad'
                });
            }
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.3;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Update active navigation based on scroll position
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                    
                    // Animate active link
                    anime({
                        targets: link,
                        scale: [1, 1.05, 1],
                        duration: 300,
                        easing: 'easeOutQuad'
                    });
                }
            });
        }
    });
}

// Other Features
function initOtherFeatures() {
    // Menu button functionality with animations
    const orderButtons = document.querySelectorAll('.btn-order');
    const infoButtons = document.querySelectorAll('.btn-info');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const menuName = this.getAttribute('data-menu');
            const price = this.getAttribute('data-price');
            const message = `Halo, saya ingin memesan ${menuName} (Rp ${price}). Mohon informasi lebih lanjut.`;
            const whatsappUrl = `https://wa.me/62082175755574?text=${encodeURIComponent(message)}`;
            
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
            }, 200);
        });
    });
    
    infoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const menuName = this.getAttribute('data-menu');
            setTimeout(() => {
                showMenuDetail(menuName);
            }, 200);
        });
    });

    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.remove('loading');
            anime({
                targets: this,
                opacity: [0, 1],
                scale: [1.1, 1],
                duration: 600,
                easing: 'easeOutQuad'
            });
        });
        
        if (!img.complete) {
            img.classList.add('loading');
            img.style.opacity = '0';
        }
    });

    // Phone number click tracking
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            anime({
                targets: this,
                scale: [1, 0.95, 1],
                duration: 150,
                easing: 'easeOutQuad'
            });
        });
    });

    // Location buttons functionality
    const locationButtons = document.querySelectorAll('button[onclick*="showMap"]');
    locationButtons.forEach(button => {
        // Remove inline onclick and add proper event listener
        const onclickAttr = button.getAttribute('onclick');
        if (onclickAttr) {
            const cabangMatch = onclickAttr.match(/showMap\('([^']+)'\)/);
            if (cabangMatch) {
                const cabang = cabangMatch[1];
                button.removeAttribute('onclick');
                button.addEventListener('click', function() {
                    showMap(cabang);
                });
            }
        }
    });

    // Ensure all buttons are visible (fallback for animation issues)
    ensureButtonsVisible();

    // Ensure all prices are visible (fallback for CSS issues)
    ensurePricesVisible();

    console.log('🥟 Omah Lumpia website loaded with full anime.js animations!');
}

// Fallback function to ensure buttons are always visible
function ensureButtonsVisible() {
    setTimeout(() => {
        const hiddenButtons = document.querySelectorAll('.btn-order, .btn-info');
        hiddenButtons.forEach(button => {
            const computedStyle = window.getComputedStyle(button);
            if (computedStyle.opacity === '0' || computedStyle.opacity < '0.5') {
                console.log('Making button visible:', button);
                anime({
                    targets: button,
                    opacity: 1,
                    translateY: 0,
                    duration: 500,
                    easing: 'easeOutQuad'
                });
            }
        });
    }, 2000); // Check after 2 seconds to ensure all animations have completed
}

// Fallback function to ensure prices are always visible
function ensurePricesVisible() {
    setTimeout(() => {
        const priceElements = document.querySelectorAll('.price, .menu-item .price, .price-section .price');
        priceElements.forEach(price => {
            const computedStyle = window.getComputedStyle(price);
            const isHidden = computedStyle.opacity === '0' ||
                           computedStyle.visibility === 'hidden' ||
                           computedStyle.display === 'none' ||
                           (computedStyle.webkitTextFillColor === 'transparent' && computedStyle.color === 'rgba(0, 0, 0, 0)');

            if (isHidden) {
                console.log('Making price visible:', price);

                // Force visibility
                price.style.opacity = '1';
                price.style.visibility = 'visible';
                price.style.display = 'inline-block';

                // Check if gradient text is working
                if (computedStyle.webkitTextFillColor === 'transparent' && computedStyle.color === 'rgba(0, 0, 0, 0)') {
                    // Fallback to solid color if gradient text doesn't work
                    price.style.color = '#D32F2F';
                    price.style.webkitTextFillColor = 'initial';
                    console.log('Applied fallback color for price:', price);
                }

                // Ensure proper styling
                price.style.fontWeight = '700';
                price.style.fontSize = '1.3rem';
            }
        });
    }, 1500); // Check after 1.5 seconds
}

// Map functionality for location buttons
function showMap(cabang) {
    const locations = {
        'cabang1': {
            name: 'Cabang 1 - Gerbang Perum Dreamingland',
            address: 'Gerbang perum dreamingland samping Indomart, Surabaya, Jawa Timur',
            coordinates: '-7.2575,112.7521', // Approximate coordinates for Surabaya
            googleMapsUrl: 'https://www.google.com/maps/search/Gerbang+perum+dreamingland+samping+Indomart+Surabaya'
        },
        'cabang2': {
            name: 'Cabang 2 - Car Free Day Jl. Darmo',
            address: 'Area Car Free Day (CFD) Jl. Darmo Surabaya, Jawa Timur',
            coordinates: '-7.2819,112.7378', // Approximate coordinates for Jl. Darmo
            googleMapsUrl: 'https://www.google.com/maps/search/Car+Free+Day+Jl+Darmo+Surabaya'
        },
        'cabang3': {
            name: 'Cabang 3 - Jln Wringin Kurung',
            address: 'Jln Wringin kurung depan masjid biru, Surabaya, Jawa Timur',
            coordinates: '-7.2575,112.7521', // Approximate coordinates
            googleMapsUrl: 'https://www.google.com/maps/search/Jln+Wringin+kurung+depan+masjid+biru+Surabaya'
        }
    };

    const location = locations[cabang];

    if (location) {
        // Create modal for location info
        showLocationModal(location);
    } else {
        console.error('Location not found:', cabang);
        alert('Maaf, informasi lokasi tidak tersedia.');
    }
}

// Show location modal
function showLocationModal(location) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.location-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Create modal HTML
    const modal = document.createElement('div');
    modal.className = 'location-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeLocationModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>${location.name}</h3>
                <button class="modal-close" onclick="closeLocationModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="location-info">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>${location.address}</p>
                </div>
                <div class="location-actions">
                    <a href="${location.googleMapsUrl}" target="_blank" class="btn-map">
                        <i class="fas fa-external-link-alt"></i>
                        Buka di Google Maps
                    </a>
                    <button class="btn-directions" onclick="getDirections('${location.coordinates}')">
                        <i class="fas fa-directions"></i>
                        Petunjuk Arah
                    </button>
                    <button class="btn-share" onclick="shareLocation('${location.name}', '${location.address}')">
                        <i class="fas fa-share"></i>
                        Bagikan Lokasi
                    </button>
                </div>
            </div>
        </div>
    `;

    // Add modal to page
    document.body.appendChild(modal);

    // Animate modal appearance
    anime({
        targets: modal.querySelector('.modal-content'),
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 300,
        easing: 'easeOutBack'
    });

    anime({
        targets: modal.querySelector('.modal-overlay'),
        opacity: [0, 1],
        duration: 200,
        easing: 'easeOutQuad'
    });
}

// Close location modal
function closeLocationModal() {
    const modal = document.querySelector('.location-modal');
    if (modal) {
        anime({
            targets: modal.querySelector('.modal-content'),
            opacity: [1, 0],
            scale: [1, 0.8],
            duration: 200,
            easing: 'easeInBack'
        });

        anime({
            targets: modal.querySelector('.modal-overlay'),
            opacity: [1, 0],
            duration: 200,
            easing: 'easeInQuad',
            complete: function() {
                modal.remove();
            }
        });
    }
}

// Get directions to location
function getDirections(coordinates) {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coordinates}`;
    window.open(directionsUrl, '_blank');
}

// Share location
function shareLocation(name, address) {
    const shareText = `📍 ${name}\n${address}\n\n🥟 Omah Lumpia - Lumpia Enak Surabaya`;

    if (navigator.share) {
        navigator.share({
            title: name,
            text: shareText,
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Informasi lokasi telah disalin ke clipboard!');
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = shareText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('Informasi lokasi telah disalin ke clipboard!');
        });
    }
}

// Video Handlers
function initVideoHandlers() {
    const videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach(item => {
        const video = item.querySelector('video');
        const overlay = item.querySelector('.video-overlay');

        if (video && overlay) {
            // Add click handler to play/pause video
            item.addEventListener('click', function(e) {
                // Don't interfere with native video controls
                if (e.target === video || video.contains(e.target)) {
                    return;
                }

                if (video.paused) {
                    video.play().catch(err => {
                        console.error('Error playing video:', err);
                    });
                } else {
                    video.pause();
                }
            });

            // Handle video play state
            video.addEventListener('play', function() {
                item.classList.add('playing');
                overlay.style.opacity = '0';
                overlay.style.pointerEvents = 'none';

                // Unmute video when user starts playing
                if (video.muted && video.currentTime === 0) {
                    video.muted = false;
                }
            });

            // Handle video pause state
            video.addEventListener('pause', function() {
                item.classList.remove('playing');
                if (video.currentTime > 0 && !video.ended) {
                    overlay.style.opacity = '0.6';
                    overlay.style.pointerEvents = 'auto';
                }
            });

            // Handle video end
            video.addEventListener('ended', function() {
                item.classList.remove('playing');
                overlay.style.opacity = '0.8';
                overlay.style.pointerEvents = 'auto';
                video.currentTime = 0; // Reset to beginning
            });

            // Handle video loading errors
            video.addEventListener('error', function(e) {
                console.error('Video loading error:', e);
                item.classList.remove('playing');

                const errorMsg = item.querySelector('.video-error') || document.createElement('div');
                errorMsg.className = 'video-error';
                errorMsg.innerHTML = '<p>❌ Video tidak dapat dimuat<br><small>Format mungkin tidak didukung browser</small></p>';
                errorMsg.style.cssText = `
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(211, 47, 47, 0.9);
                    color: white;
                    padding: 20px;
                    border-radius: 8px;
                    text-align: center;
                    z-index: 10;
                    font-size: 0.9rem;
                    max-width: 80%;
                `;
                if (!item.querySelector('.video-error')) {
                    item.appendChild(errorMsg);
                }
            });

            // Handle successful video load
            video.addEventListener('loadeddata', function() {
                const errorMsg = item.querySelector('.video-error');
                if (errorMsg) {
                    errorMsg.remove();
                }
                console.log('✅ Video loaded successfully:', video.src);
            });

            // Handle video metadata load
            video.addEventListener('loadedmetadata', function() {
                console.log('📹 Video metadata loaded:', {
                    duration: video.duration.toFixed(2) + 's',
                    dimensions: video.videoWidth + 'x' + video.videoHeight,
                    src: video.currentSrc
                });
            });

            // Handle loading start
            video.addEventListener('loadstart', function() {
                console.log('🔄 Loading video:', video.src);
            });

            // Handle when video can start playing
            video.addEventListener('canplay', function() {
                console.log('▶️ Video ready to play:', video.src);
            });
        }
    });
}

// Menu detail modal function with animations
function showMenuDetail(menuName) {
    const menuDetails = {
        'Lumpia Original': {
            description: 'Lumpia tradisional dengan resep turun temurun yang telah terbukti kelezatannya.',
            ingredients: ['Rebung segar pilihan', 'Ayam fillet berkualitas', 'Telur ayam kampung', 'Wortel segar', 'Bumbu rahasia keluarga'],
            process: 'Dibuat dengan proses tradisional, dimulai dari pemilihan bahan segar, pengolahan isian dengan bumbu rahasia, hingga pembungkusan dengan kulit lumpia yang renyah.',
            nutrition: 'Mengandung protein tinggi dari ayam dan telur, serat dari rebung dan wortel, serta karbohidrat dari kulit lumpia.',
            serving: 'Disajikan hangat dengan saus sambal atau kecap manis sesuai selera.'
        },
        'Lumpia Spesial': {
            description: 'Menu premium dengan bahan-bahan pilihan terbaik dan porsi yang lebih besar.',
            ingredients: ['Rebung premium grade A', 'Ayam premium tanpa lemak', 'Telur kampung organik', 'Bumbu spesial rahasia'],
            process: 'Menggunakan teknik khusus dalam pengolahan dan penyajian untuk menghasilkan cita rasa yang istimewa.',
            nutrition: 'Kandungan protein lebih tinggi dengan lemak yang lebih rendah, cocok untuk diet sehat.',
            serving: 'Disajikan dengan garnish khusus dan saus premium.'
        },
        'Lumpia Medium': {
            description: 'Ukuran sedang yang pas untuk camilan atau makanan ringan dengan cita rasa yang tidak kalah lezat.',
            ingredients: ['Rebung segar', 'Ayam berkualitas', 'Telur segar', 'Bumbu pilihan'],
            process: 'Dibuat dengan standar yang sama dengan lumpia original namun dalam ukuran yang lebih praktis.',
            nutrition: 'Porsi kalori yang tepat untuk camilan sehat di siang hari.',
            serving: 'Cocok untuk dinikmati kapan saja sebagai camilan atau makanan ringan.'
        }
    };

    const detail = menuDetails[menuName];
    if (detail) {
        const modal = document.createElement('div');
        modal.className = 'menu-modal';
        modal.style.opacity = '0';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${menuName}</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <p><strong>Deskripsi:</strong> ${detail.description}</p>
                    <div class="detail-section">
                        <h4>Komposisi:</h4>
                        <ul>${detail.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
                    </div>
                    <div class="detail-section">
                        <h4>Proses Pembuatan:</h4>
                        <p>${detail.process}</p>
                    </div>
                    <div class="detail-section">
                        <h4>Informasi Gizi:</h4>
                        <p>${detail.nutrition}</p>
                    </div>
                    <div class="detail-section">
                        <h4>Penyajian:</h4>
                        <p>${detail.serving}</p>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        
        // Animate modal appearance
        anime({
            targets: modal,
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutQuad'
        });
        
        anime({
            targets: modal.querySelector('.modal-content'),
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 400,
            easing: 'easeOutBack',
            delay: 100
        });

        // Animate modal content
        const modalSections = modal.querySelectorAll('.detail-section');
        anime({
            targets: modalSections,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 300,
            easing: 'easeOutQuad',
            delay: anime.stagger(100, {start: 300})
        });

        // Animate ingredients list
        const ingredients = modal.querySelectorAll('.detail-section li');
        anime({
            targets: ingredients,
            opacity: [0, 1],
            translateX: [-20, 0],
            duration: 200,
            easing: 'easeOutQuad',
            delay: anime.stagger(50, {start: 500})
        });
        
        // Close modal functionality
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => closeModal(modal));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal);
        });
    }
}

// Close modal with animation
function closeModal(modal) {
    anime({
        targets: modal.querySelector('.modal-content'),
        scale: [1, 0.8],
        opacity: [1, 0],
        duration: 300,
        easing: 'easeInBack'
    });
    
    anime({
        targets: modal,
        opacity: [1, 0],
        duration: 200,
        delay: 100,
        easing: 'easeInQuad',
        complete: function() {
            modal.remove();
        }
    });
}

// Show map function
function showMap(cabang) {
    let mapUrl = '';
    if (cabang === 'cabang1') {
        mapUrl = 'https://maps.app.goo.gl/EN2mCPtYjHqg67jQA'; // Ganti dengan link cabang 1
    } else if (cabang === 'cabang2') {
        mapUrl = 'https://maps.app.goo.gl/Ah3s7AFuMHQJiaL59'; // Ganti dengan link cabang 2
    } else if (cabang === 'cabang3') {
        mapUrl = 'https://maps.app.goo.gl/8wSYxFQoQxQfndwW7'; // Ganti dengan link cabang 3
    }
    if (mapUrl) window.open(mapUrl, '_blank');
}

// Add enhanced styles for animations
const enhancedStyles = `
    .menu-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        backdrop-filter: blur(5px);
    }
    
    .modal-content {
        background: white;
        border-radius: 20px;
        max-width: 600px;
        max-height: 80vh;
        overflow-y: auto;
        margin: 1rem;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
        border-bottom: 1px solid #eee;
        background: var(--gradient-primary);
        color: white;
        border-radius: 20px 20px 0 0;
    }
    
    .modal-header h3 {
        margin: 0;
        font-size: 1.5rem;
    }
    
    .modal-close {
        background: none;
        border: none;
        font-size: 2rem;
        color: white;
        cursor: pointer;
        padding: 0;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.3s ease;
    }
    
    .modal-close:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: rotate(90deg);
    }
    
    .modal-body {
        padding: 2rem;
    }
    
    .detail-section {
        margin: 1.5rem 0;
        opacity: 0;
        transform: translateY(20px);
    }
    
    .detail-section h4 {
        color: var(--primary-color);
        margin-bottom: 0.8rem;
        font-size: 1.1rem;
    }
    
    .detail-section ul {
        list-style: none;
        padding: 0;
    }
    
    .detail-section li {
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        padding: 0.8rem 1.2rem;
        margin: 0.5rem 0;
        border-radius: 25px;
        border-left: 4px solid var(--primary-color);
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateX(-20px);
    }
    
    .detail-section li:hover {
        transform: translateX(5px);
        box-shadow: 0 4px 15px rgba(211, 47, 47, 0.1);
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        pointer-events: none;
        z-index: 1;
    }
    
    .cta-button, .btn-contact, .btn-order, .btn-info, .menu-item {
        position: relative;
        overflow: hidden;
    }
`;

// Add enhanced styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = enhancedStyles;
document.head.appendChild(styleSheet);

// Performance optimization
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful');
        }, function(err) {
            console.log('ServiceWorker registration failed');
        });
    });
}
// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Add active class to current page in navigation
const currentPage = window.location.pathname.split('/').pop();
const navItems = document.querySelectorAll('.nav-link');

navItems.forEach(item => {
    const itemPage = item.getAttribute('href').split('/').pop();
    if (itemPage === currentPage) {
        item.classList.add('active');
    }
});

// Profile image hover effect enhancement
const profileImage = document.querySelector('.profile-image');
if (profileImage) {
    profileImage.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    profileImage.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe stat items
document.querySelectorAll('.stat-item').forEach(item => {
    observer.observe(item);
});

console.log('Portfolio website loaded successfully!');

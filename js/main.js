// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
const mobileMenuLinks = mobileMenu.getElementsByTagName('a');
for (let link of mobileMenuLinks) {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
}

// Intersection Observer for animations
const animatedElements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

animatedElements.forEach(element => {
    observer.observe(element);
});

// Job listing toggle
const jobToggles = document.querySelectorAll('.job-toggle');

jobToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const jobListing = toggle.closest('.job-listing');
        const jobDetails = jobListing.querySelector('.job-details');
        const isHidden = jobDetails.classList.toggle('hidden');
        toggle.textContent = isHidden ? 'View Details' : 'Hide Details';
    });
});
// script.js

// Smooth scroll to section when clicking navigation links
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

// Form validation (example; customize as needed)
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Validate form fields (e.g., check if name and email are filled)
    // Handle form submission (e.g., send data to server)
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Mobile navigation toggle
const navToggle = document.createElement('button');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = `
    <span class="hamburger"></span>
    <span class="hamburger"></span>
    <span class="hamburger"></span>
`;

const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Add nav toggle to mobile view
if (window.innerWidth <= 768) {
    nav.appendChild(navToggle);
}

// Typing animation for hero text
const typeText = (element, text, speed = 50) => {
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, speed);
};

// Initialize typing animation
const heroText = document.querySelector('.js-type');
if (heroText) {
    const text = heroText.textContent;
    heroText.textContent = '';
    typeText(heroText, text);
}

// Theme Toggle
const themeToggle = document.createElement('button');
themeToggle.classList.add('theme-toggle');
themeToggle.setAttribute('aria-label', 'Toggle theme');
themeToggle.innerHTML = `
  <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
    <path d="M12 2L8 6h8l-4-4zM12 22l4-4H8l4 4zM2 12l4 4v-8l-4 4zM22 12l-4-4v8l4-4z"/>
  </svg>
  <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12.1 22c-5.52 0-10-4.48-10-10 0-4.84 3.44-8.87 8-9.8-.16-.03-.32-.06-.48-.06-2.67 0-4.84 2.17-4.84 4.84 0 2.66 2.17 4.83 4.84 4.83.16 0 .32-.03.48-.06.36 4.37 3.97 7.91 8.44 8.37-1.09.19-2.24.28-3.44.28z"/>
  </svg>
`;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggle.classList.add('dark');
}

// Toggle theme function
const toggleTheme = () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.classList.toggle('dark');
  
  // Save theme preference
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

themeToggle.addEventListener('click', toggleTheme);

// Add theme toggle to the page
document.body.appendChild(themeToggle);

// Add current year to footer
document.querySelector('.footer p').textContent = 
    document.querySelector('.footer p').textContent.replace('{{currentYear}}', new Date().getFullYear()); 
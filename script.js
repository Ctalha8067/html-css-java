//  Toggle Navigation Active Link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('nav ul li a.active')?.classList.remove('active');
        this.classList.add('active');
    });
});

//  Search Button Alert (Hero Section)
const searchButton = document.querySelector('.search-box button');
searchButton.addEventListener('click', () => {
    const jobTitle = document.querySelectorAll('.search-box input')[0].value;
    const location = document.querySelectorAll('.search-box input')[1].value;
    alert(`Searching for "${jobTitle}" jobs in "${location}"`);
});

//  Animate Category Cards on Hover
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = "scale(1.05)";
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = "scale(1)";
    });
});

//  Scroll to Top on Logo Click
const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

//  Show Alert on Apply Button
const applyButtons = document.querySelectorAll('.apply-btn');
applyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Redirecting to job application page...");
        window.location.href = button.getAttribute('href');
    });
});

//  View All Jobs Button Click
const viewAllBtn = document.querySelector('.view-all');
viewAllBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("Viewing all jobs...");
    window.location.href = viewAllBtn.getAttribute('href');
});

//  Sticky Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#2563eb';
        navbar.style.color = 'white';
    } else {
        navbar.style.backgroundColor = '#fff';
        navbar.style.color = '#333';
    }
});

//  Smooth Scroll to Sections (for anchor links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});


//  Show Current Year Automatically
const yearSpan = document.createElement('span');
yearSpan.textContent = new Date().getFullYear();
document.querySelector('.copyright p').innerHTML = `&copy; ${yearSpan.textContent} JobPortal. All rights reserved.`;

//  Navbar Collapse for Mobile View
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

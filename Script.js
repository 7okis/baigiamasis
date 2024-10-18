document.addEventListener('DOMContentLoaded', () => {
    // Animate skill bars
    const skillLevels = document.querySelectorAll('.skill-level');

    skillLevels.forEach(skill => {
        const level = skill.getAttribute('data-skill');
        skill.style.width = level;
    });

    // Expandable images in My Works section with lightbox
    const workImages = document.querySelectorAll('.clickable-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    
    let currentIndex = 0;

    // Function to open lightbox
    function openLightbox(index) {
        lightbox.style.display = 'flex';  // Display lightbox
        currentIndex = index;
        updateLightboxImage(currentIndex);
    }

    // Function to update the lightbox image
    function updateLightboxImage(index) {
        const imageSrc = workImages[index].getAttribute('data-full');
        lightboxImg.src = imageSrc;
    }

    // Add event listeners to clickable images
    workImages.forEach((image, index) => {
        image.addEventListener('click', () => openLightbox(index));
    });

    // Add event listeners to lightbox controls (Next, Previous, Close)
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';  // Close the lightbox
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + workImages.length) % workImages.length;
        updateLightboxImage(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % workImages.length;
        updateLightboxImage(currentIndex);
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Scroll button smooth scrolling
    document.querySelector('.scroll-button').addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector('#contact');
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Hero image hover effect
    const heroImage = document.getElementById('hero-image');
    const originalImage = 'Pictures/Hero-img2.png';
    const hoverImage = 'Pictures/Hero-img-sad.png';

    heroImage.addEventListener('mouseover', () => {
        heroImage.src = hoverImage;
    });

    heroImage.addEventListener('mouseout', () => {
        heroImage.src = originalImage;
    });
});

document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Scroll to the target element with smooth scrolling
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust -50 for the header height if it's sticky
            behavior: 'smooth'
        });
    });
});
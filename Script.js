document.addEventListener('DOMContentLoaded', () => {
    // Animate skill bars
    const skillLevels = document.querySelectorAll('.skill-level');

    skillLevels.forEach(skill => {
        const level = skill.getAttribute('data-skill');
        skill.style.width = level;
    });

    // Expandable images in My Works section
    const workImages = document.querySelectorAll('#my-works img');

    workImages.forEach(image => {
        image.addEventListener('click', () => {
            // Create overlay
            const overlay = document.createElement('div');
            overlay.id = 'overlay';
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
            overlay.style.display = 'flex';
            overlay.style.justifyContent = 'center';
            overlay.style.alignItems = 'center';
            overlay.style.zIndex = '1000';

            // Create enlarged image
            const enlargedImg = document.createElement('img');
            enlargedImg.src = image.src;
            enlargedImg.style.maxWidth = '80%';
            enlargedImg.style.maxHeight = '80%';
            enlargedImg.style.border = '5px solid #fff';
            enlargedImg.style.borderRadius = '10px';

            // Append image to overlay
            overlay.appendChild(enlargedImg);

            // Append overlay to body
            document.body.appendChild(overlay);

            // Remove overlay on click
            overlay.addEventListener('click', () => {
                document.body.removeChild(overlay);
            });
        });
    });
});

// Add event listener to the scroll button
document.querySelector('.scroll-button').addEventListener('click', function (e) {
    e.preventDefault();  // Prevent default anchor link behavior

    // The target element we want to scroll to
    const target = document.querySelector('#contact');

    // Use window.scrollTo with smooth behavior
    window.scrollTo({
        top: target.offsetTop,   // Scroll to the top of the target section
        behavior: 'smooth'       // Set to smooth scrolling
    });

    // If you want to make the scroll slower, use a custom scrolling function below:
    slowScrollTo(target, 2000);  // Slow scroll to the target element (2 seconds)
});

// Function to slow down the scroll speed
function slowScrollTo(element, duration) {
    const targetPosition = element.getBoundingClientRect().top;  // Position of target
    const startPosition = window.pageYOffset;  // Current scroll position
    const startTime = performance.now();  // Start time of scroll

    function scrollAnimation(currentTime) {
        const timeElapsed = currentTime - startTime;
        const scrollDistance = easeInOutQuad(timeElapsed, startPosition, targetPosition, duration);

        window.scrollTo(0, scrollDistance);

        if (timeElapsed < duration) {
            requestAnimationFrame(scrollAnimation);  // Continue animation
        }
    }

    requestAnimationFrame(scrollAnimation);
}

// Ease in-out function for smooth scrolling effect
function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}

// Select all images with the 'clickable-image' class
const images = document.querySelectorAll('.clickable-image');

// Lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Function to open the lightbox with the full-size image
images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'block';          // Show the lightbox
        const fullSizeImg = image.getAttribute('data-full');  // Get full-size image URL
        lightboxImg.src = fullSizeImg;             // Set the lightbox image to the full-size image
    });
});

// Function to close the lightbox when clicking the close button
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close the lightbox if the user clicks anywhere outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // Show or hide the mobile menu
});

const heroImage = document.getElementById('hero-image');

// Define the original and hover image URLs
const originalImage = 'Pictures/Hero-img2.png';
const hoverImage = 'Pictures/Hero-img-sad.png';

// Add event listeners for mouseover and mouseout
heroImage.addEventListener('mouseover', () => {
    heroImage.src = hoverImage; // Switch to hover image
});

heroImage.addEventListener('mouseout', () => {
    heroImage.src = originalImage; // Switch back to original image
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (rect.top <= window.innerHeight && rect.bottom >= 0);
}

const textContents = document.querySelectorAll('.text-content');
const footer = document.querySelector('footer');

function checkViewport() {
    textContents.forEach(textContent => {
        if (isInViewport(textContent)) {
            textContent.classList.add('active');
        }
    });

    if (isInViewport(footer)) {
        footer.classList.add('active');
    }
}

// Check on page load
checkViewport();

// Check on scroll
window.addEventListener('scroll', checkViewport);

document.addEventListener('DOMContentLoaded', function () {

    // Header and Navbar
    const header = document.getElementById('main-header');
    const homeLink = document.querySelector('.menu-item-home a'); // Target Home link
    const allLinks = document.querySelectorAll('#top-menu li a');
    
    // Handle Home link as active when on the homepage
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        homeLink.classList.add('current-page');
    }

    // Handle active link for all menu items
    allLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove active class from all links
            allLinks.forEach(l => l.classList.remove('current-page'));
            
            // Add active class to the clicked link
            this.classList.add('current-page');
        });
    });

    // Dropdown functionality for 'Insights' menu
    const dropdownMenu = document.querySelector('.menu-item-has-children');
    if (dropdownMenu) {
        dropdownMenu.addEventListener('mouseover', function () {
            this.querySelector('.sub-menu').style.display = 'block';
        });

        dropdownMenu.addEventListener('mouseout', function () {
            this.querySelector('.sub-menu').style.display = 'none';
        });
    }

    // Scroll event to shrink navbar and logo size
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('shrunk');
        } else {
            header.classList.remove('shrunk');
        }
    });

    // Green Box Scroll Text functionality (if needed)
    const greenBox = document.querySelector('.green-box');
    if (greenBox) {
        let textContainer = greenBox.querySelector('.scrolling-text');
        if (textContainer) {
            let scrollHeight = textContainer.scrollHeight;
            let scrollSpeed = 0.05; // Adjusted slower speed for scrolling

            // Animate scrolling text
            function animateScroll() {
                if (textContainer.scrollTop >= scrollHeight) {
                    textContainer.scrollTop = 0;
                } else {
                    textContainer.scrollTop += scrollSpeed;
                }
                requestAnimationFrame(animateScroll);
            }

            animateScroll();
        }
    }

    // Example: Handling a "Contact" form or modal (if you have such features)
    const contactModalTrigger = document.querySelector('#contact-modal-trigger');
    const contactModal = document.querySelector('#contact-modal');
    const closeModalBtn = document.querySelector('#close-modal');

    if (contactModalTrigger && contactModal && closeModalBtn) {
        contactModalTrigger.addEventListener('click', function () {
            contactModal.style.display = 'block';
        });

        closeModalBtn.addEventListener('click', function () {
            contactModal.style.display = 'none';
        });

        // Close modal when clicked outside
        window.addEventListener('click', function (e) {
            if (e.target === contactModal) {
                contactModal.style.display = 'none';
            }
        });
    }

    // Button handling for "View All" button
    const viewAllButton = document.querySelector('.et_pb_button');
    if (viewAllButton) {
        viewAllButton.addEventListener('click', function () {
            window.location.href = 'https://biobiz.in/category/updates/';
        });
    }

    // Adjust 4th and 5th sections based on window size
    const section4 = document.querySelector('#section-4');
    const section5 = document.querySelector('#section-5');

    // Function to adjust sections' position based on screen size
    function adjustSectionsForMobile() {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 768) {
            // Remove fixed position for smaller screens
            if (section4) {
                section4.style.position = 'relative';
            }
            if (section5) {
                section5.style.position = 'relative';
            }
        } else {
            // Reset position to fixed for larger screens (optional)
            if (section4) {
                section4.style.position = 'fixed'; // Adjust this as needed
            }
            if (section5) {
                section5.style.position = 'fixed'; // Adjust this as needed
            }
        }
    }

    // Initial adjustment of sections on page load
    adjustSectionsForMobile();

    // Adjust sections on window resize
    window.addEventListener('resize', adjustSectionsForMobile);

    // JavaScript for any additional functionality in the 4th section
    document.querySelectorAll("#other-sections .button").forEach(button => {
        button.addEventListener("click", () => {
            console.log(`Navigating to: ${button.href}`);
        });
    });

    // Hamburger Menu functionality
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navMenuContainer = document.getElementById('nav-menu-container');

    // Toggle navigation menu visibility
    hamburgerIcon.addEventListener('click', function () {
        const isExpanded = hamburgerIcon.getAttribute('aria-expanded') === 'true';

        // Toggle expanded state
        hamburgerIcon.setAttribute('aria-expanded', !isExpanded);

        // Toggle the collapsed/expanded class on the menu
        navMenuContainer.classList.toggle('collapsed', isExpanded);
        navMenuContainer.classList.toggle('expanded', !isExpanded);
        
        // Add class to animate hamburger icon
        hamburgerIcon.classList.toggle('expanded', !isExpanded);
    });
});

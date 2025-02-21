// Home page -------------

document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});



// Contact Form button in Footer ------------------


document.addEventListener("DOMContentLoaded", function () {
    const contactLinks = document.querySelectorAll(".contact-link");

    contactLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();  // Stop default link behavior

            // Check if we're already on index.html
            if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
                const contactSection = document.getElementById("contact");

                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                }
            } else {
                // Redirect to index.html#contact if on another page
                window.location.href = "index.html#contact";
            }
        });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    function animateCounter(id, start, end, duration) {
        let obj = document.getElementById(id);
        let current = start;
        let range = end - start;
        let increment = range / (duration / 20);
        let timer = setInterval(() => {
            current += increment;
            obj.textContent = Math.floor(current);
            if (current >= end) {
                clearInterval(timer);
                obj.textContent = end;
            }
        }, 20);
    }

    // Simulated stats (change values if needed)
    animateCounter("books-exchanged", 0, 820, 2000);
    animateCounter("users-joined", 0, 370, 2500);
    animateCounter("requests-made", 0, 115, 1800);
});





document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds (1s)
        once: true,     // Only animate once when scrolling
    });
});

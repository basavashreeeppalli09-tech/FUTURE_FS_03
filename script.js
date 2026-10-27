// Automatically display the current year.
document.getElementById("year").textContent =
    new Date().getFullYear();

// Smooth scrolling for navigation links.
document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

console.log("Welcome to Starbrew Café!");

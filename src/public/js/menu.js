document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        
        if (scrollPosition > 0.7 * viewportHeight) {
            navbar.style.backgroundColor = "white"; // Change to your desired color
        } else {
            navbar.style.backgroundColor = ""; // Reset to default or original color
        }
    });
});

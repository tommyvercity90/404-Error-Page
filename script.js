// Select all decorative stars
const stars = document.querySelectorAll(".star");

// Add click interaction to each star
stars.forEach((star) => {
    star.style.cursor = "pointer";

    star.addEventListener("click", () => {
        // Toggle the star's appearance
        star.style.color =
            star.style.color === "white" ? "#fbbf24" : "white";

        // Add a small rotation effect
        star.style.transform = "rotate(180deg) scale(1.4)";
    });
});

// Log a message for developers
console.log("404 Error Page loaded successfully!");
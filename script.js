document.addEventListener("DOMContentLoaded", function () {
    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");  // Add animation class
            } else {
                entry.target.classList.remove("show");  // Remove animation class when out of view
            }
        });
    }, { threshold: 0.2 });

    hiddenElements.forEach(element => {
        observer.observe(element);
    });
});

document.getElementById("Profile-Card").addEventListener("click", function() {
    window.location.href = "profile-card.html";
});


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

document.addEventListener('DOMContentLoaded', function() {
    const gamesCircle = document.getElementById('gamesCircle');
    
    if (gamesCircle) {
        
        gamesCircle.style.cursor = 'pointer';
        
        // Click event
        gamesCircle.addEventListener('click', function() {
            window.location.href = 'games.html';
        });
        gamescircle1.addEventListener("click", function() {
            window.location.href = "profile-card.html";
        });
        
        // Hover effects
        gamesCircle.addEventListener('mouseenter', function() {
            
            this.style.transition = 'transform 0.3s ease';
        });
        
        gamescircle1.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});
document.getElementById("Profile-Card").addEventListener("click", function() {
    window.location.href = "profile-card.html";
});
document.getElementById("Games").addEventListener("click", function() {
    window.location.href = "games.html";
});


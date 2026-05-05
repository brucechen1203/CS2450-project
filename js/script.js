document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    // No real authentication yet
    // Just simulate login and go to home page
    window.location.href = "pages/home.html";
});
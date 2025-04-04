// Sidebar Toggle Functionality
document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const sidebar = document.getElementById("sidebar");
    const navbar = document.querySelector(".navbar");
    
    // Open the sidebar
    menuBtn.addEventListener("click", function() {
        sidebar.classList.add("open");
        navbar.classList.add("open");  // Show nav links
    });

    // Close the sidebar
    closeBtn.addEventListener("click", function() {
        sidebar.classList.remove("open");
        navbar.classList.remove("open");  // Hide nav links again
    });

    // Close sidebar if clicking outside
    document.addEventListener("click", function(event) {
        if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
            sidebar.classList.remove("open");
            navbar.classList.remove("open");
        }
    });
});

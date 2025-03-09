// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Get the toggle button and the first sidebar element by their IDs
    const toggleAside = document.getElementById("toggle-aside");
    const sidebarOne = document.getElementById("sidebar-one");

    // Set the initial inner HTML of the toggle button to a down arrow icon
    toggleAside.innerHTML = '<i class="fas fa-angle-down"></i>';

    // Add a click event listener to the toggle button
    toggleAside.addEventListener("click", function() {
        // Toggle the 'active' class on the first sidebar and the toggle button
        sidebarOne.classList.toggle("active");
        toggleAside.classList.toggle("active");

        // Change the icon based on the sidebar's active state
        if (sidebarOne.classList.contains("active")) {
            // If the sidebar is active, change the icon to an up arrow
            toggleAside.innerHTML = '<i class="fas fa-angle-up"></i>';
        } else {
            // If the sidebar is not active, change the icon to a down arrow
            toggleAside.innerHTML = '<i class="fas fa-angle-down"></i>';
        }
    });
});

// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Get the toggle button and the second sidebar element by their IDs
    const toggleAside = document.getElementById("toggle-aside");
    const sidebarTwo = document.getElementById("sidebar-two");

    // Set the initial inner HTML of the toggle button to a down arrow icon
    toggleAside.innerHTML = '<i class="fas fa-angle-down"></i>';

    // Add a click event listener to the toggle button
    toggleAside.addEventListener("click", function() {
        // Toggle the 'active' class on the second sidebar and the toggle button
        sidebarTwo.classList.toggle("active");
        toggleAside.classList.toggle("active");

        // Change the icon based on the sidebar's active state
        if (sidebarTwo.classList.contains("active")) {
            // If the sidebar is active, change the icon to an up arrow
            toggleAside.innerHTML = '<i class="fas fa-angle-up"></i>';
        } else {
            // If the sidebar is not active, change the icon to a down arrow
            toggleAside.innerHTML = '<i class="fas fa-angle-down"></i>';
        }
    });
});
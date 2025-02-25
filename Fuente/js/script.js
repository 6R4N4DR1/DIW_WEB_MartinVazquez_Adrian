document.addEventListener("DOMContentLoaded", function() {
    const toggleAside = document.getElementById("toggle-aside");
    const sidebarOne = document.getElementById("sidebar-one");

    toggleAside.innerHTML = '<i class="fas fa-angle-down"></i>';

    toggleAside.addEventListener("click", function() {
        sidebarOne.classList.toggle("active");
        toggleAside.classList.toggle("active");

        if (sidebarOne.classList.contains("active")) {
            toggleAside.innerHTML = '<i class="fas fa-angle-up"></i>';
        } else {
            toggleAside.innerHTML = '<i class="fas fa-angle-down"></i>';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleAside = document.getElementById("toggle-aside");
    const sidebarTwo = document.getElementById("sidebar-two");

    toggleAside.innerHTML = '<i class="fas fa-angle-down"></i>';

    toggleAside.addEventListener("click", function() {
        sidebarTwo.classList.toggle("active");
        toggleAside.classList.toggle("active");

        if (sidebarTwo.classList.contains("active")) {
            toggleAside.innerHTML = '<i class="fas fa-angle-up"></i>';
        } else {
            toggleAside.innerHTML = '<i class="fas fa-angle-down"></i>';
        }
    });
});
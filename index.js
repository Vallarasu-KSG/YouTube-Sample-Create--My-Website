const menuButton=document.querySelectorAll('.menu-button');
const screenOverlay=document.querySelector('.screen-overlay');
const themeButton=document.querySelector('.theme-button i');

// Initialaze dark mode based on localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    themeButton.classList.replace("fa-moon", "fa-sun"); 
} else {
    themeButton.classList.replace("fa-sun", "fa-moon");
}

// toggle dark mode when theme button is clicked
themeButton.addEventListener("click", () => {
   const isDarkMode = document.body.classList.toggle("dark-mode");
   localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
   themeButton.classList.toggle("fa-sun", isDarkMode);
   themeButton.classList.toggle("fa-moon", !isDarkMode);
});

// toggle sidebar visibility when menu button are clicked
menuButton.forEach(button => {
    button.addEventListener("click", () => {
        document.body.classList.toggle("sidebar-hidden");
    });
});

// toggle sidebar visibility when screen overlay is clicked
screenOverlay.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
});

// Show sidebar on large screens by default
if (window.innerWidth >= 768)
{
    document.body.classList.remove("sidebar-hidden");
}
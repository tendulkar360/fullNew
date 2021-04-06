const toggle = document.querySelectorAll("nav-link");
const navbarDark = document.querySelectorAll("navbar-dark");
const navBar = document.querySelectorAll("navbar-nav");
// const toggle = document.querySelectorAll("nav-link");

toggle.addEventListener("click" , () => {
    navbarDark.classList.toggle("navbar-dark")
    navBar.classList.toggle("navbar-nav")
    // toggle.classList.toggle("nav-link")
})
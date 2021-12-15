const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");


// foreach. built in method creating magic, uden at vi behøver skrive mere. Den bringer alle items ud af array 
// 'n' kan du kalde hvad du vil. Her kalder vi den n.... med arrow function efterfulgt af n, tilføjer vi resten af koden til dens arrays.

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
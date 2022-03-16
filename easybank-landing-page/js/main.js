const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector('nav');

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("navActive");
    hamburger.classList.toggle("toggle");

});


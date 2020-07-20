var swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 4000,
  },
  loop: true,
});

var swiperQuotes = new Swiper(".quotes__slider", {
  spaceBetween: 30,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
  },
  loop: true,
});

var swiperPartners = new Swiper(".partners__slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetweenSlides: 30,
    },
    // when window width is <= 499px
    499: {
      slidesPerView: 2,
      spaceBetweenSlides: 30,
    },
    // when window width is <= 767px
    767: {
      slidesPerView: 3,
      spaceBetweenSlides: 30,
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 4,
      spaceBetweenSlides: 30,
    },
  },
});

//nav left
const navMenu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const hamburgerLeft = document.querySelector(".hamburger-left");
const hamburgerRight = document.querySelector(".hamburger-right");
const menuLinks = document.querySelectorAll(".menu-link");

hamburgerLeft.addEventListener("click", (e) => {
  navMenu.classList.toggle("menu-active");
  hamburgerLeft.classList.toggle("hamburger-active");
});
hamburgerRight.addEventListener("click", (e) => {
  sidebar.classList.toggle("sidebar-active");
  hamburgerRight.classList.toggle("hamburger-active");
});
//close out menu
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("menu-active")) {
    hamburgerLeft.classList.remove("hamburger-active");
    navMenu.classList.remove("menu-active");
  }
  if (event.target.classList.contains("sidebar-active")) {
    hamburgerRight.classList.remove("hamburger-active");
    sidebar.classList.remove("sidebar-active");
  }
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("menu-active");
    hamburgerLeft.classList.remove("hamburger-active");
  });
});

lightGallery(document.getElementById("gallery"), {
  thumbnail: true,
});
lightGallery(document.getElementById("footer-gallery"), {
  thumbnail: true,
});
//Get the button ToTop
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

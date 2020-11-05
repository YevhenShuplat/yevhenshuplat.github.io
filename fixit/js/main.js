//nav left
const menu = document.querySelector(".header__menu-list");
const headerMenu = document.querySelector(".header__menu");
const hamburger = document.querySelector(".hamburger");
const menuLinks = document.querySelectorAll(".header__menu-list a");

hamburger.addEventListener("click", (e) => {
  headerMenu.classList.toggle("header__menu-active");
  menu.classList.toggle("menu__active");
  hamburger.classList.toggle("hamburger-active");
});
//close out menu
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("menu__active")) {
    hamburger.classList.remove("hamburger-active");
    menu.classList.remove("menu__active");
    headerMenu.classList.remove("header__menu-active");
  }
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("hamburger-active");
    menu.classList.remove("menu__active");
    headerMenu.classList.remove("header__menu-active");
  });
});
//tabs
const buttonsContainer = document.querySelector(".prices__buttons");
const tabs = document.querySelector(".tabs");
const pricesButton = document.querySelector(".prices__buttons");

buttonsContainer.addEventListener("click", (event) => {
  let index = event.target.closest(".prices__button").dataset.value;

  tabs.querySelector(".active").classList.remove("active");
  tabs.querySelector(`.tab--${index}`).classList.add("active");
  pricesButton
    .querySelector(".button-active")
    .classList.remove("button-active");
  pricesButton.querySelector(`.tab--${index}`).classList.add("button-active");
});

let swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// //animation

// var tl = gsap.timeline({ defaults: { duration: 1 } });

// tl.from(".welcome__content-heading", { opacity: 0, y: 40, stagger: 0.3 });
// tl.from(".welcome__content-p", { opacity: 0, y: 40, stagger: 0.3 }, "-=.6");
// tl.from(
//   ".welcome__content-button",
//   { opacity: 0, y: 40, stagger: 0.3 },
//   "-=.7"
// );

//animation

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);

  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}

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

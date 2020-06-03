const tabsItem = document.querySelectorAll(".tabs__item");
const tabsPanel = document.querySelectorAll(".tabs-panel");

tabsItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const indexItem = e.target.closest(".tabs__item").dataset.index;
    console.log(indexItem);
    console.log(tabsPanel[1].dataset.index);

    if (indexItem === tabsPanel[0].dataset.index) {
      tabsPanel[0].classList.add("active");
      tabsItem[0].classList.add("active");
    } else {
      tabsPanel[0].classList.remove("active");
      tabsItem[0].classList.remove("active");
    }

    if (indexItem === tabsPanel[1].dataset.index) {
      tabsPanel[1].classList.add("active");
      tabsItem[1].classList.add("active");
    } else {
      tabsPanel[1].classList.remove("active");
      tabsItem[1].classList.remove("active");
    }
    if (indexItem === tabsPanel[2].dataset.index) {
      tabsPanel[2].classList.add("active");
      tabsItem[2].classList.add("active");
    } else {
      tabsPanel[2].classList.remove("active");
      tabsItem[2].classList.remove("active");
    }
  });
});

//hamburger
const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");
burger.addEventListener("click", (e) => {
  burger.classList.toggle("open");
  nav.classList.toggle("navOpen");
});

//scroll
const scrollLinks = document.querySelectorAll(".nav__menu__link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    let position = element.offsetTop - 80;
    window.scrollTo({
      left: 0,
      top: position,
    });
    burger.classList.remove("open");
    nav.classList.remove("navOpen");
  });
});

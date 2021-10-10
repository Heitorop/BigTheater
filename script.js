/** @format */
const humburger = document.getElementById("hamburger-menu");
const checkBo = document.getElementById("menu__toggle");
const app = document.getElementById("app");
function check() {
  if (checkBo.checked) {
    humburger.style.left = 250 + "px";
    app.classList.add("over");
    console.log("lol");
  } else {
    humburger.style.top = 42 + "px";
    humburger.style.left = 40 + "px";
    app.classList.remove("over");
  }
}
check();
checkBo.addEventListener("click", check);
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
});

const nextAr = document.querySelector(".swiper-button-next-unique");
const prevAr = document.querySelector(".swiper-button-prev-unique");

nextAr.addEventListener("click", function () {
  if (prevAr.classList.contains("opacity")) {
    prevAr.classList.remove("opacity");
  }
  nextAr.classList.add("opacity");
});

prevAr.addEventListener("click", function () {
  if (nextAr.classList.contains("opacity")) {
    nextAr.classList.remove("opacity");
  }
  prevAr.classList.add("opacity");
});

var swiper3 = new Swiper(".mySecSwiper", {
  slidesPerView: 4,
  centeredSlides: true,
  slideNextClass: "swiper-slide3-next",
  slidePrevClass: "swiper-slide3-prev",
  slideActiveClass: "swiper-slide3-active",
});
var swiper33 = new Swiper(".myThirdSwiper", {
  slidesPerView: 2,
  centeredSlides: true,
  slideNextClass: "swiper-slide3-next",
  slidePrevClass: "swiper-slide3-prev",
  slideActiveClass: "swiper-slide3-active",
});
var swiper4 = new Swiper(".myFourthSwiper", {
  slidesPerView: 2,
  centeredSlides: false,
  slideNextClass: "swiper-slide3-next",
  slidePrevClass: "swiper-slide3-prev",
  slideActiveClass: "swiper-slide3-active",
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
});
var swiper5 = new Swiper(".partners", {
  slidesPerView: 4,
  centeredSlides: false,
  slideNextClass: "swiper-slide3-next",
  slidePrevClass: "swiper-slide3-prev",
  slideActiveClass: "swiper-slide3-active",
});
var swiper6 = new Swiper(".partners1", {
  slidesPerView: 3,
  centeredSlides: false,
  slideNextClass: "swiper-slide3-next",
  slidePrevClass: "swiper-slide3-prev",
  slideActiveClass: "swiper-slide3-active",
});
var swiper6 = new Swiper(".partners2", {
  slidesPerView: 2,
  centeredSlides: false,
  slideNextClass: "swiper-slide3-next",
  slidePrevClass: "swiper-slide3-prev",
  slideActiveClass: "swiper-slide3-active",
});
var swiper6 = new Swiper(".partners3", {
  slidesPerView: 2,
  centeredSlides: false,
  slideNextClass: "swiper-slide3-next",
  slidePrevClass: "swiper-slide3-prev",
  slideActiveClass: "swiper-slide3-active",
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

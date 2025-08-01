const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function hoverAnimation() {
  const elemC = document.querySelector(".elem-container");
  var fixed = document.querySelector(".fixed-image");

  elemC.addEventListener("mouseenter", () => {
    fixed.style.display = "block";
  });
  elemC.addEventListener("mouseleave", () => {
    fixed.style.display = "none";
  });

  var eachElem = document.querySelectorAll(".elem").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      var image = element.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

hoverAnimation();

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
  });
}
swiperAnimation();

function menuAnimation() {
  var menu = document.querySelector("nav #menu");
  var full = document.querySelector(".full-scr");
  var navImg = document.querySelector("nav img");
  var flag = 0;
  menu.addEventListener("click", (e) => {
    e.preventDefault();
    if (flag == 0) {
      full.style.top = 0;
      navImg.style.opacity = 0;
      flag = 1;
    } else {
      console.log("hii");
      full.style.top = "-100%";
      navImg.style.opacity = 1;
      flag = 0;
    }
  });
}

menuAnimation();

function loaderAnim() {
  var loader = document.querySelector(".loader");
setTimeout(() => {
  loader.style.top = "-100%";
},4200)
}

loaderAnim();
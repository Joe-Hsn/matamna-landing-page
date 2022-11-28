// hero-swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 400,
  autoplay: true,
  // Navigation arrows
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// reviews-swiper
const swiper2 = new Swiper(".reviews-slider", {
  // Optional parameters
  direction: "horizontal",
  spaceBetween: 20,
  loop: true,
  speed: 400,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// AOS
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
});
// to top button
const toTop = document.querySelector("#totop");
toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

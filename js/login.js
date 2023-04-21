const body = document.querySelector("body");
const modal = document.querySelector(".modal-login");
const modalButton = document.querySelector(".modal-button");
const closeButton = document.querySelector(".close-button");
const scrollDown = document.querySelector(".scroll-down");
let isOpened = false;

function openModal(){
  modal.classList.add("is-open");
  body.style.overflow = "hidden";
  isOpened = true;
};

function closeModal() {
  modal.classList.remove("is-open");
  body.style.overflow = "initial";
  window.scrollTo({
    top: 0,
  });
  isOpened = false;
};

modalButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

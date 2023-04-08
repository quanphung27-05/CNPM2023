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


import "animate.css";

const span = document.getElementById("nav-icon3");
const header = document.getElementById("header");
const items = document.querySelectorAll(".item");
const qr = document.querySelector(".qr");
span.addEventListener("click", () => {
  span.classList.toggle("open");
  header.classList.toggle("max-h-[70]");
  header.classList.toggle("max-h-screen");
  items.forEach((item) => {
    item.classList.toggle("animate__animated");
    item.classList.toggle("animate__flipInX");
    qr.classList.toggle("animate__animated");
    qr.classList.toggle("animate__fadeInDown");
  });
  // header.classList.toggle("items-center");
});

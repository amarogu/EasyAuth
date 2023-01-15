import "animate.css";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

new Splide(".splide", {
  perPage: 3,
  mediaQuery: "min",
  breakpoints: {
    640: {
      perPage: 3,
    },
    768: {
      perPage: 4,
    },
    1280: {
      perPage: 8,
    },
  },
  arrows: false,
  pagination: false,
  type: "loop",
  drag: true,
}).mount({ AutoScroll });
const span = document.getElementById("nav-icon3");
const header = document.getElementById("header");
const items = document.querySelectorAll(".item");
const qr = document.querySelector(".qr");
const body = document.querySelector("body");

span.addEventListener("click", () => {
  span.classList.toggle("open");
  header.classList.toggle("max-h-[70]");
  header.classList.toggle("max-h-screen");
  items.forEach((item) => {
    item.classList.toggle("animate__animated");
    item.classList.toggle("animate__flipInX");
    // qr.classList.toggle("animate__animated");
    // qr.classList.toggle("animate__heartBeat");
  });
  // make the body toggle the class bodyhidden
  body.classList.toggle("bodyhidden");
  // header.classList.toggle("items-center");
});

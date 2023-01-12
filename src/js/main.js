const span = document.getElementById("nav-icon3");
const header = document.getElementById("header");
span.addEventListener("click", () => {
  span.classList.toggle("open");
  header.classList.toggle("max-h-[70]");
  header.classList.toggle("max-h-screen");
  // header.classList.toggle("items-center");
});

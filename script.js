const searchiconEl = document.getElementById("search_icon");
const ContinerEl = document.querySelector(".container");

searchiconEl.addEventListener("click", () => {
  ContinerEl.classList.toggle("active");
});

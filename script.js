"use strict";

let guidelines = document.querySelector(".guidelines");
let overlay = document.querySelector(".overlay");

document
  .querySelector(".show-guidelines")
  .addEventListener("click", function () {
    guidelines.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

document
  .querySelector(".close-guidelines")
  .addEventListener("click", function () {
    guidelines.classList.add("hidden");
    overlay.classList.add("hidden");
  });

overlay.addEventListener("click", function () {
  guidelines.classList.add("hidden");
  overlay.classList.add("hidden");
});

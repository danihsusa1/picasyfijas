"use strict";

let randomNumber = function () {
  let d1 = 0;
  let d2 = 0;
  let d3 = 0;
  let d4 = 0;

  while (
    !(d1 != d2 && d1 != d3 && d1 != d4 && d2 != d3 && d2 != d4 && d3 != d4)
  ) {
    d1 = String(Math.trunc(Math.random() * 10));
    d2 = String(Math.trunc(Math.random() * 10));
    d3 = String(Math.trunc(Math.random() * 10));
    d4 = String(Math.trunc(Math.random() * 10));
  }
  return d1 + d2 + d3 + d4;
};

let secretNumber = randomNumber();
let attempts = 0;
let picas;
let fijas;

const ul = document.querySelector("ul");

//document.querySelector(".secretNumber").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  picas = 0;
  fijas = 0;
  const guess = document.querySelector(".guess").value;

  if (guess == secretNumber) {
    fijas = 4;
    document.querySelector(".secretNumber").textContent = secretNumber;
    document.querySelector(".secretNumber").style.backgroundColor = "#4caf50";
    document.querySelector(".secretNumber").style.color = "#e6e1d5";
    document.querySelector(".secretNumber").style.borderColor = "#e6e1d5";
    document.querySelector(".winnerMessage").textContent = "🎉🎉🎯🥳🥳🎊🎉🎉";
  } else {
    for (let i = 0; i < 4; i++) {
      if (secretNumber[i] == guess[i]) {
        fijas++;
      }
    }
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (guess[i] == secretNumber[j]) {
          picas++;
        }
      }
    }
  }
  attempts += 1;
  document.querySelector(".attempts").textContent = attempts;
  document.querySelector(".fijas").textContent = fijas;
  if (picas > 0) {
    picas = picas - fijas;
  }
  document.querySelector(".picas").textContent = picas;

  let text = `${guess}: ${picas} picas | ${fijas} fijas`;
  const li = document.createElement("li");
  li.innerHTML = text;
  ul.appendChild(li);
});

document.querySelector(".new-game").addEventListener("click", function () {
  secretNumber = randomNumber();
  attempts = 0;
  document.querySelector(".attempts").textContent = attempts;
  picas = 0;
  fijas = 0;
  document.querySelector(".fijas").textContent = fijas;
  document.querySelector(".picas").textContent = picas;
  ul.innerHTML = "";
  document.querySelector(".guess").value = "";
});

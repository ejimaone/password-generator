const passLength = document.querySelector(".rana");
const button = document.querySelector(".generate-pass");
const slider = document.querySelectorAll(".slider");
const securePas = document.querySelector("#outcome");
const apple = "apple";
const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const alpha = "ABCDEFGHIJKLMNOPQRSTUVQXYZ";
let outcome;
const empty = [];
const password = [];
const randomIndex = function (length) {
  return Math.floor(Math.random() * length);
};
let sliderUpper = false;
let sliderLower = false;
let sliderNum = false;
let sliderSym = false;

slider.forEach(function (slide) {
  slide.addEventListener("click", function (e) {
    if (e.target.classList.contains("upper")) {
      if (sliderUpper) {
        sliderUpper = false;
      } else {
        sliderUpper = true;
      }
    }
    if (e.target.classList.contains("lower")) {
      if (sliderLower) {
        sliderLower = false;
      } else {
        sliderLower = true;
      }
    }
    if (e.target.classList.contains("num")) {
      if (sliderNum) {
        sliderNum = false;
      } else sliderNum = true;
    }
    if (e.target.classList.contains("sym")) {
      if (sliderSym) {
        sliderSym = false;
      } else sliderSym = true;
    }
  });
});

button.addEventListener("click", function () {
  if (Number(passLength.value) < 5 || Number(passLength.value) > 20) return;
  if (passLength.value >= 5 || passLength.value <= 20) {
    // console.log(sliderUpper);
    // console.log(sliderLower);
    // console.log(sliderNum);
    // console.log(sliderSym);
    if (sliderUpper) empty.push(characters.slice(0, 26));
    if (sliderLower) empty.push(characters.slice(26, 52));
    if (sliderNum) empty.push(characters.slice(52, 62));
    if (sliderSym) empty.push(characters.slice(62));

    outcome = empty.flat();
    if (sliderUpper || sliderLower || sliderNum || sliderSym) {
      for (let i = 0; i < passLength.value; i++) {
        password.push(outcome[randomIndex(outcome.length)]);
      }
      let passcode = password.join("");
      securePas.style.backgroundColor = "green";
      securePas.value = passcode;
      button.textContent = "RESET OPTIONS";

      if (button.textContent === "RESET OPTIONS") {
        button.addEventListener("click", (reset) => {
          button.textContent = "GENERATE PASSWORD";
          securePas.value = "";
          location.reload();
        });
      }
    }
  }
});

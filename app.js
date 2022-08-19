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
let outcome;
const empty = [];
let password = [];
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
        empty.forEach(function (emt) {
          emt.find(function (letter) {
            if (letter === "A") {
              const index = empty.indexOf(emt);
              empty.splice(index, 1);
            }
          });
        });
        sliderUpper = false;
      } else {
        sliderUpper = true;
        empty.push(characters.slice(0, 26));
      }
    }
    if (e.target.classList.contains("lower")) {
      if (sliderLower) {
        empty.forEach(function (emt) {
          emt.find(function (letter) {
            if (letter === "a") {
              const index = empty.indexOf(emt);
              empty.splice(index, 1);
            }
          });
        });
        sliderLower = false;
      } else {
        sliderLower = true;
        empty.push(characters.slice(26, 52));
      }
    }
    if (e.target.classList.contains("num")) {
      if (sliderNum) {
        empty.forEach(function (emt) {
          emt.find(function (letter) {
            if (letter === "5") {
              const index = empty.indexOf(emt);
              empty.splice(index, 1);
            }
          });
        });
        sliderNum = false;
      } else {
        sliderNum = true;
        empty.push(characters.slice(52, 62));
      }
    }
    if (e.target.classList.contains("sym")) {
      if (sliderSym) {
        empty.forEach(function (emt) {
          emt.find(function (letter) {
            if (letter === "]") {
              const index = empty.indexOf(emt);
              empty.splice(index, 1);

              // console.log(empty.indexOf(emt));
            }
          });
        });
        sliderSym = false;
      } else {
        sliderSym = true;
        empty.push(characters.slice(62));
      }
    }
  });
});

button.addEventListener("click", function () {
  if (Number(passLength.value) < 5 || Number(passLength.value) > 20) {
    securePas.value = "Select Length or option";
    securePas.style.color = "red";
  }
  if (passLength.value >= 5 || passLength.value <= 20) {
    securePas.value = "Select Length or option";
    securePas.style.color = "red";

    outcome = empty.flat();
    if (
      (sliderUpper || sliderLower || sliderNum || sliderSym) &&
      passLength.value
    ) {
      for (let i = 0; i < passLength.value; i++) {
        password.push(outcome[randomIndex(outcome.length)]);
      }
      let passcode = password.join("");
      securePas.style.backgroundColor = "green";
      securePas.value = passcode;
      password = [];
    }
  }
});

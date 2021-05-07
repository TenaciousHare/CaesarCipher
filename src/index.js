import caesar13 from "./caesar13.js";

const form = document.querySelector("#translate form");
const input = form.querySelector("input");
const closeBtn = document.querySelector(".effect .closeBtn");

const resultBox = document.querySelector(".effect");
let result = document.querySelector("p.text");

const showText = (e) => {
  e.preventDefault();
  let text = "";
  if (input.value) {
    text = caesar13(input.value);

    result.textContent = text;
  } else {
    result.textContent = `You should enter something,
     if you want a encryption...`;
  }
  resultBox.classList.add("active");
};

const hideText = (e) => {
  e.preventDefault();
  result.textContent = "";
  input.value = "";
  resultBox.classList.remove("active");
};
form.addEventListener("submit", showText);
closeBtn.addEventListener("click", hideText);

import caesar13 from "./caesar13.js";

const form = document.querySelector("#translate form");
const input = form.querySelector("input");
const closeBtn = document.querySelector(".effect .closeBtn");

const resultBox = document.querySelector(".effect");
const result = document.querySelector("p.text");

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

function verify(inputV, goal) {
  if (inputV === goal) {
    console.log("Gratulacje!");
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${inputV}`);
  }
}
console.log("TESTY!");

verify(caesar13("Przeprogramowani"), "Cemrcebtenzbjnav");
verify(caesar13("Bok@123.com"), "Obx@123.pbz");
// console.log(caesar13(false));
// console.log(caesar13(""));

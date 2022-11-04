const result = document.querySelector(".result");
result.innerHTML = "";

const one = document.querySelector(".one");
one.addEventListener("click", () => (result.innerHTML += "1"));
const two = document.querySelector(".two");
two.addEventListener("click", () => (result.innerHTML += "2"));
const three = document.querySelector(".three");
three.addEventListener("click", () => (result.innerHTML += "3"));
const four = document.querySelector(".four");
four.addEventListener("click", () => (result.innerHTML += "4"));
const five = document.querySelector(".five");
five.addEventListener("click", () => (result.innerHTML += "5"));
const six = document.querySelector(".six");
six.addEventListener("click", () => (result.innerHTML += "6"));
const seven = document.querySelector(".seven");
seven.addEventListener("click", () => (result.innerHTML += "7"));
const eight = document.querySelector(".eight");
eight.addEventListener("click", () => (result.innerHTML += "8"));
const nine = document.querySelector(".nine");
nine.addEventListener("click", () => (result.innerHTML += "9"));
const zero = document.querySelector(".zero");
zero.addEventListener("click", () => (result.innerHTML += "0"));
const dot = document.querySelector(".dot");
dot.addEventListener("click", () => (result.innerHTML += "."));

const root = document.querySelector(".root");
root.addEventListener(
  "click",
  () => (result.innerHTML = Math.sqrt(parseInt(result.innerHTML)))
);
const pi = document.querySelector(".pi");
pi.addEventListener("click", () => (result.innerHTML += "3.1415926535897"));
const power = document.querySelector(".power");
power.addEventListener("click", () => (result.innerHTML += "^"));
const factorial = document.querySelector(".factorial");
const countFactorial = () => {
  let num = parseInt(result.innerHTML);
  let res = 1;
  for (i = 0; i < num; i = i + 1) {
    res *= num - [i];
  }
  result.innerHTML = res;
};
factorial.addEventListener("click", countFactorial);

const division = document.querySelector(".division");
division.addEventListener("click", () => (result.innerHTML += "/"));
const multiplication = document.querySelector(".multiplication");
multiplication.addEventListener("click", () => (result.innerHTML += "*"));
const subtraction = document.querySelector(".subtraction");
subtraction.addEventListener("click", () => (result.innerHTML += "-"));
const addition = document.querySelector(".addition");
addition.addEventListener("click", () => (result.innerHTML += "+"));

const del = document.querySelector(".del");
del.addEventListener(
  "click",
  () => (result.innerHTML = result.innerHTML.slice(0, -1))
);
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => (result.innerHTML = ""));

const equal = document.querySelector(".equal");
const countResult = () => {
  if (result.innerHTML.includes("^") === true) {
    let base = result.innerHTML.slice(0, result.innerHTML.indexOf("^"));
    let exponent = result.innerHTML.slice(
      result.innerHTML.indexOf("^") + 1,
      result.innerHTML.length
    );
    let res = Math.pow(parseInt(base), parseInt(exponent));
    result.innerHTML = res;
  }
  if (result.innerHTML.includes("^") !== true) {
    result.innerHTML = eval(result.innerHTML);
  }
};
equal.addEventListener("click", countResult);

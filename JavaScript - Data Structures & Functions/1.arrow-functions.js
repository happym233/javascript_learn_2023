//----------------------------- Example 1 -----------------------------

//------------------------------------Function Declaration
// function randomNumber() {
//   return Math.floor(Math.random() * 10);
// }

// let ranNum = randomNumber();
// console.log(ranNum);

//------------------------------------Arrow Function

// Longer
// let randomNumber = () => {
//   return Math.floor(Math.random() * 10);
// };

// Shorter
// let otherRandomNumber = () => Math.floor(Math.random() * 10);

// let ranNum = otherRandomNumber();
// console.log(ranNum);

//----------------------------- Example 2 -----------------------------

//------------------------------------Function Declaration
// function isPositive(num) {
//   return num >= 0;
// }

// let isPositiveResult = isPositive(5);
// console.log(isPositiveResult);

//------------------------------------Arrow Function

// Longer
// let isPositive = (num) => {
//   return num >= 0;
// };

// Shorter

// let isPositive = (num) => num >= 0;

// let isPositiveResult = isPositive(5);
// console.log(isPositiveResult);

//----------------------------- Example 3 -----------------------------

//------------------------------------Function Declaration
// function multiply(x, y) {
//   return x * y;
// }

// let multiplyResult = multiply(5, 15);
// console.log(multiplyResult);

//------------------------------------Arrow Function

// let otherMultiply = (a, b) => a * b;

// console.log(otherMultiply(10, 20));

//----------------------------- Example 4 -----------------------------
const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   document.body.style.backgroundColor = "green";
// });

btn.addEventListener(
  "click",
  () => (document.body.style.backgroundColor = "green")
);

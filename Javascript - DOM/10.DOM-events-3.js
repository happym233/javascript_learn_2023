// *-*-*-*-*-*---The key events---*-*-*-*-*-*
// (1) keydown
const textInput = document.querySelector('input[type="text"]');
// textInput.addEventListener("keydown", function () {
//   console.log("keydown");
// });

// (2) keyup
// textInput.addEventListener("keyup", function () {
//   console.log("keyup");
// });

// (3) keypress
// textInput.addEventListener("keypress", function () {
//   console.log("keypress");
// });

// *-*-*-*-*-*---The event Object---*-*-*-*-*-*
textInput.addEventListener("click", function (e) {
  console.log(e);
  console.log(e.target);
  console.log(e.clientX);
  console.log(e.clientY);
});

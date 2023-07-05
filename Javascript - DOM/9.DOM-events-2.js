// *-*-*-*-*-*---The dblclick Event---*-*-*-*-*-*
const changeBtn = document.querySelector(".change-bg");
const resetBtn = document.querySelector(".reset-bg");

// changeBtn.addEventListener("dblclick", function () {
//   document.body.style.backgroundColor = "#8fc0a9";
//   console.log("The Change BG button has been dblclicked");
// });

// resetBtn.addEventListener("dblclick", function () {
//   document.body.style.backgroundColor = "#fff";
//   console.log("The Reset BG button has been dblclicked");
// });

// *-*-*-*-*-*---The mouseover Event---*-*-*-*-*-*
// changeBtn.addEventListener("mouseover", function () {
//   document.body.style.backgroundColor = "#8fc0a9";
//   console.log("The Change BG button has been moused over");
// });

// *-*-*-*-*-*---The mouseout Event---*-*-*-*-*-*
// resetBtn.addEventListener("mouseout", function () {
//   document.body.style.backgroundColor = "#fff";
//   console.log("The Change BG button has been moused out");
// });

// *-*-*-*-*-*---The scroll Event---*-*-*-*-*-*
window.addEventListener("scroll", function () {
  document.body.style.lineHeight = "2.1";
  document.body.style.backgroundColor = "blue";
  document.body.style.color = "white";
});

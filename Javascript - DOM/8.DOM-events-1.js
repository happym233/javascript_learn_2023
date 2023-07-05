// Introduction to DOM Events
/* 
1- user clicks
2- user hovers
3- user scrolls
4- fills out a form
5- user double clicks
6- user mouses over an element
7- user drags and drops
8- user presses key
and so many more
*/

// *-*-*-*-*-*---The click Event---*-*-*-*-*-*
const changeBtn = document.querySelector(".change-bg");
changeBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "#8fc0a9";
  console.log("The Change Bg button has been clicked");
});

const resetBtn = document.querySelector(".reset-bg");
resetBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "#fff";
  console.log("The Reset Bg button has been clicked");
});

// DOM => Document Object Model => link the JS object to the HTML Doc

// ----------------------------------------------------------
//*****Selecting Methods => Getting HTML Elements by Their Class
// const heading = document.getElementsByClassName("title");
// console.log(heading);

// ----------------------------------------------------------
//*****Selecting Methods => Getting HTML Elements by Their ID
// let dogImg = document.getElementById("dog-img");
// console.log(dogImg);

// ----------------------------------------------------------
//*****Selecting Methods => querySelectorAll => It selects all elements that share that selector
// let dogTraits = document.querySelectorAll(".item");
// console.log(dogTraits);

// ----------------------------------------------------------
//*****Selecting Methods => querySelector => It selects only one element that has the selector
let dogImg = document.querySelector("#dog-img");
console.log(dogImg);

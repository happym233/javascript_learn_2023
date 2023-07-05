//*****Method #4 & #5 => createElement & appendChild

// (1) the element is created
let newItem = document.createElement("li");
// console.dir(newItem);
console.log(newItem);

// (2) the element is given content/texts
newItem.innerText = "Cute";

// (3) we need a parent to adopt this element
const list = document.querySelector("ul");
list.appendChild(newItem);

//*****Method #6 => insertBefore

// (1)
const firstItem = document.querySelector("ul li:first-child");
// console.log(firstItem);

// (2)
let newItem2 = document.createElement("li");
console.log(newItem2);
newItem2.innerText = "Protective";

// (3)
list.insertBefore(newItem2, firstItem);

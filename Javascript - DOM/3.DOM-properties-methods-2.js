//*****Property #4 => Traversing the DOM Properties
/*
1- parentElement
2- children
3- previousElementSibling
4- nextElementSibling
 */

// (1) parentElement
// const para = document.querySelector("p");
// console.log(para.parentElement);

// (2) children
// const body1 = document.body;
// console.log(body1.children);
// console.log(body1.children[0]);
// console.log(body1.children[3]);

// (3) previousElementSibling - (4) nextElementSibling
// const item = document.querySelector("ul li:nth-child(2)");
// console.log(item);
// console.log(item.previousElementSibling);
// console.log(item.nextElementSibling);

//*****Property #5 => style
const image = document.querySelector("img");
// const para = document.querySelector("p");
// console.log(image);
// console.log(para);

// image.style.width = "700px";
// para.style.backgroundColor = "thistle";
// para.style.padding = "20px";
// para.style.color = "blue";
// para.style.lineHeight = "1.8";
// para.style.fontSize = "20px";

//*****Property #6 => classList
// para.classList.add("for-fun");

//*****Method #3 => getComputedStyle
const imageProps = getComputedStyle(image);
// console.log(imageProps);
image.style.width = "800px";
image.style.height = "600px";
console.log(imageProps.height);

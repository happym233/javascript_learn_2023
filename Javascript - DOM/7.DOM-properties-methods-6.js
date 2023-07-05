//*****Method #7 => append

// (1)
const newH5 = document.createElement("h5");
const newH6 = document.createElement("h6");

console.log(newH5);
console.log(newH6);

// (2)
newH5.innerText = "Cats";
newH6.innerText = "Birds";

// (3)
const mainHeading = document.querySelector("h1");
mainHeading.append(newH5, newH6);

//*****Method #8 => prepend
mainHeading.prepend(newH5, newH6);

//*****Method #9 => removeChild => it requires a parent node
// const toDoList = document.querySelector("ol");
const toDoItem = document.querySelector("ol li:nth-child(3)");
// toDoList.removeChild(toDoItem);

//*****Method #10 => remove => it does not require a parent node
toDoItem.remove();

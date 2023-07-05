let names = ["John", "Sandy", "Mark", "Sandra"];
let nums = [1, 5, 5, 9, 11, 8, 212, 313, 115, 1245];

console.log(names.sort());
console.log(nums.sort());

// let sortFunc = nums.sort(function (a, b) {
//   return a - b;
// });

/*
if result > 0 -> b
if result = 0 -> unchanged
if result < 0 -> a
*/

// console.log(sortFunc); // small to big

let sortFunc = nums.sort(function (a, b) {
  return b - a;
});

/*
if result > 0 -> a
if result = 0 -> unchanged
if result < 0 -> b
*/

console.log(sortFunc); // big to small

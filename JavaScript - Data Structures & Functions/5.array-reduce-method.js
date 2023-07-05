const nums = [1, 2, 3, 4, 5];

const total = nums.reduce(sum, 0);

function sum(accumulator, value) {
  return accumulator + value;
}

console.log(total);

//while loop
// array -methods
// sort
let nums = [1, 2, 1, 2, 3, 5, 1, -51, -25, 12, 31, 56, 124, 1];
let myFunction = (a, b) => {
  return b - a;
};
nums.sort(myFunction);
nums[nums.length] = 100;
console.log(nums);

const fruits = [
  "banana",
  "orange",
  "strawberry",
  "Apple",
  "pine-apple",
  "mango",
];
fruits.sort((a, b) => {
  if (a < b) {
    return -1;
  } else {
    return 1;
  }
});
console.log(fruits);

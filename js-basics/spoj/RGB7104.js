// RGB7104 - 4 тооны бага
// Өгөгдсөн 4 тооны багыг ол.

// Input
// Нэг мөрөнд Int төрлийн 4 тоо зайгаар тусгаарлагдан өгөгдөнө.

// Output
// Бага тоо.

// Example
// Input:
// 3 2 1  4
// Output:
// 1

function math(a, b, c, d) {
  if ((a < b, a < b, a < c)) {
    console.log(a);
  } else if ((b < a, b < c, b < d)) {
    console.log(b);
  } else if ((c < a, c < b, c < d)) {
    console.log(c);
  } else if ((d < a, d < b, d < c)) {
    console.log(d);
  }
}
math(3, 2, 1, 4);

function math1(a1, b1) {
  if (a1 > b1) {
    return a1;
  } else if (a1 < b1) {
    return b1;
  }
}
let dayI = math1(29, 21);
console.log(dayI);

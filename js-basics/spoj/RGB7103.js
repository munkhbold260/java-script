// RGB7103 - 3 тооны их
// Өгөгдсөн 3 тооны ихийг ол.

// Input
// Нэг мөрөнд Int төрлийн 3 тоо зайгаар тусгаарлагдан өгөгдөнө.

// Output
// Их тоо.

// Example
// Input:
// 4 3 2
// Output:
// 3

function math(a, b, c) {
  if (a < b  c) {
    console.log(a);
  } else if (a > b < c) {
    console.log(a);
  } else if (a < b > c) {
    console.log(b);
  } else if (a > c < b) {
    console.log(b);
  } else if (a < b < c) {
    console.log(c);
  } else if (a > b < c) {
    console.log(c);
  }
}
math(2, 4, 3);

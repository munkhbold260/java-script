// RGB7008 - Аравтын орны цифр
// Өгөгдсөн тооны аравтын орны цифрийг ол.

// Input
// Int төрлийн бүхэл тоо өгөгдөнө.

// Output
// Аравтын орны цифр.

// Example
// Input:
// 423
// Output:
// 2

function funct(x) {
  return ((x % 100) - (x % 10)) / 10;
}
let lastNumber = funct(1234569);
console.log(lastNumber);

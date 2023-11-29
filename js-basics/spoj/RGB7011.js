// RGB7011 - Минут секунд
// Өгөгдсөн секундыг минут секунд болго.

// Input
// Секунд Int тоон утгаар өгөгдөнө.

// Output
// Минут секундыг зайгаар тусгаарлан хэвлэ.

// Example
// Input:
// 200

// Output:
// 3 20

function time(num) {
  x = num % 60;
  y = (num - x) / 60;
  console.log("time", y, "m", x, "s");
}
time(310);

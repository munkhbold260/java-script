// Neg too ogogdonguut tuhain toonoos dooshoogoo gurav guravaar uruudaad 0 hurtel hevleh function bich
// Jishee n 10 gesen too ogogdonguut output: 10 7 4 1 baina
// Hoyor too ogogdohod baga toonoos n ih too hurtel heveldeg funct bich.
// Jishee n:
// input 15 9
// output: 9 10 11 12 13 14 15
// 3n too ogogdohod ehnii toonoos 2 dahi too hurtel 3 dahi toogoor ihsesen element tei
// array zohioj butsaah function bich
// Jishee n:
// input: 10 20 2
// output: [10,12,14,16,18,20]

function math(n) {
  for (let i = n; i >= 0; i = i - 3) {
    console.log(i);
  }
}
math(10);

function math2(a, b) {
  if (a > b) {
    for (let i = a; i < b; i = i + 1) {}
    console.log(i);
  }
}

math2(15, 10);

function math(n) {
  for (let i = 0; i < n; i = i + 1) {
    console.log(i);
  }
}
math(10);

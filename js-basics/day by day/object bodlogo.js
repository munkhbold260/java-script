// let display = [
//   { brand: "LG", inch: "23", price: 200000, year: "2022" },
//   { brand: "sony", inch: "31", price: 300000, year: "2021" },
//   { brand: "sony", inch: "31", price: 300000, year: "2021" },
//   { brand: "sony", inch: "31", price: 300000, year: "2021" },
//   { brand: "sony", inch: "31", price: "300000", year: "2021" },
//   { brand: "sony", inch: "31", price: "300000", year: "2021" },
//   { brand: "sony", inch: "31", price: "300000", year: "2021" },
//   { brand: "sony", inch: "31", price: "300000", year: "2021" },
// ]
// display[0].price = display[0].price * 0.9;
// console.log(display);

let products = [
  {
    name: "iphone12",
    price: "2000000",
    category: "phone",
    brand: "apple",
    stock: "11",
  },
  {
    name: "bmw-x7",
    price: "31000000",
    category: "car",
    brand: "bmw",
    stock: "2",
  },
  {
    name: "imac",
    price: "4100000",
    category: "computer",
    brand: "apple",
    stock: "3",
  },
  {
    name: "dell",
    price: "2000000",
    category: "laptop",
    brand: "dell",
    stock: "4",
  },
  {
    name: "washer1",
    price: "2000000",
    category: "washing",
    brand: "samsung",
    stock: "5",
  },
  {
    name: "blue esse",
    price: "4000",
    category: "cigar",
    brand: "esse",
    stock: "6",
  },
  {
    name: "ecos",
    price: "3100",
    category: "food",
    brand: "monos",
    stock: "7",
  },
  {
    name: "alpengold",
    price: "5000",
    category: "food",
    brand: "alpen",
    stock: "8",
  },
  {
    name: "govi sun",
    price: "50000",
    category: "cloth",
    brand: "govi",
    stock: "9",
  },
  {
    name: "tcl-98",
    price: "6000000",
    category: "display",
    brand: "tcl",
    stock: "10",
  },
];

function setSale(saleAmount) {
  for (let i = 0; i < 10; i = i + 1) {
    products[i].price = products[i].price * (1 - saleAmount / 100);
  }
}
setSale(20);
console.log(products);

for (let i = 0; i < 10; i = i + 1) {
  if (products[i].category == "food") {
    console.log(products[i]);
  }
}
function findByCategory(cate) {
  for (let i = 0; i < 10; i = i + 1) {
    if (products[i].category == cate) {
      console.log(products[i].name);
    }
  }
}
findByCategory("car");

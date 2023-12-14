const shoppingCartItems = [
  { name: "Laptop", price: 1200, quantity: 1, category: "Electronics" },
  { name: "Backpack", price: 80, quantity: 2, category: "Fashion" },
  { name: "Smartphone", price: 800, quantity: 1, category: "Electronics" },
  { name: "Shoes", price: 50, quantity: 1, category: "Fashion" },
  { name: "Book", price: 15, quantity: 3, category: "Books" },
  { name: "Headphones", price: 100, quantity: 1, category: "Electronics" },
  { name: "T-shirt", price: 20, quantity: 5, category: "Fashion" },
  { name: "Tablet", price: 300, quantity: 2, category: "Electronics" },
  { name: "Jeans", price: 60, quantity: 2, category: "Fashion" },
  { name: "Notebook", price: 10, quantity: 4, category: "Books" },
  { name: "Camera", price: 500, quantity: 1, category: "Electronics" },
  { name: "Dress", price: 70, quantity: 1, category: "Fashion" },
  {
    name: "External Hard Drive",
    price: 80,
    quantity: 1,
    category: "Electronics",
  },
  { name: "Sweater", price: 40, quantity: 3, category: "Fashion" },
  { name: "Fitness Tracker", price: 60, quantity: 1, category: "Electronics" },
  { name: "Sunglasses", price: 25, quantity: 2, category: "Fashion" },
  { name: "Cookbook", price: 18, quantity: 2, category: "Books" },
  { name: "Gaming Console", price: 300, quantity: 1, category: "Electronics" },
  { name: "Running Shoes", price: 55, quantity: 1, category: "Fashion" },
  { name: "Desk Chair", price: 120, quantity: 1, category: "Furniture" },
];

///////////////////////// task write a function calculateCategoryCosts return a object of {category: category, totalcost:???}
let totalCost = shoppingCartItems.map((a) => {
  return { name: a.name, totalCost: a.price * a.quantity };
});
console.log("category, totalcost:", totalCost);

///////////////////////////                calculate discount price by 10% {name, price, quantity, totalCost}
let discountPrice = shoppingCartItems.map((a) => {
  return {
    name: a.name,
    discountedPrice: a.price * 0.9,
    quantity: a.quantity,
    totalCost: a.price * 0.9 * a.quantity,
  };
});
console.log(" discountedPrice", discountPrice);
////////////////////////////////// 2s deesh quantytai productaa garga

let qwerty3 = discountPrice.filter((a) => {
  return a.quantity > 2;
});
console.log("discounted price and 2<quantity", qwerty3);
//////////////////////////////total cost average
let avgPrice = 0;
let priceAllAvg = shoppingCartItems.map((a) => {
  avgPrice = avgPrice + a.price / shoppingCartItems.length;
});
console.log("all avg price", avgPrice);
/////////////////////////
let avgPriceAbove = discountPrice.filter((a) => {
  return a.totalCost > avgPrice;
});
console.log(avgPriceAbove);

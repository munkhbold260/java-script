const products = [
  { id: 1, name: "mac", price: 12, stock: 10 },
  { id: 2, name: "iphone", price: 22, stock: 10 },
  { id: 3, name: "tv", price: 32, stock: 10 },
  { id: 4, name: "kkk", price: 42, stock: 10 },
];

// removeProd()2;    // 2-r id-g ustga
// sellProd("iphone", 2); // zaraghaar stock n hasagdna
// // if 2-r id-g ustgahad doodhuud deeshee shiljeed id n bagasna

function qwe(ss) {
  let removeProd = products.filter(function (a) {
    return a.name !== "mac";
  });
  console.log(removeProd);
}

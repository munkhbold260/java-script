// // let city = [
// //   "ulaanbaatar",
// //   "erdenet",
// //   "tsetserleg",
// //   "uliastai,",
// //   "bulgan",
// //   "arvaikheer",
// //   "chingis",
// //   "dalanzadgad",
// // ];
// // console.log(
// //   city[0],
// //   city[1],
// //   city[2],
// //   city[3],
// //   city[4],
// //   city[5],
// //   city[6],
// //   city[7]
// // );
// // console.log(city[1]);
// // console.log(city[2]);
// // console.log(city[3]);
// // console.log(city[4]);
// // console.log(city[5]);
// // console.log(city[6]);
// // console.log(city[7]);

// let usa = {
//   a: { aaa: "1111" },
//   b: { bbb: "2222" },
//   c: { ccc: "3333" },
//   d: { ddd: "4444" },
//   e: { eee: "5555" },
// };
// console.log(usa.a);
// console.log(usa.a.aaa);

// salary ni 2 sayaas ih,
// niigmiin daatgaliin shimtgel toldog bh,
// passporttoi eswel identitycardtai bh,
// bas person bh eswel itgemjleheer bh,
// dept ni 1 sayas baga bwal zeel garna.

function loan(salary, insurance, inperson, cred, dept, passport, identityCard) {
  if (
    salary > 10 &&
    insurance > 1 &&
    (inperson || cred) &&
    dept < 1000000 &&
    (passport || identityCard)
  ) {
    console.log("yes");
  } else console.log("no");
}
loan(
  11,
  2,
  (inperson = true),
  (cred = true),
  500,
  (passport = true),
  (identityCard = false)
);

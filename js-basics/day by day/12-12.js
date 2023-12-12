let sentence = `I never make any big decisions.
I'm not making any promises.
We are doing this all without any support from the hospital.
Earlier reports were unable to confirm that there were any survivors.
It is too early to say what effect, if any, there will be on the workforce.
You don't know any of my friends.
There was nothing you could do, nothing any of us could do.
The children needed new school clothes and Kim couldn't afford any.
Do you speak any foreign languages?`;

let alphabets = `abcdefghijklmonpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
let letters = 0;
let lines = 1;
let words = 1;
// for (let i = 0; i < sentence.length; i = i + 1) {
//   //   if (sentence.charAt(i) == "\n") {
//   //     lines++;
//   //   }
//   //   if (sentence.charAt(i) == " " || sentence.charAt(i) == ".") {
//   //     words++;
//   //   }

//   //   if (sentence.charAt(i)) {
//   //     letters++;
//   //   }
//   if (sentence.charAt(i) == alphabets[i]) {
//     letters++;
//   }
// }
for (let i = 0; i < alphabets.length; i++) {
  i = alphabets[i];
  console.log("tom for ajillaj baina uu ", i);
  for (let j = 0; j < sentence.length; j++) {
    if (sentence[j] == i) {
      letters++;
      console.log(
        "jijig for-iin if true ajillaj baina uu ",
        j,
        "letter count : ",
        letters
      );
    }
  }
}
console.log("buh useg too:", letters);

console.log("lines=", lines, "words=", words, "letters=", letters);

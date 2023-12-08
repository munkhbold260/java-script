function isPrime(x) {
  let prime = false;
  if (x == 1) {
    prime = true;
  } else if (x == 2) {
    prime = true;
  } else if (x == 3) {
    prime = true;
  } else if (x % 2 !== 0) {
    for (let i = 2; i < x; i = i + 1) {
      prime = "maybe";
    }
  }
  console.log(prime);
}

isPrime(7);

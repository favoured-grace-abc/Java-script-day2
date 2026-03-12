console.log("Prime numbers between 1 and 30");
for (let i = 1; i <= 30; i++) {
  let isPrime = true;

  for (let d = 2; d < i; d++) {
    if (i % d === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}
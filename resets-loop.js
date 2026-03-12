let total = 0 
for (let i = 1; i <= 50; i++) {
  total += i;

  if (total > 100) {
    console.log("Total exceeded 100, resetting");
    total = 0; 
  } else {
    console.log("Running total:" + total)
  }
}
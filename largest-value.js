let num1 = 40, num2 = 30, num3 = 44, num4 = 85, num5 = 96, num6 = 10;

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 1; i <= 5; i++) {
  let num;
  if (i == 1) num = num1;
  else if (i === 2) num = num2
  else if (i === 3) num = num3
  else if (i === 4) num = num4
  else if (i === 5) num = num5
  else num = num6;

  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num > secondLargest && num !== largest) {
    secondLargest = num
  }
}

console.log("second largest:" + secondLargest)
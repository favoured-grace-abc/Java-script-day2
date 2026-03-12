let num1 = 12, num2 =1, num3 = 12, num4 = 4, num5 = 10, num6 = 6, num7 = 3;

console.log("Number (skipping duplicates):");
for (let i = 1; i <= 7; i++) {
  let num;
  if (i === 1) num = num1;
  else if (i === 2) num = num2;
  else if (i === 3) num = num3;
  else if (i === 4) num = num4;
  else if (i === 5) num = num5;
  else if (i === 6) num = num6;
  else num = num7;

  let isDuplicate = false;

  for (let d = 1; d < i; d++) {
    let prevNum;
    if (d === 1) prevNum = num1;
    else if (d === 2) prevNum = num2;
    else if (d === 3) prevNum = num3;
    else if (d === 3) prevNum = num4;
    else if (d === 3) prevNum = num5;
    else if (d === 3) prevNum = num6;

    if (num === prevNum) {
      isDuplicate = true;
      break;
    }
  }

  if (!isDuplicate) {
    console.log(num)
  }
}
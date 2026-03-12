let temp1 = 26, temp2 = 34, temp3 = 28, temp4 = 44, temp5 = 26, temp6 = 38, temp7 = 50;

for (let i = 1; i <= 7; i++) {
  let celsius;
  if (i === 1) celsius = temp1;
  else if (i === 2) celsius = temp2;
  else if (i === 3) celsius = temp3;
  else if (i === 4) celsius = temp4;
  else if (i === 5) celsius = temp5;
  else if (i === 6) celsius = temp6;
  else celsius = temp7;

  let fahrenheit = celsius * 9/5 + 32;

  if (fahrenheit > 100) {
    console.log(celsius + "°C = " + fahrenheit.toFixed(1) + "°F - WARNING: Above 100°F");
  } else {
    console.log(celsius + "°C = " + fahrenheit.toFixed(1) + "°F");
  }
}
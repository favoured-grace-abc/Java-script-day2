let item1 = "time", item2 = 50, item3 = "find", item4 = 31, item5 = "mutual";

let sumNumbers = 0;
let stringCount = 0;

for (let i = 1; i <= 5; i++) {
  let item;
  if (i === 1) item = item1;
  else if (i === 2) item = item2
  else if (i === 2) item = item3
  else if (i === 2) item = item4
  else item = item5;

  if (typeof item === 'number') {
    sumNumbers += item;
  } else if (typeof item === 'string') {
    stringCount++
  }
}

console.log("sum of numbers:" + sumNumbers);
console.log("count of strings:" + stringCount);
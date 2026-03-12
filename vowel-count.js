let text = "Website designs must be readable and user-friendly okay.";
let countA = 0, countE = 0, countI = 0, countO = 0, countU = 0;

for (let i = 0; i < text.length; i++) {
  let char = text[i].toLowerCase();

  switch(char) {
    case 'a': countA++; break;
    case 'e': countE++; break;
    case 'i': countI++; break;
    case 'o': countO++; break;
    case 'u': countU++; break;
  }
}

console.log("vowel counts:");
console.log("A: " + countA);
console.log("E: " + countE);
console.log("I: " + countI);
console.log("O: " + countO);
console.log("U: " + countU);
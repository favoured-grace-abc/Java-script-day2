let word1 = "moon", word2 = "level", word3 = "amina", word4 = "wow", word5 = "world";

for (let i = 1; i <= 5; i++) {
  let word;
  if (i == 1) word = word1;
  else if (i == 2) word = word2;
  else if (i == 3) word = word3;
  else if (i == 4) word = word4;
  else word = word5;

  let reversed = "";
  for (let d = word.length - 1; d >= 0; d--) {
    reversed += word[d];
  }

  if (reversed !== word) {
    console.log(word + "reversed is: " + reversed);
  } else {
    console.log(word + "is a palindrome (same forward and backward)");
  }
}
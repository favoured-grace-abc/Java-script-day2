// Given a string, loop through each character and build two new strings — one with only vowels and one with only consonants. Print both.

const originalString="Amarachi";
let vowels="";
let consonants="";
const vowelList = "aeiouAEIOU";
for(let i of originalString){
    if(vowelList.includes(i)){
        vowels+=i;
    }
    else{
        consonants+=i;
    }
}
console.log(vowels);
console.log(consonants);


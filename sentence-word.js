let sentence = "Website designs must be readable and user-friendly.";

let word = "";
for (let i = 0; i <= sentence.length; i++) {
    if ( sentence[i] === " ") {
        if (!word.includes("w") && !word.includes("e") && word.length > 0) {
            console.log(word);
        }
        word = "";
    } else {
        word += sentence[i];
    }
}



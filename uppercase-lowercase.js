let names = "Amarachi John Grace Faith Joy Mary Peter James";
let currentName = "";

for (let i = 0; i <= names.length; i++) {
    if (i === names.length || names[i] === " ") {
       
        if (currentName.length > 4) {
            console.log(currentName.toUpperCase());
        } else if (currentName.length < 4) {
            console.log(currentName.toLowerCase());
        } else {
            console.log(currentName[0].toUpperCase() + 
                       currentName.slice(1).toLowerCase());
        }
        currentName = ""; 
    } else {
        currentName += names[i]; 
    }
}

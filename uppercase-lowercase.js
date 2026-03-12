const names =["Amarachi", "John", "Grace", "Faith", "Joy", "Mary", "Peter", "James"];

for(let i of names){
    if(i.length > 4){
        console.log(i.toUpperCase());
    }
    else if(i.length < 4){
        console.log(i.toLowerCase());
    }
    else{
      console.log(i.charAt(0).toUpperCase() + i.slice(1).toLowerCase());
    }
}

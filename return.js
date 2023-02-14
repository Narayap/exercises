
// const result = greeting("Peter");
// const txt = `Greeting is ${greeting("a name")}`;

// function greeting(firstName) {
//     return `Hello ${firstName}`
// }


// console.log(result);

let hexValue = "#87ea34";

function hexToRGB(hexColor) {
    const r = parseInt(hexColor.substring(0, 3), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5, 7), 16);

   // return `${r} ${g} ${b}`;   wrong way
   return {r, g, b};
}

console.log("Color as RGB", hexToRGB("0#f80ea3"));

console.log("Red component", hexToRGB("0#f80ea3").r);




//if you want more than one value return you put it into an object 

function personFactory(firstName, lastName, age, isGinger) {
    return {firstName, lastName, age, isGinger};
}


let newPerson = createPerson("Peter", "Tolstrup", 44, true);

console.log("KEA person's name", newPerson.firstName);



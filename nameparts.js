"use strict";

// Given a name string, e.g. “Peter Heronimous Lind” - split the string into three variables: firstName, middleName and lastName.
// Hint: use indexOf and substring 
// Expect the name to be a const - you can’t modify it.
// Console.log the three variables at the very end of your code.

const name = "Peter Heronimous Lind";


let firstName = name.substring(0, name.indexOf(" "));
let middleName = name.substring(name.indexOf(" ") + 1, name.indexOf(" ", name.indexOf(" ") + 1));
let lastName = name.substring(name.indexOf(" ", name.indexOf(" ")+ 1)+1);

console.log(firstName);
console.log(middleName);
console.log(lastName);
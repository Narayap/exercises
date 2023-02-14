
"use strict";

window.addEventListener("DOMContentLoaded", start);

const allStudents = [];

const Student = {
    fullname: " ",
    gender: " ",
    house: " ",
    
};

function start( ) {
    console.log("ready");

    loadJSON();
}




function loadJSON() {
    fetch("data.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        // prepareObjects( jsonData );
        prepareObjects( jsonData );
    });
    
}


function prepareObjects( jsonData ) {
    jsonData.forEach( jsonObject => {
        const student = Object.create(student);
        // const text = jsonObject.fullname.split(" ");

        student.fullname = jsonObject.fullname;
        student.gender = jsonObject.gender;
        student.house = jsonObject.house;
        

        allStudents.push(student);
        // TODO: Create new object with cleaned data - and store that in the allAnimals array
        
        // TODO: MISSING CODE HERE !!!
    });

    displayList();
}

function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allStudents.forEach( displayStudent );
}

function displayStudent( student ) {
    // create clone
    const clone = document.querySelector("template#student").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=fullname]").textContent = student.fullname;
    clone.querySelector("[data-field=gender]").textContent = student.gender;
    clone.querySelector("[data-field=house]").textContent = student.house;
   

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}
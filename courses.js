"use strict";
//When the window/page is loaded, the function setup will run
window.onload=(event) =>{ 
    setup()
};
//The list is used to keep track of the favorite classes to prevent any duplication
var favoriteclasses=[]
//Creating a function named setup
function setup() {
//Assign variable to collect all inputs/buttons
    var btns = document.querySelectorAll("input")
//Looping through the list of buttons (going to each button)
    btns.forEach(btn=>{
//Adding an event listener to the button
        btn.addEventListener("click",event => {
//When the button is clicked, the class function is triggered
            addClass(event)
        })
    })
}
//Creating a function that passes in the variable, e
function addClass(e) {
// If id is not in favorite classes 
//The exclamation point stands for not 
    if(!(favoriteclasses.includes(e.target.id))){
//Allowing for the addition of id to the favorite classes
        favoriteclasses.push(e.target.id);
//This sets the counter to the total number of classes and displays it when classes are added into the Favorite Classes List
        document.getElementById("FavoriteClassCounter").innerHTML=favoriteclasses.length;
//Adding the HTML of the class to the inside of the favorite classes table by grabbing the id of the elements 
        document.getElementById("FavoriteClassesTable").innerHTML += document.getElementById("Class" + e.target.id).outerHTML;
    }
}

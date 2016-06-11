"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var username;
username = prompt("hiya! what is your name?");

while (username == null || username == "") {
    username = prompt("Please tell me your name, i want to be friends!");   
}



// TODO: Show an alert message that welcomes the user based on their input.
alert("Hello " + username + "!");



// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
var pizza = confirm(username + ", click okay if you like pizza!");
var msg = (pizza)? "all my bestfriends love pizza": "oh... well i guess not everyone can have good taste and a good sense of humor";
alert(msg);
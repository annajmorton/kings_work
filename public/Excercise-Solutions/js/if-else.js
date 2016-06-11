"use strict"

console.log('wake up!!!');

console.log("solution for #3a"); 
// var grade1 = Math.floor((Math.random()*(95-70))+70);
var grade1 = 70;
var grade2 = 80;
var grade3 = 95;

var average = (grade1 + grade2 + grade3)/3;

if (average >= 80) {
	console.log("You are awesome! dj where you gett'n them colors?");
}else{
	console.log("You need to practice more");
}

console.log("solution for #3b");
console.log("whaaa?");

console.log("solution for #3c");
var flipACoin = Math.floor(Math.random()* 2);
var msg = 'Buy a house';
if (flipACoin == 0) {
	msg ='Buy a car';
}
console.log(msg);

// alternate with ternary
var altmsg = (flipACoin==0) ?'Buy a car': 'Buy a house';
console.log(altmsg);
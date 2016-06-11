'use strict';
console.log("solution for #3");
	var luckyNumber = Math.floor(Math.random()* 6);
	var youpay = 60;
	var msg;

	switch(luckyNumber) {
		case 0:
			msg = 1
			break; 
		case 1:
			msg = 0.1
			break; 
		case 2:
			msg = 0.25
			break; 
		case 3:
			msg = 0.35
			break; 
		case 4:
			msg = 0.5
			break; 
		case 5:
			msg = 0
			break; 
	}

	msg = youpay*(1-msg);
	console.log("Here's what you owe: $"+msg);


	console.log("solution for #4");
	var monthnum = Math.floor((Math.random()* 12)+1);
	var msg;

	switch(monthnum) {
		case 1:
			msg = "January"
			break; 
		case 2:
			msg = "February"
			break; 
		case 3:
			msg = "March"
			break; 
		case 4:
			msg = "April"
			break; 
		case 5:
			msg = "May"
			break; 
		case 6:
			msg = "June"
			break; 
		case 7:
			msg = "July"
			break; 
		case 8:
			msg = "August"
			break; 
		case 9:
			msg = "September"
			break; 
		case 10:
			msg = "October"
			break; 
		case 11:
			msg = "November"
			break; 
		case 12:
			msg = "December"
			break; 
	}

	console.log(monthnum+" is the month of "+msg);
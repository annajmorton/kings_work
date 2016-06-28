(function(){
	"use strict";
var leftScreen = document.getElementById("leftScreen");
var centerScreen = document.getElementById("centerScreen");
var rightScreen = document.getElementById("rightScreen");
var input = document.getElementsByClassName("btn");
var operator = document.getElementsByClassName("operate");
var clearScreen = document.getElementById("clear");
var calculate = document.getElementById("solve");
var backSpace = document.getElementById("back");
var operatorSelected;
var addInput = function () {
	var numberSelected = this.getAttribute("data-value");				
		if (centerScreen.value == "") {
			document.getElementById("leftScreen").value += numberSelected;
		} 
		else {
			document.getElementById("rightScreen").value += numberSelected;
		}
}	
var addOperate = function () {
	 operatorSelected = this.getAttribute("data-value");
	centerScreen.value = operatorSelected;
}
// var addDecimal = function() {
// 	if (operatorSelected == "" && leftScreen.value.indexOf(".") == -1) {
// 		leftScreen.value += ".";
// 	} 
// 	if (operatorSelected !== "" && rightScreen.value.indexOf(".") == -1) {
// 		rightScreen.value += ".";
// 	}
// 	if ()
// }
var backOne = function() {
	
	if(centerScreen.value == "" && leftScreen.value !== "") {
		leftScreen.value = leftScreen.value.substring(0, leftScreen.value.length - 1);
	} 
	else if (rightScreen.value !== "" && centerScreen.value !== "") {
		rightScreen.value = rightScreen.value.substring(0, rightScreen.value.length -1);
	}
	else {
		centerScreen.value = "";
	}

}
var solution = function () {
	if (operatorSelected == "+") {
		leftScreen.value = (parseInt(leftScreen.value)) + (parseInt(rightScreen.value));
		centerScreen.value = "";
		rightScreen.value = "";
	} else if (operatorSelected == "-"){
		leftScreen.value = (parseInt(leftScreen.value)) - (parseInt(rightScreen.value));
		centerScreen.value = "";
		rightScreen.value = "";
	} else if (operatorSelected == "x") {
		leftScreen.value = (parseInt(leftScreen.value)) * (parseInt(rightScreen.value));
		centerScreen.value = "";
		rightScreen.value = "";
	} else if (operatorSelected == "/") {
		leftScreen.value = (parseInt(leftScreen.value)) / (parseInt(rightScreen.value));
		centerScreen.value = "";
		rightScreen.value = "";
	}	
}
var clearAreas = function (){
	leftScreen.value = "";
	centerScreen.value = "";
	rightScreen.value = "";
}
	calculate.addEventListener("click", solution, false);
	// backSpace.addEventListener("click", backOne, false);
	backSpace.addEventListener("click", backOne, false);
	console.log(backSpace);
	for ( var i = 0; i < input.length; i++) {
		if(!input[i].classList.contains('operate')) {
			input[i].addEventListener("click", addInput, false);
		} 
	}
	for ( var i = 0; i < operator.length; i++) {
	operator[i].addEventListener("click", addOperate, false)	
	}
	clearScreen.addEventListener("click", clearAreas, false)
	// decimal.addEventListener("click", addDecimal, false)
})();
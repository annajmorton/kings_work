// input value should be looked at
// disable button default

"use strict"

// page HTML handles 
var btnSave = document.getElementById('save-name');
var btnAvg = document.getElementById('calculate-average');
var btnAdd = document.getElementById('add-grade');
var sname = document.getElementById('student-name');
var table = document.getElementById('grades');
var avg = document.getElementById('student-average');

console.log(table);
console.log(document.getElementById('grades'));

// form inputs HTML handles 
var inname = document.getElementById("name");
var insub = document.getElementById("subject");
var ingrade = document.getElementById("grade");

console.log(inname);



// event listener functions
var saveName = function (event) {
    
	sname.innerHTML = inname.value;
	student.name = 	inname.value;

	btnAvg.addEventListener('click', average, false);
	btnAdd.addEventListener('click', add, false);

}
var add = function (event){
	var newRow = document.createElement("TR"); 
	var newContent = "<td>"+ insub.value +"</td>" + "<td>"+ ingrade.value +"</td>";
	
	newRow.innerHTML= newContent;
	table.insertBefore(newRow,table.firstChild);

	student.addSubject(insub.value,Number(ingrade.value));

}
var average = function (event){
	
	avg.innerHTML = Math.round(student.calculateAverage());	
	var msg = student.isAwesome ? document.getElementById('student-awesome') :
	document.getElementById('student-practice');
	msg.removeAttribute('class');
}

btnSave.addEventListener('click', saveName, false);


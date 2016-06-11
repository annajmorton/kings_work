// (function(){
//     "use strict";

//      // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
//     var names = ['cameron','luis','ryan','zach'];

//     // TODO: Create a log statement that will log the number of elements in the names array.
    
//     console.log(names[0].length);
//     console.log(names[1].length);
//     console.log(names[2].length);
//     console.log(names[3].length);
   

//     // TODO: Create log statements that will print each of the names array elements individually.
//     console.log(names[0]);
//     console.log(names[1]);
//     console.log(names[2]); 
//     console.log(names[3]);

// })();


(function(){
    "use strict";
    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ['cameron','luis','ryan','zach'];

    // TODO: Create a log statement that will log the number of elements in the names array.
    for (var i=0; i < names.length ; i++) {
     console.log(names[i].length);
    }
    
    // TODO: Create log statements that will print each of the names array elements individually.
    var arrlength = names.length;
    names.forEach( function(name, index, array) {
     console.log(name);
    }); 

})();

let structural = require('./paradigms/structural');
let flags = require('./paradigms/flags');
let functional = require('./paradigms/functional');
let Solver = require('./paradigms/oop');


let array = [];

for(let i = 0; i < 64; i++) {
    array.push( Math.round( Math.random() * 100 ));
}


// structural(array);
// flags(array);
// functional(array);
// new Solver(array);

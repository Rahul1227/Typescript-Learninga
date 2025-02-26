"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    var result = a + b;
    return result;
}
var ans = add(12, 34);
console.log(ans);
//speicifying the return type in the arrow function
var add1 = function (a, b) {
    return a + b;
};
console.log(add1(6, 6));
// hero array for the map
var heros = ['ironMan', 'hulk', 'captainAmerica'];
// in map no need to specify input type but need to specify output type
var mapResult = heros.map(function (hero) {
    return "".concat(hero, " is the best out there");
});
console.log(mapResult);
// using void if the function is not returning anything
var consoling = function (name) {
    console.log(name);
};
consoling('rahul');
//function returing object
function createObject(name, age, city) {
    return {
        name: name,
        age: age,
        city: city,
        msg: 'Welcome to the club'
    };
}
console.log(createObject('rahul', 234, 'npj'));
//function taking object as parameter and returing object
function createObject1(params) {
    return {
        name: params.name,
        age: params.age,
        city: params.city,
        msg: 'Welcome to the club'
    };
}
console.log(createObject1({ name: 'rahul', age: 234, city: 'npj' }));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser1(params) {
    console.log("Name: ".concat(params.name, "    age:").concat(params.age));
}
// this will throw an error stating that the email does not exist
// createUser1({name:'rahul',age:45, email:'rahul@gmail.com'})
//but I can pass more arguments than defined in order way
var newObj = {
    name: 'rahul',
    age: 45,
    email: 'rahul@gmail.com'
};
createUser1(newObj);
var myUser = {
    _id: 23,
    name: 'rahul',
    age: 45
};
// this is not allowed to modify the value of the readonly 
// myUser._id=45
console.log(myUser);

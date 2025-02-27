"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var person = new User('rahul', 67);
person.city = "Nepalgunj";
// Professional way of using class in ts
var Student = /** @class */ (function () {
    function Student(name, cgpa) {
        this.name = name;
        this.cgpa = cgpa;
    }
    Object.defineProperty(Student.prototype, "studentIdSetter", {
        set: function (id) {
            this.studentID = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "getStudentID", {
        get: function () {
            return this.studentID;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.changeStudentID = function (newID) {
        this.studentID = newID;
        return 'Changed the ID successfully';
    };
    Student.prototype.changeIt = function (newID) {
        return this.changeStudentID(newID);
    };
    return Student;
}());
var Rahul = new Student('Rahul', 9.60);
var changing = Rahul.changeIt(9.95);
console.log(changing);
var studentId = Rahul.getStudentID;
console.log(studentId);

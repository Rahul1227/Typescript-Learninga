export {}

class User{
    name:string;
    private age:number;
    city:string; 

    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }
}

let person:User= new User('rahul',67)
person.city="Nepalgunj";


// Professional way of using class in ts

class Student{
    private studentID;
    constructor(
        public name:string,
        public cgpa:number
    )
    {}
    set studentIdSetter(id:number){
        this.studentID=id

    }

    get getStudentID():number{
        return this.studentID;
    }

    private changeStudentID(newID:number):string{
        this.studentID=newID;
        return 'Changed the ID successfully'
    }

    changeIt(newID:number){
        return this.changeStudentID(newID);
    }
}


let Rahul=new Student('Rahul', 9.60);
let changing=Rahul.changeIt(9.95);
console.log(changing);
let studentId=Rahul.getStudentID;
console.log(studentId);

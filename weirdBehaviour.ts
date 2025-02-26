export{}
function createUser1(params:{name:string, age:number}):void{
    console.log(`Name: ${params.name}    age:${params.age}`)

}

// this will throw an error stating that the email does not exist

// createUser1({name:'rahul',age:45, email:'rahul@gmail.com'})


//but I can pass more arguments than defined in order way
let newObj={
    name:'rahul',
    age:45,
    email:'rahul@gmail.com'

}

createUser1(newObj);



// readonly and optional

type User={
    readonly _id:number;
    name:string;
    age:number;
    creditCardDetails?:number;
}

let myUser:User={
    _id:23,
    name:'rahul',
    age:45
}

// this is not allowed to modify the value of the readonly 
// myUser._id=45

console.log(myUser)
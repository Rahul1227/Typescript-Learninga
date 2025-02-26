export{}
// const numsArr:number[]=[];
const numsArr:Array<number>=[];
numsArr.push(2);
numsArr.push(3);
numsArr.push(90);
console.log(numsArr);

// creating own type
type User={
    name:string;
    age:number;
}

const allUsers:Array<User>=[];
allUsers.push({name:'rahul',age:45});
console.log(allUsers);
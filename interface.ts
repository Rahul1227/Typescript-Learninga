export{}
interface User{
    readonly _dbId:number;
    name:string;
    city?:string;
    startTrail():string
}

const person:User={
    _dbId:89,
    name:'rahul',
    startTrail:()=>{
        return 'The trail has started '
    }
}

// the below line will throw an error stating that readonly values cannot be changed
// person._dbId=90
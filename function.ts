// learning functions in typescript
export{}
function add (a:number, b:number):number{
    let result=a+b;
    return result;
}
let ans=add(12, 34);
console.log(ans)

//speicifying the return type in the arrow function
let add1=(a:number, b:number):number=>{
    return a+b;
}
console.log(add1(6,6))


// hero array for the map
const heros=['ironMan', 'hulk', 'captainAmerica'];

// in map no need to specify input type but need to specify output type
const mapResult=heros.map((hero):string=>{
    return `${hero} is the best out there`
})

console.log(mapResult)


// using void if the function is not returning anything

let consoling=(name:string):void=>{
    console.log(name)
}

consoling('rahul')


//function returing object
function createObject(name:string, age:number, city:string):{
    name:string, age:number, city:string, msg:string
}{
    return{
        name:name,
        age:age,
        city:city,
        msg:'Welcome to the club'
    }
}

console.log(createObject('rahul',234,'npj'))


//function taking object as parameter and returing object
function createObject1(params:{name:string, age:number, city:string}):{
    name:string, age:number, city:string, msg:string
}{
    return{
        name:params.name,
        age:params.age,
        city:params.city,
        msg:'Welcome to the club'
    }
}

console.log(createObject1({name:'rahul',age:234,city:'npj'}))


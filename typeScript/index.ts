// tsc filename.ts -> compiles to .js

let a:number= 5;
console.log(a);

let fullName: string = "jack";

// fullName = 5
// type number is not assignable to string

const namesArr: string[] = [];
// namesArr.push(1) 
// since the array is of type string so we cannot push number to string type array

function sum(a : number , b: number):number{
    return a + b;
}

function stringSum(a: number, b :string){
    return a + b;
}

// Tuples
let address : [number, string, number];
address = [111,'nainital',201]
// since while declaring the array we declared it having 3 values so we cannot have 4 values

// ? -> optional property, first the required property will be written then the optional property

let details : {name: string , age?: number};
details = {name:'sid',age:30};
details = {name:"sid"};
 

interface Person{
    name : String;
    id?: number;
    age : number;
}

let p : Person;
p = {"name": 'john', "age":30,id:50};

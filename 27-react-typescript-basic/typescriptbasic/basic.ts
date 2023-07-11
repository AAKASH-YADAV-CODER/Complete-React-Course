//string type variable
let name_My: string;
name_My = "akash Yadav";
//nubmer type variable
let age: number;
age = 20;
//boolean type variable
let codingaddicted: boolean;
codingaddicted = true;

//array
let container: string[];
let container1: boolean[];
let container3: number[];

// object type variable
let objcontainer : {
    name: string;
    age: number;
};
objcontainer = {
    name:"akash yadav",
    age:20,
}
//combination of array and object type
let combocontainer: {
    name: string;
    age: number;
}[];

// Type Inference :-automatically sense kr liye with given value
let myname = 'aksh';

//type union
let course: string | number = 'react';
course = 33;

// Aliases type
type personal_info= {
    name: string;
    age: number;
}
let person1: personal_info;
person1 = {
    name: "akah",
    age:121,
}
let people1 = {
    name: "akah",
    age:121,
}


// functions and function types

function addnum(a: number, b: number):number|string {
  return a + b;
}

function print(value: any) {
  console.log(value);
}


//generics types :- then it sence the type defination by sensing form parameter value
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]// like here number
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')// and here string
const stringArr = insertAtBeginning<string>(['a', 'b', 'c'], 'd');
// updatedArray[0].split(''); 


// and also into some deeper we declare and exact value to generic type by passing an type in angle brackets
let nubmer: Array<number>;
nubmer = [23123, 212];

const carriage1 = ["ranjan", "ayush", "ravi"];

const emptycrage = [];

const threeEmptySeat = Array(3); // three element space
//console.log(threeEmptySeat[0]); // undefine
//console.log(threeEmptySeat.length);

const singlePassenger = Array.of(3); // element as 3 length=1

const trainCode = Array.from("023451"); // make the array of each number as character
//console.log(trainCode);

// trainCode.length=3;
// console.log(trainCode)
// trainCode.length=6;
// console.log(trainCode);

// splice

const numbers = [23, 45, 67, 89, 11];

const indexOf = numbers.includes(23, 0); // required the value to search and starting index--
// ---return true or false

const names = ["ranjan", "ketan", "shivam", "ravi"];
// console.log(names.includes("ravi"));

const students = [
  { name: "ranjan", age: 54 },
  { name: "ketan", age: 23 },
];

// console.log(students.includes({name:"ranjan"})); // esa khavi nahi hota ha

const nameExist = students.find((element) => element.name == "ranjan"); // required call back ---
// --return  full element which is mached first time
//-- return undefine when no match
// console.log(nameExist);

const ReqDetail = students.some((element) => element.name == "ranjan"); // required call back
// --return true when match or false
//console.log(ReqDetail);

// const Adults = students.every((e) => e.age > 38); // return true or false for each element
// console.log(Adults);

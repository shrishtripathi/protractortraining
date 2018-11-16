/* We can use interfaces to describe an array also, but remember this is different from Java
or C# where we can only use interfaces to describe class types*/

//example1
interface Human{
    [age: number]: string; //Note: it has no name assigned to the function signature
    length:number;
}
let data: Human =["5", "10"];
var record = data[0];


//example2
interface Human2 {
  [name: string]: string;//Note there is no name assigned to the function signature
}

let data2: Human2 = {"first": "Bob", "second": "Fred"};
var record2 = data2["first"];
console.log(record2);

// example3

interface Human3 {
  [name: string]: string; //Note it has no name assigned to the function signature
  length:string;         // string length property
}

let data3: Human3 = {"first": "Bob", "second": "Fred"};
 // Will not work, property length is required
let data4: Human3 = {"first": "Bob", "second": "Fred",length:"2"};
// Will work, length property is defined but not much usefull

var record3 = data4["first"];
console.log(record3);

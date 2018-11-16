/*
A class declaration creates two things: a type representing instances of the class and a
constructor function. Because classes create types, you can use them in the same places you
would be able to use interfaces
*/

class Human{
    name: string;
    age: number;
}
interface Data extends Human{
    Info : boolean;
}
var record : Data = {name: "albert", age: 25, Info: true};
console.log(record);

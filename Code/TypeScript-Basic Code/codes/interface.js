// In In Object Oriented Programming, an Interface is a description of all functions that an 
//object
// An interface may also contain constants, default methods, static methods, and nested types
//One of TypeScript’s core principles is that type-checking focuses on the shape that values 
//have.This is sometimes called “duck typing” or “structural subtyping”.

interface Human{
    name : string;
}
interface Animal {
    [a: string]:any
}

function world1(value1: Human) {
  console.log(value1.name);
}
function world2(value2: Animal) {
  console.log(arguments[0]);
}
var obj1 = {name: "kat"};
world1(obj1);
var obj2 = {Myname: "kat"};
world1(obj2); // missing or renamed property: Error
var Obj4 = {age: 11, name: "janny"};
world1(Obj4);// Stale Literal: extra properties allowed
var obj3= {name: "william"};
world2(obj3);//  Ok, `name` matched by index signature


//TypeScript compiler uses the duck-typing method to compare one object with other 
//object by comparing that the both objects have the same type matching properties
// or variables names or not
// Duck-typing feature gives type safety in TypeScript code.
// According to duck-typing method, the both objects must have matching
// same properties/variables types

let duck = {id: 1, name: "name"};
//duck = {id: 2, name: "donald", age : 5};
let duck2 = {id: 2, name: "donald", age: 5};
duck = duck2;
console.log(duck);


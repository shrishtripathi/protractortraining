
function Info(firstName: string|number|boolean, age: string|number|boolean):string|number|boolean{
    if(typeof age === "string"){ // this is know as type guard or union types
        // age is treated as a string here
        return age +" is a string";
    }
     if(typeof age === "number"){
        // age is treated as a number here
        return age +" is a string";
    }
     if(typeof age === "boolean"){
        // age is treated as a boolean here
        return age +" is a boolean";
    }
}
// other example

class human{food(){}}
class animal{eat(){}}

var world : human|animal = new human();
if(world instanceof human){// this is type guard
    world.food();
}
else{
    world.eat();
}
/*Note on Type Guards:
A common pattern in JavaScript is to use typeof or instanceof to examine the type of an expression at runtime.
TypeScript now understands these conditions and will change type inference accordingly when used in an if block.
This is called a type guard.*/
//# sourceMappingURL=union_types.js.map

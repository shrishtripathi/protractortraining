
class Human{
    name: string;
    
    constructor(name: string){
        this.name = name;
    }
}

class Animal{
    name: string;
    age: number;
    
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    eat(quantity: number){
        console.log(this.name + " is a Human and is eating");
    }
}

let h1 : Human= new Human("Man");
let a1 : Animal= new Animal("cat", 3);

h1 = new Animal("Dog", 4);//this is working, but it should not because it is a fresh
//object with extra properties
a1 = new Human("women",7);
// This is not allowed need to add all properties including functions
//let a2 : Animal = {name:"cat", age:4};

let a2: Animal = {name:"Dog",age:4, eat: function() {
    console.log("Eat in object literal");
}};


// Note there is no parameter in function and it does not give any compilation
//error but you can not call this function without paramter, see the call below

a2.eat(5);
*/ 
//# sourceMappingURL=classes_ducktyping.js.map

// syntax of classes in TypeScript is similar to java and c#

class Human{
    name: string;
    
    constructor(names: string){
        this.name = names;
    }
    eat(){
        console.log(this.name + " is a Human and is eating");
    }
}

class Animal{
    name: string;
    
    constructor(name: string){
        this.name = name;
    }
    eat(){
        console.log(this.name + " is a Animal and is eating");
    }
}

class Robot{
     name: string;
    
    constructor(name: string){
        this.name = name;
    }
}

let h: Human = new Human("Lee");
console.log(h);
let a: Animal = new Animal("tiger");
console.log(a);
let r: Robot = new Robot("jarvis");
console.log(r);

let r2: Robot = new Animal("lion");

var isItRobot = r2 instanceof Animal;
console.log("Is Lion a Robot: " + isItRobot);



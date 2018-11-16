
class world {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(meters: number = 0) {
           console.log(this.name + " moved " + meters + "m.");
    }
}

class Human extends world {
    constructor(name: string) {
        super(name);
    }
    move(meters = 10) {
        console.log("walk");
        super.move(meters);
    }
}

class Animal extends world {
    constructor(name: string) {
        super(name);
    }
    move(meters = 30) {
        console.log("Galloping...");
        super.move(meters);
    }
}

let h = new Human("jhonny the man");
let a: Animal = new Animal("Tommy the Animal");

h.move();
a.move(34);*
//# sourceMappingURL=inheritance.js.map

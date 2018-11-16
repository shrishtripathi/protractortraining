// In TypeScript, each member is public by default.

class Human{
    private name:string;
    constructor(FullName: string) {
        this.name = FullName;
    }
    Age(age: number) {
        alert(this.name + " is " + age + " years old");
    }
}
// private members can only be access to their respective class
var record = new Human("micheal").name;
console.log(record);

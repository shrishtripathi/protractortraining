/*
In languages like C# and Java, one of the main tools in the toolbox for creating reusable
components is 'generics', that is,being able to create a component that can work over a
variety of types rather than a single one. This allows users to consume these components
and use their own types.
*/

class Human<Tname, Tage>{
    private name: Tname[];
    private age:  Tage[];

    constructor(){
        this.name = [];
        this.age = [];
    }
    Data(Name: Tname, Age: Tage){
        this.name.push(Name);
        this.age.push(Age);
        console.log(Name, Age);
    }
}
let recordName = new Human<string, number>();
let recordAge = new Human<number,string>();
recordName.Data("Romi", 20);
recordAge.Data(25, "Root");


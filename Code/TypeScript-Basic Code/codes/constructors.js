// example 1
//if child class has no constructor and parent class provides constrcutor then 
//is going to use parent constrcutor and child's object creation will required use 
//of parent's constructor parameters 

class A {
    name:string;
    constructor(theName: string,age:number) {
        this.name = theName;
        console.log("A constrcutor");
    }
}

class B extends A{

}

let a: A = new A("A",4); // This will work
let b: B = new B("C",8); // This is also working too as child class use parents constructor
let c: B = new B();      // This is not working as child class must use parents constructor
let d: B = new B("C");   // This will also not work

// example 2
// If parent class does not provide constructor and child class provide constrcutor then 
// child class must call super() within child's class constructor
// call to super can be at any line in constructor unlike any other object oriented language 
// with call to super must be as first line

class C {

}
class D extends C {
    name:string;
    constructor(theName: string,age:number) {
        super();
        this.name = theName;
        console.log("D constrcutor");
         
    }
}
let a1: C = new C(); // This will work
let b1: D = new D(); // This is not working because child class has its 2 argumnet constrcutor
let c1: D = new D("C",8); // This is working as expected


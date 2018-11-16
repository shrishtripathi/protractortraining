/*
When working with classes and interfaces, it helps to keep in mind that a class has two types:
the type of the static side and the type of the instance side
*/
//Lets us create an interface that defines a constructor

interface ClockInterface {
    new (hour: number, minute: number);// this defines a constructor signature
}
class Clock1 implements ClockInterface  {
     currentTime : Date;
     constructor(h: number, m: number) { }
} 
/* Note: the constructor sits in the static side, it cannot be implemented
if you create an interface with a construct signature and try to
create a class that implements this interface you get an error*/
// you would need to work with the 'static' side of the class directly. 
/*In this example, we work with the class directly*/

interface ClockStatic {
    new (hour: number, minute: number);
}
interface MyClockInterface {
    currentTime: Date;
}
class Clock implements MyClockInterface {
    currentTime :Date;
    constructor(h: number, m: number) {
        console.log (h + ":" +m);
    }
}
var obj: ClockStatic = Clock;
var a =new obj(7, 30);
console.log(a);


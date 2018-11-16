/* one of the most common uses of interfaces in languages like C# and Java, that of explicitly
enforcing that a class meets a particular contract, is also possible in TypeScript*/

interface ClockInterface {
    currentTime : Date;
    setTime(d: Date);
}
class Clock implements ClockInterface  {
     currentTime : Date;
     setTime(d: Date){
        this.currentTime = d;
     }
     constructor(hours: number, minutes: number){}
     }
     
// interfaces describe the public side of the class, rather than both 
//the public and private side. 

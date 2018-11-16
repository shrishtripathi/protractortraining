
// Named function
  function num(z:number , y:number):number{
    return z+y;
  }
// Anonymous function
 var num2 = function(z:number, y:number):number {
     return z-y;
 }
// Anonymous function with explict type

 var num3: (z:number, y:number)=>number = function(z:number, y:number):number {
     return z*y;
 }


 console.log(num(2,3));
 console.log(num2(3,2));
 console.log(num3(2,3));
  

/* in TypeScript explicitly specify the type of the object and that process kniow as
explicit casting */
/* A object can be cast by using <> sybtax */
/* It allows us to explicitly cast from any type to a datatype "any"*/

let ExType =  {name: "name", id: 1} as any;
ExType = {name: "newName", id: 2};  //assign a type which has the the same properties
ExType = {name: "newName", id: 2, age: 3};//can add a property
ExType = { id: 2, age: 4};//can even reduce the properties because of initial any explict casting



// Named function
  function num(z: number, y: number): number {//Named function
    return z+y;
}
// Anonymous function
  var num2 = function(x: number, y: number): number { //Anonymous function
                return x+y;
            };
// Anonymous function with explict type
    var num3: (x:number, y:number)=>number = 	function(x: number, y: number): number { //Anonymous function with explict type
                                                return x+y;
                                            };
console.log(num(2,4));
console.log(num2(3,4));
console.log(num3(4,4,));


/*
As in JavaScript, every parameter is optional, and users may leave them and their value is
undefined. We can get this functionality in TypeScript by adding a ? to the end of parameters
*/
function Info(firstName:string, lastName?:string):string{
    if(lastName){
      return firstName+" "+lastName;
    }
    else{
        return firstName;
    }

}
var result1 = Info("luke");
console.log(result1);
var result2 = Info("Adam","suns");
console.log(result2);*/
// Anonymous function with optional parameters

var Info : (firstName:string, lastName?:string) => string =
function(firstName:string, lastName?:string):string{
    if(lastName){
      return firstName+" "+lastName;
    }
    else{
        return firstName;
    }

}

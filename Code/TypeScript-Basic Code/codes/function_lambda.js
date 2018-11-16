// These functions know as fat arrow(because -> is a thin arrow and => is a fat arrow) 
// functions and also called lambda functions

var Info = (firstName:string, lastName:string) =>{
    return firstName + " " + lastName;
}
var record = Info("blue", "sky");
console.log(record);

var Info = (firstName:string, lastName:string) => (firstName + "" + lastName);

//function add(arg1: string, arg2: string): string{return}
//function add2(arg1: number, arg2: number): number{return};

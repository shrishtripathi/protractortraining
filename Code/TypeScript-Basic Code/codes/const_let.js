
// i would suggest you to use let instead of var everywhere, because it gives BlockScope concept
let num = 7;
 if (true){
    let num = 34;
    
 console.log("let: " + num);
 }

 else {
    //  let num  = 40;

    //  var val = 4;
 }
 console.log("let: " + num);
 
 //console.log("let: " + val);

 // A const is use where values do not change

 const a = 6;
 const b : number = 5;
 const names : string = "name";
 const bool : boolean = true;

 

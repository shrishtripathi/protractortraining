// boolean is an True and False values use for different Statements
let True : boolean = true;
console.log(True);
let False : boolean = false;
console.log(False);
// string  could be any type of string
let Name : string = "Jhon";
console.log(Name);
// Number to store number and also decimal values
let num : number = 26;
console.log(num);
// Array is used store temporary data
let data : number[] = [1, 2, 3];
console.log(data[0]);
// generic array type
let data2 : Array<string> = ["jhon", "poll", "Kami"];
console.log(data2[2]);
// Enum  represents a group of similarities
 enum forest {horse =1, lion =2, elephant = 4};
 let a : forest = forest.lion;
 let AniName :string = forest[4];
 console.log(AniName);
// Tuple   
/*
 Tuple types allow you to express an array where the type of a fixed number of
 elements is known, but need not be the same.For example, you may want to represent
 a value as a pair of a string and a number:
*/
// Declare a tuple type
  let val : [string , number];
 // Initialize it
  val = ["hello", 6]

// Initialize it incorrectly
  val = [5 , "hello"]
  console.log(val
              
// Any can be any datatype describe any time in code

   let anyThing : any = "name";
   console.log(anyThing);
   anyThing = 5;
   console.log(anyThing);
   anyThing = true;
   console.log(anyThing);
 


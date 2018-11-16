/*
hybrid type is an object that acts as both a function and an object, with additional
properties
*/

interface world{
    (person: string): string;//Note: there is no name assigned to the function signature
    age: number;
    Data(): void;
}
var record: world;
record("jack");
record.age = 25;
record.Data();

// Note:When interacting with 3rd-party JavaScript, you may need to use patterns like the 
// above to fully-describe the shape of the type.
/* Note: The transpiled Javascript code will not run here it is being used as an example*/ 

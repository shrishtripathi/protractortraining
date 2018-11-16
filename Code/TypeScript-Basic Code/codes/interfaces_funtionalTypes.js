/*
We can use interfaces to describe function types, but remember this is different from
Java or C# where we can only use interfaces to describe class types.
*/
/*here we are going to defining a interface with a single function, any function with the
same signature will have this type
*/

interface Human{
    (Name: string , Age: string):boolean
}
//Note: there is no name assigned to the function signature

var world:Human = function(name: string, age: string){
                   var record = name.search(age);
                              if (record == -1) {
                                return false;
                              }
                              else {
                                return true;
                              }
};

//For function types to correctly type-check, the name of the parameters do not need to match. 
//Function parameters are checked one at a time, with the type in each corresponding parameter 
//position checked against each other.   
//# sourceMappingURL=interfaces_funtionalTypes.js.map

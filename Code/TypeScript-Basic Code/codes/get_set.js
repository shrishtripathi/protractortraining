/* typeScript supports getters/setters as a way of intercepting accesses to a member of an
object, thus allowing Encapsulation .This gives you a way of having finer-grained control
over how a member is accessed on each object.*/
/* Encapsulation is the packing of data and functions into a single component. */
// Note: getters and setters are only supported when targeting ES 5 or higher.

var Identity = "personal identity";

class Human{
    private full_Name : string;
    
     get fullName(): string {
        return this.full_Name;
    }
     set fullName(newName: string) {
        if (Identity && Identity == "personal identity") {
            this.full_Name = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
var h = new Human();
h.fullName = "Smith";
if (h.fullName) {
    console.log(h.fullName);
}
 

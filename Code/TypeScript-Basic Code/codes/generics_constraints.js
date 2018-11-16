/*
In Generic Constraints you may sometimes want to write a generic that works only on a set of
types where you have some knowledge about the capabilities
*/

class Human{
    name: string;
}
class Data<T extends Human>{
    private age: T[];

    constructor(){
        this.age = [];
    }
    add(Info: T){
        this.age.push(Info);
        console.log(Info.name+ " method add");
    }
}

//let record1 = new Data<string>();  // error
//let record2 = new Data<number>();  // error

class showData extends Human{
    display(){
        console.log(this.name + " display method");
    }
}
let record = new showData();
record.name = "james";
record.display();

let record2 = new Data<showData>();
record2.add(record);


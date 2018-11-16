
interface Age { age:number}
interface Name extends Age{ firstName()}

function isData(Info: Age): Info is Name{
    return true;
}

var record : Age;

if(isData(record)){
    record.firstName;// record is Name in the block
}
*/
/*
This allows you to work with not only typeof and instanceof checks, which need a type
that JavaScript understands, but now you can work with interfaces and do custom analysis.
Guard functions are denoted by their “Info is record” return type,which returns boolean
and signals to the compiler if what the expected type now is


/* Type aliases create a new name for a type. Type aliases are sometimes similar to
interfaces, but can also  be name as primitives, unions or tuples*/
/* it doesn’t actually create a new type - it creates a new name to refer to that type. */
/* Type aliases are exactly the same as their original types; they are simply alternative
names.*/

type StringNumberOrBoolean = string | number | boolean;
type PrimitiveArray = Array<string|number|boolean>;
type MyNumber = number;
type Callback = () => void;
type CallbackWithString = (string) => void;
// you can use type aliases any where you can use a type
function work(x: StringNumberOrBoolean){
    return x;
}

function usingCallback(f: CallbackWithString){
    f("This is a string");
}

// we can use type aliases generic

type world<h> = { Human: h };

// they can also be refer to itself in a property

type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}

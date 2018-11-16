/*
Note: Here we are using the standard ES2015 (ES6) syntax for modules, this standard was adopted in
version 1.5 .In TypeScript there are other module syntax also available but I suggest not to use them
unless for working with legacy code.
*/
/*
Note:Modules are executed within their own scope, not in the global scope; this means that variables,
functions, classes, etc. declared in a module are not visible outside the module unless they are
explicitly exported using one of the export forms. Conversely, to consume a variable, function, class,
interface, etc. exported from a different module, it has to be imported using one of the import forms.
*/

import {add, multiple} from "./module_export"

var addResult = add(3, 6);
var multipleResult = multiple(5 ,6);
console.log(addResult);
console.log(multipleResult);

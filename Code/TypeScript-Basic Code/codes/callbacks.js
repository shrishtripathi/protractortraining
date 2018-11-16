// By the name callback we can simple understand that a thing to be call at later
// or at any point in the program

function myCallback(callbackName: string){
    console.log("this is my name " + callbackName);
}
function callingfunction(initialText: string, callback: (text:string) => void){
    callback(initialText);
}
callingfunction("myCallback", myCallback);



interface Human{
    name?: string;
    age?: number;
}
function world(data: Human){
   if(data.name){
       return data.name;
   }
   if (data.age) {
       return data.age;
    }
}
var recordName = world({name: "Amor"});
var recordAge = world({age: 7});

console.log("name: "+recordName, "age: "+recordAge);

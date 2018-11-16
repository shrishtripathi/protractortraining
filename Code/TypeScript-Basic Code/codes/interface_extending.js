
interface country{
    states : number;
}
interface people extends country{
    name: string;
}
var people = <people>{};
people.states = 50;
people.name = "carry";



interface country{
    states : number;
}
interface forest{
    animals: string;
}
interface people extends country, forest{
    name: string;
}
//var people = <people>{};
var people = {} as people; ///Alternative syntax for casting
people.states = 50;
people.name = "carry";
people.animals ="lion";

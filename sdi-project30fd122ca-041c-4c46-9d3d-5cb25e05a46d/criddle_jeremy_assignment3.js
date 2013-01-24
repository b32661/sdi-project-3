// Jeremy Criddle
// SDI 1301
// Project 3
// "cats"


//JSON data
var json;
json = {"expenses":[
       {"catfood":30,
        "litter":20,
        "treats":2}
]};

//global meow-iables
var cats = {cat:[
    {name:"JJ", age:6, size:"medium", family:"Lara's family"},
    {name:"Ginger", age:6, size:"large", family:"Lara's family"},
    {name:"Annastasia", age:10, size:"medium", family:"Lara's family"},
    {name:"Baby", age:2, size:"medium", family:"Lara's family"},
    {name:"Midnight", age:5, size:"medium", family:"Nancy's family"},
    {name:"Little Kitty", age:2, size:"small", family:"Nancy's family"},
    {name:"Boots", age:11, size:"medium", family:"Kelly's family"},
    {name:"Fluffy", age:12, size:"medium", family:"Kelly's family"},
    {name:"Tilly", age:1, size:"medium", family:"Julie's family"},
    {name:"Milly", age:1, size:"medium", family:"Julie's family"}
]};

//



//main code
for (var currentCat=0; currentCat<cats.cat.length; currentCat++){
    console.log("Hi! My name is " + cats.cat[currentCat].name + " . I am " +
        cats.cat[currentCat].age + " years old. I am a " +
        cats.cat[currentCat].size + " sized kitty and I live with the " +
        cats.cat[currentCat].family + " .");
    }



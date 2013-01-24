// Jeremy Criddle
// SDI 1301
// Project 3
// "cats"

//global meow-iables
var cats = {cat:[
    {name:"JJ", age:6, size:"medium", family:"LF"},
    {name:"Ginger", age:6, size:"large", family:"LF"},
    {name:"Annastasia", age:10, size:"medium", family:"LF"},
    {name:"Baby", age:2, size:"medium", family:"LF"},
    {name:"Midnight", age:5, size:"medium", family:"NF"},
    {name:"Little Kitty", age:2, size:"small", family:"NF"},
    {name:"Boots", age:11, size:"medium", family:"FF"},
    {name:"Fluffy", age:12, size:"medium", family:"FF"},
    {name:"Tilly", age:1, size:"medium", family:"JF"},
    {name:"Milly", age:1, size:"medium", family:"JF"}
]};


for (var currentCat=0; currentCat<cats.cat.length; currentCat++)
    console.log("Hi! My name is " + cats.cat[currentCat].name
);


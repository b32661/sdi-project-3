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

//
var clarifyFamily = {LF: function(){LF = "Lara's family"},
    NF: function (){NF = "Nancy's family"},
    FF: function (){FF = "Kelly's family"},
    JF: function(){JF = "Julie's family"}};



//main comfy cozy code
for (var currentCat=0; currentCat<cats.cat.length; currentCat++){
    console.log("Hi! My name is " + cats.cat[currentCat].name + " . I am " +
        cats.cat[currentCat].age + " years old. I am a " +
        cats.cat[currentCat].size + " sized kitty and I live with the " +
        cats.cat[currentCat].family + " family. My family name might be a little unclear, we need to clarifyFamily()");
}


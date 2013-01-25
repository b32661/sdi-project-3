// Jeremy Criddle
// SDI 1301
// Project 3
// "cats"


//JSON data
var json = {"expenses":[
       {"food":30,
        "litter":20,
        "treats":2}
]};

//global meow-iables
var cats = {cat:[
    {name:"JJ", age:6, isLarge:false,
        toTalk:[function toPurr(){console.log("purr")},
        function toMeow(){console.log("meow")}],
        favorite : {toy: "ball", food: "fish"}},
    {name:"Ginger", age:6, isLarge:true,
        toTalk:[function toPurr(){console.log("purr")},
        function toMeow(){console.log("meow");return}],
        favorite : {toy: "ball of yarn", food: "poultry"}},
    {name:"Annastasia", age:10, isLarge:false,
        toTalk:[function toPurr(){console.log("purr")},
        function toMeow(){console.log("meow")}],
        favorite : {toy: "lazer", food: "beef"}},
    {name:"Baby", age:4, isLarge:false,
        toTalk:[function toPurr(){console.log("purr")},
        function toMeow(){console.log("meow")}],
        favorite : {toy: "ball", food: "poultry"}}
]};


// main code
// console log parts of cat object
for (var currentCat=0; currentCat<cats.cat.length; currentCat++){
    var kitty = cats.cat[currentCat];
    console.log("Hi! My name is " + kitty.name + " . I am " +
        kitty.age + " years old. It is " +
        kitty.isLarge + " that I am a large sized kitty and I live with " +
        kitty.family + " . I really like to play with a " +
        kitty.favorite.toy + ". " + kitty.favorite.food + " is numee!")

}

for (var currentCat=0; currentCat<cats.cat.length; currentCat++){
    var kitty = cats.cat[currentCat];
    if( kitty.isLarge === true ){
        console.log("It is " + kitty.isLarge + " " + kitty.name+ " I need to go on a diet")
    }

}
// It's 11:42 Thurs. I just can't figure my code into pictures.
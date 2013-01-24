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
    {name:"JJ", age:6, isLarge:false, family:"Lara's family", favorite : {toy: "ball", food: "fish"}},
    {name:"Ginger", age:6, isLarge:true, family:"Lara's family", favorite : {toy: "ball of yarn", food: "poultry"}},
    {name:"Annastasia", age:10, isLarge:false, family:"Lara's family", favorite : {toy: "lazer", food: "beef"}},
    {name:"Baby", age:4, isLarge:false, family:"Lara's family", favorite : {toy: "ball", food: "poultry"}},
    {name:"Midnight", age:5, isLarge:false, family:"Nancy's family", favorite : {toy: "lazer", food: "beef"}},
    {name:"Little Kitty", age:3, isLarge:false, family:"Nancy's family", favorite : {toy: "ball", food: "fish"}},
    {name:"Boots", age:11, isLarge:false, family:"Kelly's family", favorite : {toy: "ball of yarn", food: "poultry"}},
    {name:"Fluffy", age:12, isLarge:true, family:"Kelly's family", favorite : {toy: "lazer", food: "fish"}},
    {name:"Tilly", age:2, isLarge:false, family:"Julie's family", favorite : {toy: "ball", food: "beef"}},
    {name:"Milly", age:2, isLarge:false, family:"Julie's family", favorite : {toy: "fish", food: "fish"}}
]};

//



// main code
// console log parts of cat object
for (var currentCat=0; currentCat<cats.cat.length; currentCat++){
    console.log("Hi! My name is " + cats.cat[currentCat].name + " . I am " +
        cats.cat[currentCat].age + " years old. It is " +
        cats.cat[currentCat].isLarge + " that I am a large sized kitty and I live with " +
        cats.cat[currentCat].family + " . I really like to play with a " +
        cats.cat[currentCat].favorite.toy + ". " + cats.cat[currentCat].favorite.food + " is numee!")
}
// this is the cat's meow
for (var currentCat=0; currentCat<cats.cat.length; currentCat++){
    cats.cat[currentCat].toPurr =
        [function toPurr(){
         console.log("purr");},
         function toMeow(){
         console.log("meow");
    }]
}
console.log(cats.cat[4]);
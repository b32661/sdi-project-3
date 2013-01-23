// Jeremy Criddle
// SDI 1301
// Project 3
// "cats"
var cat = function (name, age, size, family){
    if (size === "medium"){
            size = 1
    } else{
            size = 2
        }



    if (family === "LFam"){
        family = "Lara's family's cats";
    }   else {
        if (family === "NFam"){
            family = "Nancy's family's cats";
        } else {
            if (family === "FFam"){
                family = "Kelly's family's cats";
            } else {
                family = "Julie's family's cats";
            }
        }

    }
         return {
            "name"  : name,
            "age"   : age,
            "size"  : size,
            "family": family

    };

};


var jj = cat("JJ", "6", "medium", "LFam");
var ginger = cat("Ginger", "6", "large", "LFam");
var annastasia = cat("Annastasia", "10", "medium", "LFam");
var baby = cat("Baby", "2", "medium", "LFam");
var midnight = cat("Midnight", "5", "medium", "NFam");
var littleKitty = cat("Little Kitty", "2", "small", "NFam");
var boots = cat("Boots", "11", "medium", "FFam");
var fluffy = cat("Fluffy", "12", "medium", "FFam");
var tilly = cat("Tilly", "1", "medium", "JFam");
var milly = cat("Milly", "1", "medium", "JFam");
var cats = [jj, annastasia, baby, boots, fluffy, ginger, littleKitty, midnight, milly, tilly];
for (var i=0; i<cats.length; i++){
    console.log("Hi! My name is " +
        cats[i].name + " , I am " +
        cats[i].age + " years old, my size is a  " +
        cats[i].size + " , and I am one of " + cats[i].family);
}
console.log(cats);

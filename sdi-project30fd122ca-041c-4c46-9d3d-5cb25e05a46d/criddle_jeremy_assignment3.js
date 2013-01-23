// Jeremy Criddle
// SDI 1301
// Project 3
// "cats"

var cat = function (name, age, size, family){
var getName = function(){return name; };
    return {
      "name"  : getName,
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
for var i=0; i<cats.length; i++){
    console.log(cats[i]);


}

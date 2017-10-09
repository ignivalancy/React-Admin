/*
 * @file: stringMethods.js
 * @description: create custom string methods 
 * @date: 29.07.2017
 * @author: Jasdeep Singh
 * 
 */


/************* Captilize first character ************/
String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

/************* Captilize first character of word ************/
String.prototype.capitalizeEachLetter = function() {
    return this.toLowerCase()
        .split(' ')
        .map(function(word){
            return word.capitalizeFirstLetter();
        })
        .join(' ');
};

/************* Get date without time ************/
Date.prototype._getDate = function(){
return this.setHours(0,0,0,0);
}

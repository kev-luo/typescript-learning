"use strict";
// function signatures
// =======================================================
// NOTE: EXAMPLE ONE
// function signature
var greeting;
// matches fxn signature
greeting = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// NOTE: EXAMPLE TWO
var calc;
// since we defined calc to return a number, we have to add an else statement. Otherwise, if operator doesn't equal "add" then it would return undefined which doesn't match the return type in our fxn signature
calc = function (num1, num2, operator) {
    if (operator === "add") {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
var playerDetails;
playerDetails = function (player) {
    console.log(player.name + " is " + player.age + " years old");
};

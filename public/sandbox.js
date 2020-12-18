"use strict";
var character = 'mario';
// explicitly define the diameter argument as a number
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(4));
// when defining arrays, the values in the array will be inferred based on what the initial values are. In this case typescript will only allow numbers to be added to this array
var numbers = [10, 20, 30, 40];
numbers[1] = 23;
// numbers.push("hello"); // Argument of type 'string' is not assignable to parameter of type 'number'
var player = {
    name: "messi",
    team: "barcelona",
    age: 32
};
player.name = "ronaldo";
player.team = "juventus";
// player.age = '37'; // string not assignable to number
// player['skills'] = ['jumping', 'dribbling'] // Property 'skills' does not exist on type '{ name: string; team: string; age: number; }'
console.log(player);
// explicit types
// ==================================================
// initializes players variable and tells typescript that it will be an array of strings
// NOTE: this doesn't actually assign players equal to an empty array
var players;
// union types
// initializes mixed variables and tells typescript that it will be an array of items that will be one of three specified types
var mixed = [];
mixed.push('hello');
mixed.push(23);
mixed.push(true);
var uid;
uid = 123;
uid = '123';
var playerOne;
playerOne = { name: "messi", age: 32 };
playerOne = [];
var playerTwo;
playerTwo = { name: 'kane', team: 'spurs', age: 28 };
// Function basics
// =======================================================
var greet;
greet = function () {
    console.log('i greet things');
};
// b: number = 10 indicates 10 is the default value if no argument for b is passed
// c?: number | string indicates c is an optional argument
var add = function (a, b, c) {
    if (b === void 0) { b = 10; }
    var result = a + b;
    console.log(result);
    return result;
};
add(5);
add(5, 3);
var minus = function (a, b) {
    return a + b;
};
// type of result is inferred from function result
var result = minus(10, 7);
// explicitly state result type
var multiply = function (a, b) {
    return a * b;
};
// no return statement in function returns void
// when compiled to javascript this gets read as undefined
var noReturn = function (a, b) {
    console.log(a, b);
};
var logDetails = function (uid, item) {
    console.log(item + " has uid of " + uid);
};
var userGreet = function (user) {
    console.log(user.name + " says hello");
};

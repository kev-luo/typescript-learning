"use strict";
// explicit types
// ==================================================
// initializes players variable and tells typescript that it will be an array of strings
// NOTE: this doesn't actually assign players equal to an empty array
let players;
// union types
// initializes mixed variables and tells typescript that it will be an array of items that will be one of three specified types
let mixed = [];
mixed.push('hello');
mixed.push(23);
mixed.push(true);
let uid;
uid = 123;
uid = '123';
let playerOne;
playerOne = { name: "messi", age: 32 };
playerOne = [];
let playerTwo;
playerTwo = { name: 'kane', team: 'spurs', age: 28 };

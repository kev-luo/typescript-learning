"use strict";
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

"use strict";
// Function basics
// =======================================================
let greet;
greet = () => {
    console.log('i greet things');
};
// b: number = 10 indicates 10 is the default value if no argument for b is passed
// c?: number | string indicates c is an optional argument
const add = (a, b = 10, c) => {
    const result = a + b;
    console.log(result);
    return result;
};
add(5);
add(5, 3);
const minus = (a, b) => {
    return a + b;
};
// type of result is inferred from function result
let result = minus(10, 7);
// explicitly state result type
const multiply = (a, b) => {
    return a * b;
};
// no return statement in function returns void
// when compiled to javascript this gets read as undefined
const noReturn = (a, b) => {
    console.log(a, b);
};

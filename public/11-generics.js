"use strict";
// Generics
// =======================================================
// create reusable blocks of code that can be reused with different types
// <T> allows us to capture the object properties we initially pass into the function. that way we can access them outside the function
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "kevin", age: 27 });
console.log(docOne.name);
// being more explicit about what type of object T extends
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let docTwo = addID({ name: "kevin", age: 27 });
console.log(docTwo);
const docThree = { uid: 1, resourceName: "person", data: 'hello' };
const docFour = { uid: 2, resourceName: "person", data: { name: "kevin" } };
const docFive = { uid: 3, resourceName: "person", data: ['hi', 'there'] };
console.log(docThree);
console.log(docFour);
console.log(docFive);

// explicit types
// ==================================================
// initializes players variable and tells typescript that it will be an array of strings
// NOTE: this doesn't actually assign players equal to an empty array
let players: string[];

// union types
// initializes mixed variables and tells typescript that it will be an array of items that will be one of three specified types
let mixed: (string | number | boolean)[] = []
mixed.push('hello');
mixed.push(23);
mixed.push(true);

let uid: string | number;
uid = 123;
uid = '123'

let playerOne: object;
playerOne = { name: "messi", age: 32 }
playerOne = [];

let playerTwo: {
  name: string,
  age: number,
  team: string
}

playerTwo = {name: 'kane', team: 'spurs', age: 28}
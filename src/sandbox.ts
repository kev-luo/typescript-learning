const character = 'mario';

// explicitly define the diameter argument as a number
const circ = (diameter: number) => {
  return diameter * Math.PI;
}

console.log(circ(4));

// when defining arrays, the values in the array will be inferred based on what the initial values are. In this case typescript will only allow numbers to be added to this array
let numbers = [10, 20, 30, 40];

numbers[1] = 23
// numbers.push("hello"); // Argument of type 'string' is not assignable to parameter of type 'number'

let player = {
  name: "messi",
  team: "barcelona",
  age: 32
}

player.name = "ronaldo";
player.team = "juventus";
// player.age = '37'; // string not assignable to number
// player['skills'] = ['jumping', 'dribbling'] // Property 'skills' does not exist on type '{ name: string; team: string; age: number; }'
console.log(player);

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


// Function basics
// =======================================================
let greet: Function;

greet = () => {
  console.log('i greet things')
}

// b: number = 10 indicates 10 is the default value if no argument for b is passed
// c?: number | string indicates c is an optional argument
const add = (a: number, b: number = 10, c?: number | string) => {
  const result = a + b;
  console.log(result);
  return result;
}

add(5);
add(5,3);

const minus = (a: number, b: number) => {
  return a + b;
}

// type of result is inferred from function result
let result = minus(10,7);

// explicitly state result type
const multiply = (a: number, b: number): number => {
  return a * b;
}

// no return statement in function returns void
// when compiled to javascript this gets read as undefined
const noReturn = (a: number, b: number): void => {
  console.log(a, b);
}


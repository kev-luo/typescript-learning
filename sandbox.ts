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
player['skills'] = ['jumping', 'dribbling']
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

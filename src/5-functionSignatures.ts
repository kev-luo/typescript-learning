// function signatures
// =======================================================
// NOTE: EXAMPLE ONE
// function signature
let greeting: (a: string, b: string) => void;

// matches fxn signature
greeting = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

// NOTE: EXAMPLE TWO
let calc: (a: number, b: number, c: string) => number;

// since we defined calc to return a number, we have to add an else statement. Otherwise, if operator doesn't equal "add" then it would return undefined which doesn't match the return type in our fxn signature
calc = (num1: number, num2: number, operator: string) => {
  if(operator === "add") {
    return num1 + num2;
  } else {
    return num1 - num2;
  }
}

// NOTE: EXAMPLE THREE
type Player = {name: string, age: number}

let playerDetails: (obj: Player) => void;

playerDetails = (player: Player) => {
  console.log(`${player.name} is ${player.age} years old`)
}
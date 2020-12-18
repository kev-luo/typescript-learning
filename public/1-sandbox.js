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

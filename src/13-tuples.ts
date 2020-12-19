// Tuples
// =======================================================
// position types in tuples are fixed after initialization

// let arr: (boolean | string | number)[] is inferred
let arr = ['kevin', 23, true];

// explicitly defined tuple position types
let student: [string, number] = ['kevin', 23];

console.log(student);

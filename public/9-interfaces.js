"use strict";
const me = {
    name: "kevin",
    age: 27,
    speak(words) {
        console.log(words);
    },
    spend(amount) {
        return amount;
    }
};
const greetPerson = (person) => {
    console.log(person.name);
};
console.log(me);
greetPerson(me);

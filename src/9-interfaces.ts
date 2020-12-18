// Interfaces
// =======================================================
// we don't use interfaces to create new IsPerson objects. we use interfaces when we declare a variable as an IsPerson which dictates that variable having the properties and methods defined in the interface
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = { 
  name: "kevin", 
  age: 27, 
  speak(words: string): void { 
    console.log(words) 
  }, 
  spend(amount: number): number { 
    return amount 
  } 
}

const greetPerson = (person: IsPerson): void => {
  console.log(person.name);
}

console.log(me);
greetPerson(me);

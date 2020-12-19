// Enums
// =======================================================
// associate set of consts/keywords and associate them with numeric value

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Source<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docuOne: Source<string> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: "hi"
}

const docuTwo: Source<object> = {
  uid: 2,
  resourceType: ResourceType.DIRECTOR,
  data: {name: "Kevin"}
}

console.log(docuTwo);

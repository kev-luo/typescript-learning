"use strict";
// Enums
// =======================================================
// associate set of consts/keywords and associate them with numeric value
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docuOne = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: "hi"
};
const docuTwo = {
    uid: 2,
    resourceType: ResourceType.DIRECTOR,
    data: { name: "Kevin" }
};
console.log(docuTwo);

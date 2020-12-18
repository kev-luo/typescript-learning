"use strict";
// Classes
// =======================================================
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('kevin', 'work on portfolio website', 250);
const invTwo = new Invoice('dylan', 'work on portfolio website', 200);
// instantiate variable and tell typescript that it will contain an array that contains items of Invoice type
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = "jd";
console.log(invoices);

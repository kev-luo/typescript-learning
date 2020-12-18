"use strict";
// Classes
// =======================================================
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('kevin', 'work on portfolio website', 250);
var invTwo = new Invoice('dylan', 'work on portfolio website', 200);
// instantiate variable and tell typescript that it will contain an array that contains items of Invoice type
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = "jd";
console.log(invoices);

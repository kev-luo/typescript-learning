"use strict";
// Access Modifiers
// =======================================================
var InvoicePrivate = /** @class */ (function () {
    function InvoicePrivate(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    InvoicePrivate.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return InvoicePrivate;
}());
var privInvoiceOne = new InvoicePrivate('kevin', 'work on portfolio website', 250);
var privInvoiceTwo = new InvoicePrivate('dylan', 'work on portfolio website', 200);
var privateInvoices = [];
privateInvoices.push(privInvoiceOne, privInvoiceTwo);
privateInvoices.forEach(function (inv) {
    console.log(inv.client);
    console.log(inv.details);
    console.log(inv.format());
    // console.log(inv.amount); // Property 'amount' is private and only accessible within class 'InvoicePrivate'.
});
var InvPrivateShortHand = /** @class */ (function () {
    function InvPrivateShortHand(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    InvPrivateShortHand.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return InvPrivateShortHand;
}());
var privInvSHOne = new InvPrivateShortHand('kevin', 'work on portfolio website', 250);
var privInvSHTwo = new InvPrivateShortHand('dylan', 'work on portfolio website', 200);
var privInvoicesSH = [];
privInvoicesSH.push(privInvSHOne, privInvSHTwo);
privInvoicesSH.forEach(function (inv) {
    console.log(inv.client);
    console.log(inv.details);
    console.log(inv.format());
    // console.log(inv.amount); // Property 'amount' is private and only accessible within class 'InvoicePrivate'.
});

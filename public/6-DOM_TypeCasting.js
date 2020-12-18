"use strict";
var anchor = document.querySelector("a");
// question mark prevents an error if there are no anchor tags ("cannot read property href of undefined")
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
// alternatively we can postfix ! to remove null/undefined from the type
var anchor2 = document.querySelector("a");
console.log(anchor2.href);
// typescript knows this is going to be an HTMLFormElement
var formElem = document.querySelector("form");
// typescript only knows this is an Element since classes can be applied to any number of elements
// therefore we typecast to cast this type to HTMLFormElement
var form = document.querySelector(".new-item-form");
console.log(form.children);
// select each input field
var typeInput = document.querySelector("#type");
var toFromInput = document.querySelector("#tofrom");
var detailsInput = document.querySelector("#details");
var amountInput = document.querySelector("#amount");
form.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    console.log({
        type: typeInput.value,
        tofrom: toFromInput.value,
        details: detailsInput.value,
        // amount: amountInput.value,
        amount: amountInput.valueAsNumber
    });
}

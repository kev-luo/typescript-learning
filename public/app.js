import { Invoice } from "./classes/Invoice.js";
let invList = [];
const form = document.querySelector(".new-item-form");
const typeInput = document.querySelector("#type");
const toFromInput = document.querySelector("#tofrom");
const detailsInput = document.querySelector("#details");
const amountInput = document.querySelector("#amount");
form.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    const newSub = new Invoice(toFromInput.value, detailsInput.value, amountInput.valueAsNumber);
    invList.push(newSub);
    console.log(invList);
}
let docOne;
let docTwo;

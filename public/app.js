import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
let docs = [];
const form = document.querySelector(".new-item-form");
const typeInput = document.querySelector("#type");
const toFromInput = document.querySelector("#tofrom");
const detailsInput = document.querySelector("#details");
const amountInput = document.querySelector("#amount");
form.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    let newSub;
    if (typeInput.value === "invoice") {
        newSub = new Invoice(toFromInput.value, detailsInput.value, amountInput.valueAsNumber);
    }
    else {
        newSub = new Payment(toFromInput.value, detailsInput.value, amountInput.valueAsNumber);
    }
    docs.push(newSub);
    console.log(docs);
}

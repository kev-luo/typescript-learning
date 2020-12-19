import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
let docs = [];
const form = document.querySelector(".new-item-form");
const typeInput = document.querySelector("#type");
const toFromInput = document.querySelector("#tofrom");
const detailsInput = document.querySelector("#details");
const amountInput = document.querySelector("#amount");
const itemList = document.querySelector(".item-list");
form.addEventListener("submit", handleSubmit);
const displayList = new ListTemplate(itemList);
function handleSubmit(e) {
    e.preventDefault();
    let newSub;
    let values = [toFromInput.value, detailsInput.value, amountInput.valueAsNumber];
    if (typeInput.value === "invoice") {
        newSub = new Invoice(...values);
    }
    else {
        newSub = new Payment(...values);
    }
    displayList.render(newSub, typeInput.value, "end");
}

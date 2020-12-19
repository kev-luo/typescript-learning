import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docs: HasFormatter[] = [];

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const typeInput = document.querySelector("#type") as HTMLSelectElement;
const toFromInput = document.querySelector("#tofrom") as HTMLInputElement;
const detailsInput = document.querySelector("#details") as HTMLInputElement;
const amountInput = document.querySelector("#amount") as HTMLInputElement;
form.addEventListener("submit", handleSubmit);

function handleSubmit(e: Event) {
  e.preventDefault();

  let newSub: HasFormatter;

  if(typeInput.value === "invoice") {
    newSub = new Invoice(toFromInput.value, detailsInput.value, amountInput.valueAsNumber);
  } else {
    newSub = new Payment(toFromInput.value, detailsInput.value, amountInput.valueAsNumber);
  }

  docs.push(newSub);
  console.log(docs);
}
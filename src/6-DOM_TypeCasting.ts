const anchor = document.querySelector("a");
// question mark prevents an error if there are no anchor tags ("cannot read property href of undefined")
console.log(anchor?.href);

// alternatively we can postfix ! to remove null/undefined from the type
const anchor2 = document.querySelector("a")!;
console.log(anchor2.href);

// typescript knows this is going to be an HTMLFormElement
const formElem = document.querySelector("form");

// typescript only knows this is an Element since classes can be applied to any number of elements
// therefore we typecast to cast this type to HTMLFormElement
const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

// select each input field
const typeInput = document.querySelector("#type") as HTMLSelectElement;
const toFromInput = document.querySelector("#tofrom") as HTMLInputElement;
const detailsInput = document.querySelector("#details") as HTMLInputElement;
const amountInput = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", handleSubmit);

function handleSubmit(e: Event): void {
  e.preventDefault();
  console.log({
    type: typeInput.value,
    tofrom: toFromInput.value,
    details: detailsInput.value,
    // amount: amountInput.value,
    amount: amountInput.valueAsNumber
  });
}
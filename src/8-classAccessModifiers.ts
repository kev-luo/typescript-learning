// Access Modifiers
// =======================================================

class InvoicePrivate {
  // full access to read and modify
  public client: string;
  // readOnly access outside class
  readonly details: string;
  // no access outside class
  private amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}

const privInvoiceOne = new InvoicePrivate('kevin', 'work on portfolio website', 250);
const privInvoiceTwo = new InvoicePrivate('dylan', 'work on portfolio website', 200);

let privateInvoices: InvoicePrivate[] = [];

privateInvoices.push(privInvoiceOne, privInvoiceTwo);

privateInvoices.forEach(inv => {
  console.log(inv.client);
  console.log(inv.details);
  console.log(inv.format());
  // console.log(inv.amount); // Property 'amount' is private and only accessible within class 'InvoicePrivate'.
})

class InvPrivateShortHand {
  constructor(
    public client: string,
    readonly details: string,
    private amount: number,
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}

const privInvSHOne = new InvPrivateShortHand('kevin', 'work on portfolio website', 250);
const privInvSHTwo = new InvPrivateShortHand('dylan', 'work on portfolio website', 200);

let privInvoicesSH: InvPrivateShortHand[] = [];

privInvoicesSH.push(privInvSHOne, privInvSHTwo);

privInvoicesSH.forEach(inv => {
  console.log(inv.client);
  console.log(inv.details);
  console.log(inv.format());
  // console.log(inv.amount); // Property 'amount' is private and only accessible within class 'InvoicePrivate'.
})
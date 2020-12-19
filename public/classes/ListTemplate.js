// register a list container in the constructor
// create render method to render a new li to the container
// accepts args: invoice/payment, heading, position (start or end of ul)
// create html template (li, h4, p)
// add li template to start or end of list
export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    // position: 'start' | 'end' is a union type indicating the argument can only be one of those two strings
    render(item, heading, position) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");
        h4.innerText = heading;
        p.innerText = item.format();
        li.append(h4, p);
        if (position === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}

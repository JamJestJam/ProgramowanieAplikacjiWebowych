class Input {
    element = document.createElement('div');

    constructor(name: string, id: string, type:"number"|"text" = "number") {
        const input = document.createElement("input");
        const label = document.createElement("label");

        this.element.classList.add("input");
        label.textContent = name;
        input.placeholder = name;
        input.type = type;
        input.id = id;

        this.element.appendChild(input);
        this.element.appendChild(label);
    }
}

export default Input;
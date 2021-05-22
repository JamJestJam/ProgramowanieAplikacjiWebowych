class Button {
    element = document.createElement('button');

    constructor(text: string, click: (a?: MouseEvent) => void) {
        this.element.textContent = "Rozpocznij grę";
        this.element.addEventListener('click', click);
    }
}

export default Button;
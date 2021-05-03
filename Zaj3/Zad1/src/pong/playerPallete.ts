import Pallete from "./pallete";


export default class PlayerPallete extends Pallete {

    constructor() {
        super();
    }

    setPosition = (event: MouseEvent) => {
        event.stopPropagation();
        this.destination = event.offsetY;
    }
}
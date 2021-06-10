export default class TrackPad {
    element: HTMLDivElement;

    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('PongTrackPad');
    }
}
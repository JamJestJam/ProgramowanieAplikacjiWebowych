import Ball from "./ball";
import ComputerPallete from "./computerPallete";
import PlayerPallete from "./playerPallete";
import TrackPad from "./trackPad";

export default class Board {
    static width = 600;
    static height = 600;

    element: HTMLDivElement = document.createElement('div');;
    player: PlayerPallete = new PlayerPallete();;
    ball: Ball = new Ball();;
    computer: ComputerPallete = new ComputerPallete(this.ball);;

    constructor() {
        this.init();
    }

    init() {
        const trackPad = new TrackPad();
        this.element.classList.add('PongBoard');

        this.element.appendChild(this.player.element);
        this.element.appendChild(this.computer.element);
        this.element.appendChild(this.ball.element);
        this.element.appendChild(trackPad.element);

        this.ball.addElementToCheckCollision(this.player);
        this.ball.addElementToCheckCollision(this.computer);

        trackPad.element.addEventListener('mousemove', this.player.setPosition);

        this.tick();
    }

    tick = () => {
        this.ball.tick();
        this.computer.tick();
        this.player.tick();

        if (!this.ball.win())
            requestAnimationFrame(this.tick);
        else {
            alert("koniec gry");
            this.tick = () => { };
        }
    }

    mouseOver = (event: MouseEvent) => {
        console.log(event);
    }
}
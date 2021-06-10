import Ball from "./ball";
import Pallete from "./pallete";


export default class ComputerPallete extends Pallete {
    ball: Ball;
    constructor(ball: Ball) {
        super(false);
        this.ball = ball;
    }

    tick() {
        this.destination = this.ball.posY;
        super.tick();
    }
}
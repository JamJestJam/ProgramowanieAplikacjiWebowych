import Board from "./board";
import ball from "./ball";
import ICollision from "./ICollision";
import IGameObj from "./IGameObj";
import Ball from "./ball";

export default class Pallete implements IGameObj, ICollision {
    static width = 20;
    static height = 80;
    static max = 560;
    static min = 40;
    element: HTMLDivElement;
    position = 300;
    destination = 300;
    left = true;
    speed = 10;

    constructor(left = true) {
        this.element = document.createElement('div');
        this.element.classList.add('Pong');
        this.left = left;
    }

    tick(): void {
        let move = this.position - this.destination;
        if (Math.abs(move) > this.speed)
            move = this.speed * (Math.abs(move) / move);
        this.position -= move;

        if (this.position > Pallete.max)
            this.position = Pallete.max;
        else if (this.position < Pallete.min)
            this.position = Pallete.min;
        this.element.style.top = `${this.position}px`;
    }

    collision(ball: ball): void {
        if (this.left)
            this.leftCollision(ball);
        else
            this.rightCollision(ball);
    }

    private leftCollision(ball: ball) {
        if (ball.posX + ball.movX < Pallete.width && this.inTopBottom(ball)) {
            ball.movX = Math.abs(ball.movX);
        }
    }

    private rightCollision(ball: ball) {
        if (ball.posX + ball.movX > Board.width - Pallete.width && this.inTopBottom(ball)) {
            ball.movX = -Math.abs(ball.movX);
        }
    }

    private inTopBottom(ball: ball) {
        //top
        if (ball.posY - Ball.height / 2 > this.position + Pallete.height / 2) {
            console.log("za wysoko")
            return false;
        }
        if (ball.posY + Ball.height / 2 < this.position - Pallete.height / 2) {
            console.log("Za nisko")
            return false;
        }
        return true;
    }
}
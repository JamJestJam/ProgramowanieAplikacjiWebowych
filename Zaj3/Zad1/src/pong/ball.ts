import ICollision from "./ICollision";
import IGameObj from "./IGameObj";


export default class Ball implements IGameObj {
    static width = 20;
    static height = 20;

    element: HTMLDivElement;
    min: number = 10;
    max: number = 590;
    posX: number = 300;
    posY: number = 300;
    movX = -5;
    movY = 3;
    acceleration = 1;
    staticElements: ICollision[] = [];

    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('PongBall');
    }

    addElementToCheckCollision(element: ICollision) {
        this.staticElements.push(element);
    }

    tick(): void {
        this.move();
        this.bouncingTop();
        this.bouncingBottom();
        this.calcCollisions();

        this.element.style.top = `${this.posY}px`;
        this.element.style.left = `${this.posX}px`;
    }

    move() {
        this.posY += this.movY;
        this.posX += this.movX;
    }

    bouncingTop() {
        if (this.posY > this.max)
            this.movY = -Math.abs(this.movY);
    }

    bouncingBottom() {
        if (this.posY < this.min)
            this.movY = Math.abs(this.movY);
    }

    winRight = (): boolean => {
        if (this.posX > this.max) {
            this.posX = this.max - 1;
            this.movX = 0;
            this.movY = 0;
            return true;
        }
        return false;
    }

    winLeft = (): boolean => {
        if (this.posX < this.min) {
            this.posX = this.min + 1;
            this.movX = 0;
            this.movY = 0;
            return true;
        }
        return false;
    }

    calcCollisions() {
        this.staticElements.forEach(element => {
            element.collision(this);
        });
    }

    win = (): boolean => {
        return (this.winLeft() || this.winRight());
    }
}
import Ball from "./ball";

export default interface ICollision {
    collision(ball: Ball): void;
}
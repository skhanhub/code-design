import { Position } from "./position";
import Snake from "./snake";

export type Direction = {
    x: number
    y: number
}

export default class SnakeGame {
    snake: Snake;
    xSize: number;
    ySize: number;
    growTurn: number;
    numTurn: number
    gameOver: boolean;
    food: Array<Position>
    foodIndex: number;

    constructor(snake: Snake, xSize: number, ySize: number, growTurn: number, food: Array<Position>) {
        this.snake = snake
        this.xSize = xSize
        this.ySize = ySize
        this.growTurn = growTurn
        this.food = food
        this.gameOver = false
        this.numTurn = 1
        this.foodIndex = 0
    }

    private getNewHead(direction: Direction) {
        const currentHead = this.snake.getHead()
        const newHead: Position = {
            x: currentHead.x + direction.x,
            y: currentHead.y + direction.y
        }

        if (newHead.x < 0) newHead.x = this.xSize - 1
        if (newHead.y < 0) newHead.y = this.ySize - 1
        if (newHead.x >= this.xSize) newHead.x = 0
        if (newHead.y >= this.ySize) newHead.y = 0

        return newHead
    }

    moveSnake(direction: Direction) {
        console.log((this.gameOver));

        if (this.gameOver) return

        let newHead = this.getNewHead(direction)

        const shouldGrow = this.numTurn % this.growTurn === 0
        if (this.snake.move(newHead, shouldGrow) === false) {
            this.gameOver = true
            return
        }
        this.numTurn++

        if (this.foodIndex >= this.food.length) return
        const nextFood = this.food[this.foodIndex]
        if (newHead.x === nextFood.x && newHead.y === nextFood.y) {
            newHead = this.getNewHead(direction)
            if (this.snake.move(newHead, true) === false) {
                this.gameOver = true
                return
            }
            this.foodIndex++
        }

    }

    isGameOver() {
        return this.gameOver
    }
}
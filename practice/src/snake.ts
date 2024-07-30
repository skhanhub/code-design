import { Queue } from "@datastructures-js/queue";
import { Position } from "./position";


export default class Snake {
    private queue: Queue<Position>
    private snakeBody: Set<string>
    constructor(initialSize: number = 3) {
        this.queue = new Queue<Position>()
        this.snakeBody = new Set<string>()
        for (let i = 0; i < initialSize; i++) {
            const pos = { x: i, y: 0 }
            this.queue.enqueue(pos)
            this.snakeBody.add(`${i}, 0`)
        }
    }

    move(newHead: Position, grow: boolean): boolean {
        console.log(this.queue.back(), this.queue.front());

        if (grow === false) {
            const tail = this.queue.dequeue()
            this.snakeBody.delete(`${tail.x}, ${tail.y}`)
        }

        const key = `${newHead.x}, ${newHead.y}`
        if (this.snakeBody.has(key)) return false

        this.snakeBody.add(key)
        this.queue.enqueue(newHead)
        return true
    }

    getHead(): Position {
        return this.queue.back()
    }


}
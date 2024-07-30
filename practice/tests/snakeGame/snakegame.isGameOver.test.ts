import Snake from "../../src/snake"
import SnakeGame from "../../src/snakeGame"

describe("test isGameOver method", () => {
    test("should return false as snake should not hit the body", () => {
        const snake = new Snake(3)
        const snakeGame = new SnakeGame(snake, 5, 5, 2, [{ x: 4, y: 0 }])

        snakeGame.moveSnake({ x: 1, y: 0 })
        snakeGame.moveSnake({ x: 1, y: 0 })

        expect(snakeGame.isGameOver()).toBe(false)
    })

    test("should return true as snake should hit the body", () => {
        const snake = new Snake(3)
        const snakeGame = new SnakeGame(snake, 5, 5, 2, [{ x: 4, y: 0 }])

        snakeGame.moveSnake({ x: 1, y: 0 })
        snakeGame.moveSnake({ x: 1, y: 0 })
        snakeGame.moveSnake({ x: 1, y: 0 })
        snakeGame.moveSnake({ x: 1, y: 0 })
        snakeGame.moveSnake({ x: 1, y: 0 })
        snakeGame.moveSnake({ x: 1, y: 0 })
        snakeGame.moveSnake({ x: 1, y: 0 })
        snakeGame.moveSnake({ x: 1, y: 0 })
        snakeGame.moveSnake({ x: 1, y: 0 })

        expect(snakeGame.isGameOver()).toBe(true)
    })
})
import Snake from "./snake";
import SnakeGame from "./snakeGame";

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
import { canvasParam } from "../../canvasParam.js"
import { generateApple } from "../apple/generate-apple.js"
import { gameVariable, randomPosition } from "../game-variables.js"
import { changeDirection } from "./keywords.js"



export function drawSnake() {
    gameVariable.snake.forEach( function(block) {
      canvasParam.c.fillStyle = "#69b040"
      canvasParam.c.strokeStyle = "#557f3e"
      
      canvasParam.c.fillRect(
        block.x, 
        block.y, 
        10, 
        10 
        )
      
      canvasParam.c.strokeRect(
        block.x, 
        block.y, 
        10, 
        10
        )
    })
  };


 export function moveSnake() {
    let head = {
      x: gameVariable.snake[0].x + gameVariable.dx,
      y: gameVariable.snake[0].y + gameVariable.dy
    };
    gameVariable.snake.unshift(head);

    let hasEatenapple = gameVariable.snake[0].x === gameVariable.apple.x && gameVariable.snake[0].y === gameVariable.apple.y
      
    if(hasEatenapple) {
        generateApple()
        gameVariable.score += gameVariable.speed
        gameVariable.scoreTag.innerText = "Score : " + gameVariable.score
  
        // eatsong.play();
    } else {
      gameVariable.snake.pop();
    }
  };

  export function respawnSnakeOnRandomLocation() {
    gameVariable.snake[0].x = randomPosition( 0, canvasParam.canvas.width - 10 )
    gameVariable.snake[0].y = randomPosition( 0, canvasParam.canvas.height - 10 )
  }


  changeDirection();
import { canvasParam, selectedSnakeColor } from "../../canvasParam.js"
import { generateApple } from "../apple/generate-apple.js"
import { gameVariable, randomPosition } from "../interface.js"
import { changeDirection } from "./keywords.js"



export function drawSnake() {
    gameVariable.snake.forEach( function(block) {
      const adjustPosition = 0.5;

      canvasParam.c.fillStyle = "whitesmoke";
      canvasParam.c.fillRect(
        block.x + adjustPosition, 
        block.y + adjustPosition, 
        19,
        19
        );
        
      selectedSnakeColor(gameVariable.colorSnake.value);
      canvasParam.c.fillRect(
        block.x + adjustPosition + 2,
        block.y + adjustPosition + 2, 
        15,
        15 
        );

      canvasParam.c.strokeRect(
        block.x, 
        block.y, 
        20, 
        20
        );

    })
  };


  export function spawnSnake() {
    let snakeLength = 3;
    let strokeRectDimension = 20; 
    let positionX = 200; 
    let positionY = 100;

    gameVariable.snake = [];

    for (let i = 0; i < snakeLength; i++) {
      gameVariable.snake.push({ 
        x: positionX - i * strokeRectDimension, 
        y: positionY 
      })
    }
  };

  export function moveSnake() {
    let head = {
      x: gameVariable.snake[0].x + gameVariable.dx,
      y: gameVariable.snake[0].y + gameVariable.dy
    };
    gameVariable.snake.unshift(head);

    let tolerance = 15;
    let hasEatApple = false;

    if (
      Math.abs(head.x - gameVariable.apple.x + 15) <= tolerance && 
      Math.abs(head.y - gameVariable.apple.y + 15) <= tolerance
      ) {
        hasEatApple = true;
    }
      
    if(hasEatApple) {
      generateApple();
      gameVariable.score += gameVariable.level;
      gameVariable.scoreTag.innerText = "Score : " + gameVariable.score;
        // eatsong.play();
    } else {
      gameVariable.snake.pop();
    }
  };

  export function respawnSnakeOnRandomLocation() {
    gameVariable.snake[0].x = randomPosition( 0, canvasParam.canvas.width - 10 )
    gameVariable.snake[0].y = randomPosition( 0, canvasParam.canvas.height - 10 )
  };

  changeDirection();
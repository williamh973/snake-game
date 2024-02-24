import { canvasParam } from "../canvasParam.js";
import { gameVariable, substractLife } from "./interface.js";
import { respawnSnakeOnRandomLocation } from "./snake/draw-snake.js";


export function snakeCollision() {
    for(let i = 1; i < gameVariable.snake.length; i++) {
        if(
           gameVariable.snake[i].x === gameVariable.snake[0].x &&   
           gameVariable.snake[i].y === gameVariable.snake[0].y
          ) {
           return true;
         } 
     };
};


export function snakeCheckOverTheCanvasLimits() {
  checkLeftCollision();
  checkRightCollision();
  checkTopCollision();  
  checkBelowCollision();
};


function checkLeftCollision() {
  if(gameVariable.snake[0].x < 0) {
    substractLife();
    respawnSnakeOnRandomLocation();
    // LifeLost.play();
  }
};


function checkRightCollision() {
  if(gameVariable.snake[0].x > canvasParam.canvas.width - 10) {
    substractLife();
    respawnSnakeOnRandomLocation();
  }
};


function checkTopCollision() {
  if(gameVariable.snake[0].y < 0) {
    substractLife();
    respawnSnakeOnRandomLocation();
    // LifeLost.play();
  }
};


function checkBelowCollision() {
  if(gameVariable.snake[0].y > canvasParam.canvas.height - 10) {
    substractLife();
    respawnSnakeOnRandomLocation();
    // LifeLost.play();
  }
};

export function isGameOver() {
  if (snakeCollision() || gameVariable.life === 0) {
    clearInterval(gameVariable.looping);
    drawTextGameOver();  
    gameVariable.score = 0;
    gameVariable.life = 1;
    return;
  }
}


  export function drawTextGameOver() {
    canvasParam.c.font = '50px Arial';
    canvasParam.c.fillStyle = 'black';
    canvasParam.c.strokeStyle = 'white';
    canvasParam.c.lineWidth = 3; 
    canvasParam.c.textAlign = 'center';
    canvasParam.c.textBaseline = 'middle';
    const text = 'GAME OVER';
    const x = canvasParam.canvas.width / 2;
    const y = canvasParam.canvas.height / 2;
    canvasParam.c.strokeText(text, x, y);
    canvasParam.c.fillText(text, x, y);
};
  
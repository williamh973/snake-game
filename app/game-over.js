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
}


export function snakeCheckOverTheCanvasLimits() {

  const lw = gameVariable.snake[0].x < 0
    if( lw ) {
      substractLife();
      respawnSnakeOnRandomLocation();
      // LifeLost.play();
  }
  
  const rw = gameVariable.snake[0].x > canvasParam.canvas.width - 10
    if( rw ) {
      substractLife();
      respawnSnakeOnRandomLocation();
    }
  
  const tw = gameVariable.snake[0].y < 0
    if( tw ) {
      substractLife();
      respawnSnakeOnRandomLocation();
      // LifeLost.play();
    }
  
  const bw = gameVariable.snake[0].y > canvasParam.canvas.height - 10 
    if( bw ) {
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
      canvasParam.c.font = '40px Arial';
      canvasParam.c.fillStyle = 'black';
      canvasParam.c.fillText(
        'GAME OVER', 
        canvasParam.canvas.width / 2 - 110, 
        canvasParam.canvas.height / 2
        );
    };
  
  
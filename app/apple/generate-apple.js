import { canvasParam } from "../../canvasParam.js";
import { gameVariable, randomPosition } from "../interface.js";

export function generateApple() {
    gameVariable.apple.x = randomPosition(0, canvasParam.canvas.width - 10);
    gameVariable.apple.y = randomPosition(0, canvasParam.canvas.height - 10);

    gameVariable.snake.forEach ( function(block) {
      let eaten = block.x == gameVariable.apple.x && block.y == gameVariable.apple.y
        
        if(eaten) { 
          generateApple();
        };
    })
  };



    
export function spawnApple() {
  canvasParam.c.beginPath()
  canvasParam.c.arc(
    gameVariable.apple.x + 5, 
    gameVariable.apple.y + 5, 
    8, 
    0, 
    Math.PI * 2
    )
  
    canvasParam.c.fillStyle = "#e74c3c"
    canvasParam.c.fill()
    
    canvasParam.c.font = '15px Arial';
    canvasParam.c.fillStyle = '#2ecc71';
    canvasParam.c.fillText(
      '√', 
      gameVariable.apple.x + 1.1, 
      gameVariable.apple.y 
      );
    
    canvasParam.c.save();
    canvasParam.c.scale(1, 1.5);
    
    let appleRadius = 10;
  
    canvasParam.c.beginPath();
    canvasParam.c.arc(
      gameVariable.apple.x + appleRadius - 4, 
      (
        gameVariable.apple.y + appleRadius) / 1.5301, 
        appleRadius / 4, 
        2, 
        Math.PI * 2
        );
    canvasParam.c.fillStyle = "#ed7365";
    canvasParam.c.fill();
    canvasParam.c.closePath();
    
    canvasParam.c.restore();
};    

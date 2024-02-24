import { canvasParam } from "../../canvasParam.js";
import { gameVariable, randomPosition } from "../interface.js";

export function generateApple() {
    gameVariable.apple.x = randomPosition(0, canvasParam.canvas.width);
    gameVariable.apple.y = randomPosition(0, canvasParam.canvas.height);
  };

    
export function spawnApple() {
  canvasParam.c.beginPath()
  canvasParam.c.arc(
    gameVariable.apple.x, 
    gameVariable.apple.y, 
    10, 
    0, 
    Math.PI * 2
    )
  
    canvasParam.c.fillStyle = "#e74c3c"
    canvasParam.c.fill()
    
    canvasParam.c.font = '16px Arial';
    canvasParam.c.fillStyle = '#2ecc71';
    canvasParam.c.fillText(
      '√', 
      gameVariable.apple.x - 5, 
      gameVariable.apple.y - 5
      );
    
    canvasParam.c.save();
    canvasParam.c.scale(1, 2);
    
    canvasParam.c.restore();
};    
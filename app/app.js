import { canvasParam, selectedCanvasColor } from "../canvasParam.js";
import { generateApple, spawnApple } from "./apple/generate-apple.js";
import { isGameOver, snakeCheckOverTheCanvasLimits } from "./game-over.js";
import { displayLifeAndScore, gameVariable } from "./interface.js";
import { collideHeart, drawHeart, spanwHeart } from "./heart/heart.js";
import { drawSnake, moveSnake, spawnSnake } from "./snake/draw-snake.js";

export function startGame() {
    initGame();
    gameVariable.looping = setInterval(loop, 1000 - (gameVariable.level * 100) );
    console.log(gameVariable.looping);
};


export function loop() { 
  clearBoard();
  spawnApple();
  moveSnake();
  drawSnake();
  snakeCheckOverTheCanvasLimits();
  drawHeart();
  collideHeart();
  spanwHeart();
  isGameOver();
};


function initGame() {
    spawnSnake();
    loop();
    displayLifeAndScore();
  };
  initGame();
  

export function clearBoard() {
    selectedCanvasColor(gameVariable.colorMenu.value);
  
    canvasParam.c.fillRect(
        0,
        0,
        canvasParam.canvas.width,
        canvasParam.canvas.height
    );

    canvasParam.c.strokeRect(
        0,
        0,
        canvasParam.canvas.width,
        canvasParam.canvas.height
    );
};

spawnApple();
generateApple(); 
import { canvasParam } from "../canvasParam.js";
import { generateApple, spawnApple } from "./apple/generate-apple.js";
import { isGameOver, checkCanvasCollision } from "./game-over.js";
import { displayLifeAndScore, gameVariable } from "./interface.js";
import { collideHeart, drawHeart, spanwHeart } from "./heart/heart.js";
import { drawSnake, moveSnake, spawnSnake } from "./snake/draw-snake.js";
import { theThemeSong } from "./assets/audios/audio-assets.js";


export function startGame(selectedColor) {
    selectedColor = gameVariable.colorMenu.value;
    initGame(selectedColor);
    gameVariable.looping = setInterval(loop, gameVariable.intervalSpeed - (gameVariable.level * 100));
    theThemeSong.play();
};


export function loop(selectedColor) { 
    selectedColor = gameVariable.colorMenu.value;
    clearBoard(selectedColor);
    spawnApple();
    moveSnake();
    drawSnake();
    checkCanvasCollision();
    drawHeart();
    collideHeart();
    spanwHeart();
    isGameOver();
};


export function clearBoard(selectedColor) {
    
  canvasParam.c.fillStyle = selectedColor;
  canvasParam.c.strokeStyle = "black";
  
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

function initGame(selectedColor) {
    spawnSnake();
    displayLifeAndScore();
    loop(selectedColor);
};
initGame();
spawnApple();
generateApple(); 
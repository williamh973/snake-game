import { selectedCanvasColor, selectedSnakeExtColor, selectedSnakeIntColor } from "../canvasParam.js";
import { clearBoard, startGame } from "./app.js";
import { drawSnake } from "./snake/draw-snake.js";

export const gameVariable = {
   snake : [],
   apple : {},
   heart : {},
   level : 1,
   score : 0,
   addLife : 1,
   life : 1,
   looping : null,
   intervalSpeed : 1000,  
   dx : 20,
   dy : 0,
   scoreTag : document.getElementById('score'), 
   lifeTag : document.getElementById("life"),
   btnLevel : document.getElementById('btn-level'),
   btnPlay : document.getElementById("btn-play"),
   levelMenu : document.getElementById('btn-level'),
   colorMenu : document.getElementById('color-menu'),
   colorIntSnake : document.getElementById('color-int-snake'),
   colorExtSnake : document.getElementById('color-ext-snake')
};
 

export function displayLifeAndScore() { 
   gameVariable.scoreTag.innerText = "Score " + gameVariable.score;
   gameVariable.lifeTag.innerText = "Life " + gameVariable.life;
};

export function addLife() {
   gameVariable.life += gameVariable.addLife
   gameVariable.lifeTag.innerText = "Life: " + gameVariable.life
};

export function substractLife() {
   gameVariable.life -= 1;
   gameVariable.lifeTag.innerText = "Life : " + gameVariable.life
};


export function randomPosition(min, max) {
   return Math.round((Math.random() * (max - min) + min) / 10) * 10
};


gameVariable.btnPlay.addEventListener("click", function() {
  const selectedColor = gameVariable.colorMenu.value;
  console.log(selectedColor);
  console.log("le bouton 'Play' a été cliqué, le jeu commence");
  startGame(selectedColor);
});


gameVariable.colorIntSnake.addEventListener('change', function() {
  const selectedIntColor = gameVariable.colorIntSnake.value;
  selectedSnakeIntColor(selectedIntColor);
  drawSnake();
});

gameVariable.colorExtSnake.addEventListener('change', function() {
   const selectedExtColor = gameVariable.colorExtSnake.value;
   selectedSnakeExtColor(selectedExtColor);
   drawSnake();
 });

gameVariable.colorMenu.addEventListener('change', function() {
   const selectedColor = gameVariable.colorMenu.value;
   clearBoard(selectedColor);
   drawSnake();
});

gameVariable.levelMenu.addEventListener('change', function() {
  const selectedLevel = gameVariable.levelMenu.value;
  gameVariable.level = selectedLevel;
});



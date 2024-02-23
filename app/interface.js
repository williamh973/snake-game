import { selectedCanvasColor } from "../canvasParam.js";
import { startGame } from "./app.js";

export const gameVariable = {
   snake : [],
   apple : {},
   heart : {},
   dx : 10,
   dy : 0,
   speed : 1,  
   score : 0,
   addLife : 1,
   life : 1,
   looping : null,
   scoreTag : document.getElementById('score'), 
   lifeTag : document.getElementById("life"),
   btnLevel : document.getElementById('btn-level'),
   btnPlay : document.getElementById("btn-play"),
   levelMenu : document.getElementById('btn-level'),
   colorMenu : document.getElementById('color-menu')
};
 
gameVariable.btnLevel.addEventListener("change", changeSpeed);
gameVariable.btnPlay.addEventListener("click", startGame);


gameVariable.levelMenu.addEventListener('change', function() {
  const selectedLevel = gameVariable.levelMenu.value;

});

gameVariable.colorMenu.addEventListener('change', function() {
  const selectedColor = gameVariable.colorMenu.value;
   selectedCanvasColor(selectedColor);
});


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


export function changeSpeed() {
   gameVariable.speed = parseInt(this.value);
};

export function randomPosition(min, max) {
   return Math.round((Math.random() * (max - min) + min) / 10) * 10
 };
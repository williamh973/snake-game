import { canvasParam } from "../../canvasParam.js";
import { theAddLifeSong } from "../assets/audios/audio-assets.js";
import { gameVariable, randomPosition } from "../interface.js";

export function drawHeart() {
  canvasParam.c.beginPath();
  canvasParam.c.font = "20px Arial";
  canvasParam.c.fillStyle = "#2ecc71";
  canvasParam.c.fillText(
    "♥",
    gameVariable.heart.x + 0,
    gameVariable.heart.y + 10
  );
}

export function spanwHeart() {
  let delaySpawnHeart = 0;
  let isHeartSpawned = false;

  if (delaySpawnHeart++ > 115) {
    delaySpawnHeart = 0;

    if (Math.random() * 100 > 75) {
      isHeartSpawned = true;
      generateHeart();
    } else {
      isHeartSpawned = false;
    }
  }
}

export function generateHeart() {
  gameVariable.heart.x = randomPosition(1, canvasParam.canvas.width - 9);
  gameVariable.heart.y = randomPosition(1, canvasParam.canvas.height - 9);
}

export function removeHeart() {
  gameVariable.heart.x = -9999;
  gameVariable.heart.y = -9999;
}

export function collideHeart() {
  let hasEatenHeart =
    gameVariable.snake[0].x === gameVariable.heart.x &&
    gameVariable.snake[0].y === gameVariable.heart.y;
  if (hasEatenHeart) {
    theAddLifeSong.play();
    removeHeart();
    addLife();
  }
}

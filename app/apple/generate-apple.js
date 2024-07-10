import { canvasParam } from "../../canvasParam.js";
import { gameVariable, randomPosition } from "../interface.js";

export function generateApple() {
  gameVariable.apple.x = randomPosition(10, canvasParam.canvas.width - 10);
  gameVariable.apple.y = randomPosition(10, canvasParam.canvas.height - 10);
}

export function spawnApple() {
  canvasParam.c.beginPath();
  canvasParam.c.arc(
    gameVariable.apple.x,
    gameVariable.apple.y,
    8,
    0,
    Math.PI * 2
  );

  canvasParam.c.fillStyle = "#e74c3c";
  canvasParam.c.fill();

  canvasParam.c.font = "15px Arial";
  canvasParam.c.fillStyle = "#2ecc71";
  canvasParam.c.fillText(
    "√",
    gameVariable.apple.x - 5,
    gameVariable.apple.y - 5
  );

  canvasParam.c.save();
  canvasParam.c.scale(1, 2);

  canvasParam.c.restore();
}

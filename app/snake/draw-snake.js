import { theEatSong } from "../assets/audios/audio-assets.js";
import {
  canvasParam,
  selectedSnakeExtColor,
  selectedSnakeIntColor,
} from "../../canvasParam.js";
import { generateApple } from "../apple/generate-apple.js";
import { gameVariable, randomPosition } from "../interface.js";
import { loop } from "../app.js";

export function drawSnake() {
  gameVariable.snake.forEach((block) => {
    const adjustPosition = 2.5;

    canvasParam.c.fillStyle = "whitesmoke";
    canvasParam.c.fillRect(
      block.x + adjustPosition,
      block.y + adjustPosition,
      15,
      15
    );

    selectedSnakeIntColor(gameVariable.colorIntSnake.value);
    canvasParam.c.fillRect(
      block.x + adjustPosition + 2.5,
      block.y + adjustPosition + 2.5,
      10,
      10
    );

    selectedSnakeExtColor(gameVariable.colorExtSnake.value);
  });
}

export function spawnSnake() {
  let snakeLength = 3;
  let strokeRectDimension = 20;
  let positionX = 200;
  let positionY = 100;

  gameVariable.snake = [];

  for (let i = 0; i < snakeLength; i++) {
    gameVariable.snake.push({
      x: positionX - i * strokeRectDimension,
      y: positionY,
    });
  }
}

export function moveSnake() {
  let head = {
    x: gameVariable.snake[0].x + gameVariable.dx,
    y: gameVariable.snake[0].y + gameVariable.dy,
  };
  gameVariable.snake.unshift(head);

  let tolerance = 15;
  let hasEatApple = tolerenceForEat(tolerance, head);

  if (hasEatApple) {
    generateApple();
    gameVariable.score += parseInt(gameVariable.level);
    gameVariable.scoreTag.innerText = "Score " + gameVariable.score;
    gameVariable.intervalSpeed -= 2;
    clearInterval(gameVariable.looping);
    gameVariable.looping = setInterval(
      loop,
      gameVariable.intervalSpeed - gameVariable.level * 100
    );
    theEatSong.play();
  } else {
    gameVariable.snake.pop();
  }
}

export function respawnSnakeOnRandomLocation() {
  gameVariable.snake[0].x = randomPosition(0, canvasParam.canvas.width - 10);
  gameVariable.snake[0].y = randomPosition(0, canvasParam.canvas.height - 10);
}

function tolerenceForEat(tolerance, head) {
  return (
    Math.abs(head.x - gameVariable.apple.x + 15) <= tolerance &&
    Math.abs(head.y - gameVariable.apple.y + 15) <= tolerance
  );
}

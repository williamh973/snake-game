import { gameVariable } from "../interface.js";

let keys = {
  ArrowLeft: { pressed: false },
  ArrowRight: { pressed: false },
  ArrowUp: { pressed: false },
  ArrowDown: { pressed: false },
  q: { pressed: false },
  d: { pressed: false },
  z: { pressed: false },
  s: { pressed: false },
  space: { pressed: false },
};

let direction = {
  get snakeGoingUp() {
    return gameVariable.dy === -20;
  },
  get snakeGoingDown() {
    return gameVariable.dy === 20;
  },
  get snakeGoingRight() {
    return gameVariable.dx === 20;
  },
  get snakeGoingLeft() {
    return gameVariable.dx === -20;
  },
};

export function changeDirection() {
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "z":
        keys.z.pressed = true;
        snakeGoToUp();
        break;
      case "q":
        keys.q.pressed = true;
        snakeGoToLeft();
        break;
      case "d":
        keys.d.pressed = true;
        snakeGoToRight();
        break;
      case "s":
        keys.s.pressed = true;
        snakeGoToDown();
        break;
      case "ArrowUp":
        keys.ArrowUp.pressed = true;
        snakeGoToUp();
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = true;
        snakeGoToLeft();
        break;
      case "ArrowRight":
        keys.ArrowRight.pressed = true;
        snakeGoToRight();
        break;
      case "ArrowDown":
        keys.ArrowDown.pressed = true;
        snakeGoToDown();
        break;
      case " ":
        break;
    }
  });

  document.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "z":
        keys.z.pressed = false;
        break;
      case "q":
        keys.q.pressed = false;
        break;
      case "d":
        keys.d.pressed = false;
        break;
      case "s":
        keys.s.pressed = false;
        break;
      case "ArrowUp":
        keys.ArrowUp.pressed = false;
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = false;
        break;
      case "ArrowRight":
        keys.ArrowRight.pressed = false;
        break;
      case "ArrowDown":
        keys.ArrowDown.pressed = false;
        break;
    }
  });

  function snakeGoToUp() {
    if ((keys.z.pressed || keys.ArrowUp.pressed) && !direction.snakeGoingDown) {
      (gameVariable.dx = 0), (gameVariable.dy = -20);
    }
  }

  function snakeGoToLeft() {
    if (
      (keys.q.pressed || keys.ArrowLeft.pressed) &&
      !direction.snakeGoingRight
    ) {
      (gameVariable.dx = -20), (gameVariable.dy = 0);
    }
  }

  function snakeGoToRight() {
    if (
      (keys.d.pressed || keys.ArrowRight.pressed) &&
      !direction.snakeGoingLeft
    ) {
      (gameVariable.dx = 20), (gameVariable.dy = 0);
    }
  }

  function snakeGoToDown() {
    if ((keys.s.pressed || keys.ArrowDown.pressed) && !direction.snakeGoingUp) {
      (gameVariable.dx = 0), (gameVariable.dy = 20);
    }
  }
}



export const canvasParam = {
  canvas : document.getElementById("canvas"),
  c : canvas.getContext("2d"),
};

export function selectedCanvasColor(selectedColor) {
  canvasParam.c.fillStyle = selectedColor;
  canvasParam.c.strokeStyle = selectedColor;
  };

export function selectedSnakeIntColor(selectedIntColor) {
  canvasParam.c.fillStyle = selectedIntColor;
  };

  export function selectedSnakeExtColor(selectedExtColor) {
    canvasParam.c.strokeStyle = selectedExtColor;
    };


canvasParam.canvas.width = 700; 
canvasParam.canvas.height = 540;



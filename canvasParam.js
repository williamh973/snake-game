

export const canvasParam = {
  canvas : document.getElementById("canvas"),
  c : canvas.getContext("2d"),
};

export function selectedCanvasColor(selectedColor) {
  canvasParam.c.fillStyle = selectedColor;
  canvasParam.c.strokeStyle = selectedColor;
  };

export function selectedSnakeColor(selectedColor) {
  canvasParam.c.fillStyle = selectedColor;
  canvasParam.c.strokeStyle = selectedColor;
  };


canvasParam.canvas.width = 700; 
canvasParam.canvas.height = 540;



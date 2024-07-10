const SHADOW_BLUR = 20;
const SHADOW_OFFSET_X = 0;
const SHADOW_OFFSET_Y = 0;

export const canvasParam = {
  canvas: document.getElementById("canvas"),
  c: canvas.getContext("2d"),
};

export function selectedCanvasColor(selectedColor) {
  canvasParam.c.fillStyle = selectedColor;
  canvasParam.c.strokeStyle = selectedColor;
}

export function selectedSnakeIntColor(selectedIntColor) {
  canvasParam.c.fillStyle = selectedIntColor;
}

export function selectedSnakeExtColor(selectedExtColor) {
  canvasParam.c.strokeStyle = selectedExtColor;
  canvasParam.c.shadowColor = selectedExtColor;
  canvasParam.c.shadowBlur = SHADOW_BLUR;
  canvasParam.c.shadowOffsetX = SHADOW_OFFSET_X;
  canvasParam.c.shadowOffsetY = SHADOW_OFFSET_Y;
}

canvasParam.canvas.width = 700;
canvasParam.canvas.height = 540;

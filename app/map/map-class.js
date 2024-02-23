export class Map {
  constructor() {
      this.position = {
          x: 0,
          y: 0
      }

      this.image = theMap
      this.width = theMap.width 
      this.height = theMap.height  
  }
  draw() {
     canvasParam.c.drawImage(this.image, this.position.x, this.position.y)
  }
}

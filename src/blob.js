class Blobbo {
  constructor() {
    this.numOfPoints = 360
  }

  draw() {
    noStroke()
    fill('#91fc9e')
    for ( let num = 0; num < this.numOfPoints; num += 1) {
      let x = 100 + num * 2
      let y = 100
      circle(x, y, 20)
    }


  }
}
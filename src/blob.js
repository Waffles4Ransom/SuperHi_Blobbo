class Blobbo {
  constructor() {
    this.numOfPoints = 360
  }

  draw() {
    noStroke()
    fill('#91fc9e')
    for ( let num = 0; num < this.numOfPoints; num += 1) {
      let h = 70 * sin(TWO_PI * num / this.numOfPoints)

      let x = 100 + num * 2
      let y = 100 + h
      circle(x, y, 2)
    }


  }
}
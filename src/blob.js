class Blobbo {
  constructor() {
    this.numOfPoints = 500
    this.time = 0
  }

  wave(num, amp, freq) {
    return amp * sin(freq * TWO_PI * num / this.numOfPoints + this.time)
  }

  draw() {
    noStroke()
    fill('#91fc9e')
    beginShape()
    for ( let num = 0; num < this.numOfPoints; num += 1) {
      let angle = TWO_PI * num / this.numOfPoints
      let r = 250 + this.wave(num, 20, 5) + this.wave(num, 20, 3)
      let x = (windowWidth / 2) + r * cos(angle)
      let y = (windowHeight / 2) + r * sin(angle)
      vertex(x, y)
    }
    endShape()
    this.time += 0.01
  }
}
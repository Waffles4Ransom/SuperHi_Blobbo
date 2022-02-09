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
    for ( let num = 0; num < this.numOfPoints; num += 1) {
      let h = this.wave(num, 70, 5)
      let x = 100 + num * 2
      let y = 100 + h
      circle(x, y, 2)
    }
    this.time += 0.01
  }
}
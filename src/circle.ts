import P5 from 'p5';
import { getScreenDiameter, STROKE_COL } from '.';

const inverse = true

export class Circle {
  constructor(private offset = 0) {}

  draw(p5: P5) {
    const maxSize = getScreenDiameter(p5)

    const size = ((p5.millis()/10) + this.offset) % maxSize
    const offset = Math.sin(this.offset * p5.millis() / 2e6) * 2
    const opacity = p5.map(size, 0, maxSize, inverse ? 0 : 255, inverse ? 255 : 0)

    p5.stroke(STROKE_COL, opacity)
    p5.circle(0, 0, size + offset)
  }
}

import P5 from 'p5'
import { Circle } from './circle'
import { range } from 'lodash'

export const STROKE_COL = 255
const CIRCLE_COUNT = 96

const sketch = (p5: P5) => {
  const circles: Circle[] = []

  p5.windowResized = () => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight)
  }

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
    p5.pixelDensity(1)

    p5.noFill()
    p5.strokeWeight(8)
    p5.stroke(STROKE_COL)

    range(CIRCLE_COUNT).forEach(i => (
      circles.push(new Circle(i * 100))
    ))
}

  p5.draw = () => {
    p5.background(0);
    p5.translate(p5.width / 2, p5.height / 2)

    circles.forEach(c => c.draw(p5))
  }
}

new P5(sketch)

import P5 from 'p5'

const sketch = (p5: P5) => {
  p5.windowResized = () => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight)
  }

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
    p5.frameRate(60)

    p5.rectMode(p5.CENTER)
  }

  p5.draw = () => {
    p5.background(0);
    p5.translate(p5.width / 2, p5.height / 2)

    p5.rect(0, 0, 100, 100)
  }
}

new P5(sketch)

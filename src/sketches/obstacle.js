export default class Obstacle {
  
  constructor(p, score) {
    this.pos = p.createVector(-10, p.random(0, p.windowHeight));
    this.speed = p.createVector(p.random(1, 5), 0);
    this.size = 60;
    this.img = p.loadImage(require('../assets/bird.svg'));
  }
  render(p) {
    // p.ellipse(this.pos.x, this.pos.y, this.size, this.size);
    p.image(this.img, this.pos.x-30, this.pos.y-30, this.size, this.size)
  }

  move(p) {
    this.pos.add(this.speed);
  }

  offscreen(p) {
    if(this.pos.x > p.windowWidth){
        this.pos.x = 0;
        this.pos.y = p.random(0, p.windowHeight);
        this.pos.add(this.speed.x+=1);
      }
  }

  isAlive(p) {
    if (this.pos.x<p.width) {
      return true;
    }
    return false;
  }
}

export default class Laser {

  constructor(p){
    this.pos = p.createVector(165, p.mouseY);
    this.update = () => {
    this.pos.add(10, 0);
    }
  }

  render(p) {
    p.push();
    p.stroke(255);
    p.strokeWeight(4);
    p.point(this.pos.x, this.pos.y);
    p.pop();
  }

  hits(p, asteroid) {
    let dist = p.dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
    if (dist < asteroid.r){
      return true;
    }
    else {
      return false;
    }
  }

  offscreen(p) {
    if (this.pos.x > p.width || this.pos.x < 0) {
      return true;
    }
    if (this.pos.y > p.height || this.pos.y < 0) {
      return true;
    }
    return false;
  }
}
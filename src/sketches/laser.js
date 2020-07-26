export default function Laser(p) {
  this.pos = p.createVector(165, p.mouseY);
  this.update = () => {
    this.pos.add(10, 0);
  }

  this.render = () => {
    p.push();
    p.stroke(255);
    p.strokeWeight(4);
    p.point(this.pos.x, this.pos.y);
    p.pop();
  }

  this.hits = (asteroid) => {
    let d = p.dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
    if (d < asteroid.r){
      return true;
    } 
    else {
      return false;
    }
  }

  this.offscreen = () => {
    if (this.pos.x > p.width || this.pos.x < 0) {
      return true;
    } 
    if (this.pos.y > p.height || this.pos.y < 0) {
      return true;
    }
    return false;
  }
}
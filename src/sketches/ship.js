export default function Ship(p) {
  this.pos = p.createVector(p.width / 2, p.height / 2);
  this.r = 20;


  this.render = () => {
    p.push();
    p.translate(150, p.mouseY);
    p.rotate(3.15 / 2);
    p.fill(0);
    p.stroke(255);
    p.triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
    p.pop();;
  }

  this.hits = (asteroid) => {
    let d = p.dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
    
    if(d < this.r + asteroid.r){
      return true;
    }
    else{
      return false;
    }
  }
}
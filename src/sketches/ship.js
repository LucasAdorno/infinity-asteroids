export default class Ship {

  constructor(p) {
    this.r = 20;
  }


  render(p) {
    p.push();
    p.translate(150, p.mouseY || p.windowHeight/2 );
    p.fill(0);
    p.stroke(255);
    p.strokeWeight(3);
    p.triangle(-this.r, -this.r, this.r, 0, -this.r, this.r);
    p.pop();;
  }

  hits(p, asteroid) {
    let dist = p.dist(150, p.mouseY, asteroid.pos.x, asteroid.pos.y);
    if(dist < this.r + asteroid.r){
      return true;
    }
    else{
      return false;
    }
  }
}
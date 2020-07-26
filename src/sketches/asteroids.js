export default function Asteroid (p,pos, r) {

  let upVel = 5;

  if (pos){
    this.pos = p.createVector(pos.x,pos.y+p.random(-20,20));
  }
  else {
    this.pos = p.createVector(window.innerWidth+p.random(500,1000), p.random(p.height));
  }
  if (r){
    this.r = r*0.5;
  }
  else {
    this.r = p.random(15,50);
  }

  this.total = p.floor(p.random(5, 15));
  this.offset = [];
  for (let i = 0; i< this.total; i++){
    this.offset[i] = p.random(-this.r * 0.5, this.r * 0.5);
  }

  this.update = () => {
    upVel += 0.02;
    this.pos.add(-upVel, 0);
  }

  this.render = () => {
    p.push();
    p.stroke(255);
    p.noFill();
    p.translate(this.pos.x, this.pos.y);
    p.beginShape();
    for (let i = 0; i < this.total; i++){
      let angle = p.map(i, 0, this.total, 0, 6.30);
      let r = this.r + this.offset[i];
      let x = r * p.cos(angle);
      let y = r * p.sin(angle);
      p.vertex(x, y);
    }
    p.endShape(p.CLOSE);
    p.pop();
  }

  this.offscreen = () => {
    if (this.pos.x < 0) {
      return true;
    }
    return false;
  }

  this.breakup = () => {
    let newA = [];
    newA[0] = new Asteroid(p,this.pos, this.r );
    newA[1] = new Asteroid(p,this.pos, this.r );
    return newA;
  }
}
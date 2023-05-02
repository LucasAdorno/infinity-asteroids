export default class Asteroid {

  constructor(p,pos, r, respawn){

    this.upVel = 3;
    this.offset = [];
    this.total = p.floor(p.random(5, 15));

    if (pos){
      this.pos = p.createVector(pos.x, pos.y + p.random(25, 40)*respawn);
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

    for (let i = 0; i< this.total; i++){
      this.offset[i] = p.random(-this.r * 0.5, this.r * 0.5);
    }

  }

  update(p) {
    this.upVel += 0.02;
    this.pos.add(-this.upVel, 0);
  }

  render(p) {
    p.push();
    p.stroke(255);
    p.fill(0);
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

  offscreen(p) {
    if(this.pos.x < 0){
        this.pos.x = p.windowWidth+300;
        this.pos.y = p.random(0, p.windowHeight);
      }
  }

  breakup(p) {
    let newA = [];
    newA[0] = new Asteroid(p,this.pos, this.r, -1 );
    newA[1] = new Asteroid(p,this.pos, this.r, 1 );
    return newA;
  }
}
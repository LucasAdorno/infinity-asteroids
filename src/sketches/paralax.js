 export default class Paralax{

  constructor(p, percent){
    this.percent = percent;
    this.percentVel = (p.windowWidth*percent)/100;
    this.sizeMax = 80;
    this.pos = [];
    for(let i = 0; i < this.sizeMax; i++){
      this.pos[i] = p.createVector(p.random(0, p.windowWidth), p.random(0, p.windowHeight));
    }
  }
  update(p){
    for(let i = 0; i < this.sizeMax; i++){
      this.pos[i].x -= this.percent*4;
      if(this.pos[i].x < 0){
        this.pos[i].x = p.windowWidth;
      }
    }
  }
  render(p){
    p.fill(255);
    for(let i = 0; i < this.sizeMax; i++){
      p.ellipse(this.pos[i].x, this.pos[i].y, 10*this.percent, 10*this.percent);
    }
  }
}
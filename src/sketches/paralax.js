 export default class Paralax{
  constructor(p, percent){
    this.percent = percent;
    this.percentVel = (p.windowWidth*percent)/100;
    this.sizeMax = 80;
    this.x = [];
    this.y = [];
    for(let i = 0; i < this.sizeMax; i++){
      this.x[i] = p.random(0, p.windowWidth);
      this.y[i] = p.random(0, p.windowWidth);
    }
  }
  update(p){
    for(let i = 0; i < this.sizeMax; i++){
      this.x[i] -= this.percent*4;
      if(this.x[i] < 0){
        this.x[i] = p.windowWidth;
      }
    }
  }
  render(p){
    p.fill(255);
    for(let i = 0; i < this.sizeMax; i++){
      p.ellipse(this.x[i], this.y[i], 10*this.percent, 10*this.percent);
    }
  }
}
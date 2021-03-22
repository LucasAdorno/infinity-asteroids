export default class Shuttle {
  
  constructor(p) {
    this.pos = p.createVector(p.width*0.5, p.height*0.75);
    this.speed = p.createVector(0, 0);
    this.size = 90;
    this.img = p.loadImage(require('../assets/peteca.svg'));
  }
  
  render(p) {
    p.stroke(255);
    p.noFill();
    p.strokeWeight(2);
    p.image(this.img,this.pos.x -45, this.pos.y-45, this.size, this.size);
    // p.ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
  
  jump(p, mousex, score) {
    let delta_x = (this.pos.x - mousex)/(p.width/2);
    delta_x *= score*0.05+1;
    
    this.speed.y = -20;
    this.speed.x = delta_x;
  }
  
  drag(p) {
    this.speed.y+=1;
  }
  
  move(p) {
    this.pos.add(this.speed);
  }

  isAlive(p) {
    if (this.pos.y>p.height || this.pos.x<0 || this.pos.x>p.width) {
      return false;
    }
    return true;
  }

  detectCollision(p, obstacle, diameter) {
    let distance = this.pos.dist(obstacle);
    if (distance < (diameter/2 + this.size/2)) {
      return true;
    }
    return false;
  }
}

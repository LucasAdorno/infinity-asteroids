export default class Ship {

  constructor(p) {
    this.r = 20;
    this.img = p.loadImage(require('../assets/ship.png'));
  }


  render(p) {
    p.push();
    p.translate(110, p.mouseY-25);
    p.image(this.img, 0 , 0, 55 ,50);
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
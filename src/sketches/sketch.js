
import Shuttle from './shuttle';
import Obstacle from './obstacle'

// let p5 = require('p5/lib/addons/p5.sound');

const sketch = (p) => {
let stl;
let o;
let bg;
let end=true;
let intro=true;
let score=0;
let obstacles=[];
let birdCollision;

 p.setup = () => {
  let canvasDiv = document.querySelector("#canvas-limit");
  let width = canvasDiv.offsetWidth;
  let height = canvasDiv.offsetHeight;
  p.createCanvas(width, height); 
  p.frameRate(30);
  p.textSize(32);
  bg = p.loadImage(require('../assets/background.svg'));
  // birdCollision = p5.loadSound(require('../assets/birdCollision.mp3'));

  setInterval(() => {
    if (obstacles.length < 3) {
      obstacles.push(new Obstacle(p, score+1));
    }
  }, 1500)
}

p.draw = () => {
  p.background(bg);
  p.fill(0);
  p.stroke(255);
  if (!end) {
    stl.move(p);
    // o.move(p, score);
    stl.drag(p);
    
    if(!stl.isAlive(p)) {
      end = true;
    }

    obstacles.forEach(obstacle => {
      obstacle.render(p);
      obstacle.move(p);
      obstacle.offscreen(p);
      if(stl.detectCollision(p, obstacle.pos, obstacle.size)){
        // birdCollision.play();
        end = true;
      }
    });
    
    // if (!o.isAlive(p)) {
    //   o = new Obstacle(p);
    // }

    stl.render(p);
    // o.render(p);

    score+= 0.5;
    
    p.fill(255);
    p.textAlign(p.RIGHT);
    p.text(p.int(score), p.width-30, 58);
  } else {
    p.fill(255);
    p.textAlign(p.CENTER);
    if (intro) {
      p.text("Clique para Jogar", p.width/2, 140);
    } else {
      p.text("Clique para Jogar", p.width/2, 140);
      p.text("score", p.width/2, 240);
      p.text(p.int(score), p.width/2, 280);
      obstacles = [];
    }
  }
}

 p.reset = () => {
  end = false;
  score=0;
  stl = new Shuttle(p);
  // o = new Obstacle(p);
}

p.mouseClicked = () => {
  intro=false;
  if (end) {
    p.reset(p);
  }
  stl.jump(p, p.mouseX, score);
}
}

export default sketch;
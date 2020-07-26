import Ship from "./ship.js";
import Laser from './laser.js';
import Asteroid from './asteroids.js';


export default function sketch(p) {
  let canvas;
  let ship;
  let lasers = [];
  let asteroids = [];
  let life = 3;
  let invenc = false;


  p.setup = () => {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
    ship = new Ship(p);
    setInterval(() => {
      if (life > 0){
        asteroids.push(new Asteroid(p));
      }
      else {
        alert('game over')
      }}, 800)

  }

  p.draw = () => {
    p.background(0);

    for (let i = 0; i < asteroids.length; i++) {
      asteroids[i].render();
      asteroids[i].update();
      if (asteroids[i].offscreen()) {
        asteroids.splice(i, 1)
      }

      if (ship.hits(asteroids[i]) && invenc === false ) {
        life--;
        console.log(life);
        invenc = true; 
        setTimeout(()=>{invenc = false}, 1000)//-----------------
      }
    }

    ship.render();

    p.keyPressed = () => {
      if (p.key === 's') {
        lasers.push(new Laser(p))
        console.log(asteroids);
      }
    }

    for (let i = lasers.length - 1; i >= 0; i--) {
      lasers[i].render();
      lasers[i].update();
      if (lasers[i].offscreen()) {
        lasers.splice(i, 1)
      }
      else {
        for (let j = asteroids.length - 1; j >= 0; j--) {
          if (lasers[i].hits(asteroids[j])) {
            if (asteroids[j].r > 25) {
              let newAsteroids = asteroids[j].breakup();
              asteroids = asteroids.concat(newAsteroids);
            }
            asteroids.splice(j, 1);
            lasers.splice(i, 1);
            break;
          }
        }
      }
    }

  }
}
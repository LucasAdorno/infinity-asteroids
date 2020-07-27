import Ship from "./ship.js";
import Laser from './laser.js';
import Asteroid from './asteroids.js';
import Paralax from './paralax.js';

const sketch = (p) => {
  let ship;
  let lasers = [];
  let asteroids = [];
  let paralax = [];
  let life = 3;
  let points = 0;
  let invenc = false;
  let pos;
  localStorage.setItem('points', JSON.stringify(0));
  localStorage.setItem('lifes', JSON.stringify(3));

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);

    paralax[0] = new Paralax(p, 0.3);
    paralax[1] = new Paralax(p, 0.6);
    paralax[2] = new Paralax(p, 0.9);


    ship = new Ship(p);

    setInterval(() => {
      if (asteroids.length < 40) {
        asteroids.push(new Asteroid(p));
      }
    }, 600)


  }

  p.draw = () => {
    p.background(0);

    paralax.forEach(scene => {
      scene.update(p);
      scene.render(p);
    });

    ship.render(p);

    asteroids.forEach(asteroid => {
      asteroid.render(p);
      asteroid.update(p);
      asteroid.offscreen(p);

      if (ship.hits(p, asteroid) && invenc === false) {
        life--;
        localStorage.setItem('lifes', JSON.stringify(life));
        invenc = true;
        if (life === 0) {
          return window.location.href = "/gameover";
        }
        setTimeout(() => { invenc = false }, 800)
      }
    });

    lasers.forEach(laser => {
      laser.render(p);
      laser.update(p);

      if (laser.offscreen(p)) {
        pos = lasers.indexOf(laser)
        lasers.splice(pos, 1)
      }

      else {
        asteroids.forEach(asteroid => {

          if (laser.hits(p, asteroid)) {
            points += 100;
            localStorage.setItem('points', JSON.stringify(points));

            if (asteroid.r > 25) {
              let newAsteroids = asteroid.breakup(p);
              asteroids = asteroids.concat(newAsteroids);
            }

            pos = asteroids.indexOf(asteroid);
            asteroids.splice(pos, 1);
            pos = lasers.indexOf(laser)
            lasers.splice(pos, 1);
          }
        })
      }
    });

    p.keyPressed = () => {
      if (p.key === 's' || p.key === 'S') {
        if (lasers.length <= 10) {
          lasers.push(new Laser(p))
        }
      }
    }
    p.touchStarted = () => {
      if(lasers.length <= 10 && p.windowWidth < 900){
       lasers.push(new Laser(p))
      }
    }
  }
}

export default sketch;
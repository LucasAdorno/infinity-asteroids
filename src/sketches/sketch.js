import Ship from "./ship.js";
import Laser from './laser.js';
import Asteroid from './asteroids.js';
import Paralax from './paralax.js';

export default function sketch(p) {
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
    p.noStroke();

    ship = new Ship(p);

    setInterval(() => {
      if (life > 0) {

        if (asteroids.length < 30) {
          asteroids.push(new Asteroid(p));
        }
      }

      else {
        window.location.href = "/gameover";
      }
    }, 800)

    paralax[0] = new Paralax(p, 0.3);
    paralax[1] = new Paralax(p, 0.6);
    paralax[2] = new Paralax(p, 0.9);

  }

  p.draw = () => {
    p.background(0, 0, 0);

    paralax.forEach(scene => {
      scene.update(p);
      scene.render(p);
    });

    asteroids.forEach(asteroid => {
      asteroid.render();
      asteroid.update();
      asteroid.offscreen();

      if (ship.hits(asteroid) && invenc === false) {
        life--;
        localStorage.setItem('lifes', JSON.stringify(life));
        invenc = true;
        setTimeout(() => { invenc = false }, 800)
      }
    })

    ship.render();

    lasers.forEach(laser => {
      laser.render();
      laser.update();

      if (laser.offscreen()) {
        pos = lasers.indexOf(laser)
        lasers.splice(pos, 1)
      }

      else {
        asteroids.forEach(asteroid => {

          if (laser.hits(asteroid)) {
            points += 100;
            localStorage.setItem('points', JSON.stringify(points));

            if (asteroid.r > 25) {
              let newAsteroids = asteroid.breakup();
              asteroids = asteroids.concat(newAsteroids);
            }

            pos = asteroids.indexOf(asteroid);
            asteroids.splice(pos, 1);
            pos = lasers.indexOf(laser)
            lasers.splice(pos, 1);
          }
        })
      }
    })
    p.keyPressed = () => {
      if (p.key === 's' || p.key === 'S') {
        if (lasers.length <= 10) {
          lasers.push(new Laser(p))
        }
      }
    }
  }
}

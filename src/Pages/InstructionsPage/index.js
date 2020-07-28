import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Button from '../../components/Button';
import Mouse from '../../assets/mouse.png'

const InstructionsPage = () => {

  return(
    <Container>
      <h1>Instructions</h1>
      <div className="instr-laser">
        <h3 className="desc"> Press <h3 className="tecl">SPACE</h3>to shoot the laser.</h3>
      </div>
      <div className="touch">
        <div></div>
        <h3 className="desc">If you play on mobile device, shoot with touch</h3>
      </div>
      <div className="instr-move">
        <img src={Mouse} alt="mouse pixel art"/>
        <h3 className="desc">Move the mouse up or down to control the spaceship.</h3>
      </div>
      <Link to='/'>
        <Button text='Home' />
      </Link>
    </Container>
  );
}

export default InstructionsPage ;
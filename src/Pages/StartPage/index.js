import React from 'react';
import { Link } from 'react-router-dom'
import { Container } from './styles';
import Button from '../../components/Button';

const StartPage = ()=>{

  return(
    <Container>
      <h1 className='title-one'>Infinity</h1>
      <h1 className='title-two'>Asteroids</h1>
      <Link to='/play'>
        <Button text='Start' />
      </Link>
      <Link to='/instructions'>
        <Button text='Instructions' />
      </Link>
      <a href='https://www.github.com/LucasAdorno/asteroids_p5React'>
        <Button text='Repository'/>
      </a>
    </Container>
  );
}

export default StartPage;
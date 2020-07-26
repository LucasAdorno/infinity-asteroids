import React from 'react';
import { Link } from 'react-router-dom'
import { Container } from './styles';
import Button from '../../components/Button';

const StartPage = ()=>{

  return(
    <Container>
      <h1 className='titleOne'>Infinty</h1>
      <h1 className='titleTwo'>Asteroids</h1>
      <Link to='/play'><Button text='Start'/></Link>
      <Link><Button text='Instructions' /></Link>
      <Link><Button text='Repository'/></Link>
    </Container>
  );
}

export default StartPage;
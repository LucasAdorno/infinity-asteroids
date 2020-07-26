import React from 'react';
import { Link } from 'react-router-dom'
import { Container } from './styles';
import Button from '../../components/Button';

const EndPage = () => {
  let points = JSON.parse(localStorage.getItem('points'));

  return(
    <Container>
      <h1>Game Over</h1>
      <h1>Score: {points}</h1>
      <Link to='/'><Button text='Home'/></Link>
    </Container>
    );
}

export default EndPage;
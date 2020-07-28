import React from 'react';
import { Link } from 'react-router-dom'
import { Container } from './styles';
import Button from '../../components/Button';

const EndPage = () => {
  let points = JSON.parse(localStorage.getItem('points'));
  let record = JSON.parse(localStorage.getItem('record')) || 0;

  if (points > record) {
   localStorage.setItem('record', JSON.stringify(points));
   record = points;
  }

  return(
    <Container>
      <h1>Game Over</h1>
      <h1>Score: {points}</h1>
      <h2>Record: {record}</h2>
      <Link to='/'><Button text='Home'/></Link>
    </Container>
    );
}

export default EndPage;
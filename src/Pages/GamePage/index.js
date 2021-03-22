import React from 'react';
import { Container } from './styles';
import Game from '../../components/Game';

const GamePage = () => {

  return(
    <Container id="canvas-limit">
      <Game/>
    </Container>
  );
}

export default GamePage;
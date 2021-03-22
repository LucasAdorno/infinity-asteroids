import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../../sketches/sketch';

const Game = () => {

  return(
      <div >
        <P5Wrapper sketch={sketch}></P5Wrapper>
      </div>
    );
}

export default Game;
import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../../sketches/sketch';
import HeaderInfos from '../HeaderInfos';


class Game extends Component {
  // constructor(){
  //   super();
  // }

  render() {
    return (
      <div>
        <P5Wrapper sketch={sketch}></P5Wrapper>
        <HeaderInfos />
      </div>
    );
  }
}

export default Game;
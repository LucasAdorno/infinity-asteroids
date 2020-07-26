import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../../sketches/sketch';


class Test extends Component {
  // constructor(){
  //   super(); 
  // }
  
  render() {
    return (
      <div>
        <P5Wrapper sketch={sketch}></P5Wrapper>
      </div>
    );
  }
}

export default Test;
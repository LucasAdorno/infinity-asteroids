import React from 'react';
import { Container } from './styles';

const Button = (props) => {

  return(
    <Container>{props.text}</Container>
  );
}

export default Button;
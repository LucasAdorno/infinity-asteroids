import React from 'react';
import { Link } from 'react-router-dom'
import { Container } from './styles';
import Button from '../../components/Button';

const StartPage = ()=>{

  return(
    <Container>
      <Link to='/play'><Button text='Start'/></Link>
      <Link><Button text='Instructions' /></Link>
      <Link><Button text='Repository'/></Link>
    </Container>
  );
}

export default StartPage;
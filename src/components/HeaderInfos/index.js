import React, {useState, useEffect} from 'react';
import { Container } from './styles';

function HeaderInfos (){

  const[points, setPoints] = useState(JSON.parse(localStorage.getItem('points')))

  useEffect(()=>{
    setInterval(() => {
      setPoints(JSON.parse(localStorage.getItem('points')))
    }, 100)
  }, [])

  return(
    <Container>
      <h1>{points}</h1>
      <h1>3</h1>
    </Container>
  );
}

export default HeaderInfos;
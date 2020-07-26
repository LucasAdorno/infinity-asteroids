import React, { useState, useEffect } from 'react';
import { Container } from './styles';

function HeaderInfos() {

  const [points, setPoints] = useState(0)
  const [life, setLife] = useState(3)

  useEffect(() => {
    setInterval(() => {
      const lspoints = JSON.parse(localStorage.getItem('points'))
      const lslife = JSON.parse(localStorage.getItem('lifes'))
      if (points !== lspoints || life !== lslife) {
        setPoints(lspoints)
        setLife(lslife)
      }
    }, 200)
  }, [])

  return (
    <Container>
      <div>
        <h1>{life}</h1>
        <h1>{points}</h1>
      </div>
    </Container>
  );
}

export default HeaderInfos;
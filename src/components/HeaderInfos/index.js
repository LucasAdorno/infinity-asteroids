import React, { useState } from 'react';
import { Container } from './styles';
import Heart from '../../assets/heart.png'


function HeaderInfos() {

  const [points, setPoints] = useState(0)
  const [life, setLife] = useState(3)
    setInterval(() => {
      const lspoints = JSON.parse(localStorage.getItem('points'))
      const lslife = JSON.parse(localStorage.getItem('lifes'))
      if (points !== lspoints || life !== lslife) {
        setPoints(lspoints)
        setLife(lslife)
      }
    }, 200)

  return (
    <Container>
      <div className='header-info'>
        <div className='life-count'>
          <img src={Heart} alt="life mark"/>
          <h1> x {life}</h1>
        </div>
        <h1>{points}</h1>
      </div>
    </Container>
  );
}

export default HeaderInfos;
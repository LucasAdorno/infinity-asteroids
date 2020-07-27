import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;

  h1{
    font-size: 90px;
    text-shadow: 0px 0px 8px #0ef
  }

  .instr-laser, .instr-move{
    width: 650px;
    display: flex;
    align-items: center;
  }

  .instr-laser .tecl{
    text-align: center;
    margin-left: 2px;
    padding: 10px;
    border-radius: 5px;
    border: 2px solid #fff;
  }

  .instr-laser .desc{
    margin-left: 20px;
  }

  .instr-move img{
    width: 70px;
    height: 70px;
    margin-left: -10px;
  }



`;
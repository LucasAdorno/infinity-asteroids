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

  .instr-laser, .instr-move, .touch{
    width: 650px;
    display: flex;
    align-items: center;
  }


  .instr-laser .desc{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .instr-laser .desc .tecl{
    display: flex;
    align-items: center;
    margin: 0 12px 0 12px;
    padding: 5px;
    border-radius: 5px;
    border: 2px solid #fff;
  }

  .instr-move img{
    width: 70px;
    height: 70px;
    margin-left: -10px;
  }

  .touch div{
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 2px solid #fff;
  }

  .touch .desc{
    margin-left: 20px;
  }

  @media(max-width: 900px){
    h1{
      font-size: 40px;
    }

    .instr-laser, .instr-move, .touch{
      width: 100%;
     }

    .instr-laser .desc .tecl{
      margin: 0 2px 0 2px;
    }

    .instr-move img{
      width: 70px;
      height: 50px;
      margin-left: 0px;
    }

    .touch div{
      margin-left: 5px;
      height:2rem;
      width: 2rem;
    }

  }
`;
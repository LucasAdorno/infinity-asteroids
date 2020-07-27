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
    text-shadow: 0px 0px 8px #0ef;
  }

  @media(max-width: 900px){
    h1{
      font-size: 40px;
      text-shadow: 0px 0px 8px #0ef;
    }

  }

`;
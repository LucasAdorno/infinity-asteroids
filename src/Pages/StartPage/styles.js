import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  h1{
    font-size: 90px;
    text-shadow: 0px 0px 8px #0ef
  }

  .title-one{
    margin-left: -250px;
  }
  .title-two{
    margin-left: 100px;
  }

  @media(max-width: 900px){
    h1{
      font-size: 40px;
      margin-left:0 !important;
    }

`;
import styled from "styled-components";

export const Container = styled.header`
  
  padding: 26px;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    align-self: center;
    justify-self: center;
  }

  button {
    width: 287px;
    height: 74px;
    background: #33A4F5;
    border-radius: 8px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #FFFFFF;
    cursor: pointer;
    border: none;
  }

  #pokedex{
    margin: 40px;
    position: absolute;
    right: 0;
  }

  #home{
    color: black;
    background: none;
    margin: 40px;
    position: absolute;
    left: 0;
    text-decoration-line: underline;
  }

  #excluir{
    background-color: #FF6262;
    margin: 40px;
    position: absolute;
    right: 0;
  }

`;

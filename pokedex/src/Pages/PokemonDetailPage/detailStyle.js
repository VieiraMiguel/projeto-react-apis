import styled from "styled-components";

export const Container = styled.div`

    #main{
        background-color: #5E5E5E;
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    #imgContainer{
      width: 100%;
      display: flex;
      justify-content: center;
    }

    #pokeball3{
    height: 80%;
    position: absolute;
    opacity: 50%;
    }

    #titulo{
    color: #FFFFFF;
    margin: 60px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
  }

  section{
    display: flex;
    justify-content: center;
  }
`
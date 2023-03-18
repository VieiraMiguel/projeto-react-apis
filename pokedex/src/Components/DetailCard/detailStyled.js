import styled from "styled-components";

export const Container = styled.main `
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

z-index: 1;
display: flex;
width: 1390px;
height:663px;
border-radius: 38px;

#box1{
    padding: 26px;
    padding-left: 36px;
    padding-right: 0;
    display: flex;
    width: 50%;
    gap: 34px;
    z-index: 1;
}

#pokePictures{
    display: flex;
    width: 46.3%;
    flex-direction: column;
    justify-content: space-between;
    gap: 34px;
}

#pokePictures img{
    background-color: #FFFFFF;
    border-radius: 8px;    
}

#BaseStats{
    padding: 18px;
    border-radius: 8px;
    background-color: #FFFFFF;
    width: 53.7%;

    >p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 29px;    
    }
}

#baseList{
    display: flex;
    gap: 16px;
    margin: 20px;
    line-height: 100%;
}

#texts{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
    gap: 12px;
}

#numbers{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
}

#bars{
    padding-top: 3px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px
    //justify-content: space-between;
}

#box2{
    padding:26px;
    padding-left: 68px;
    gap: 34px;
    display: flex;
    justify-content: flex-start;
    width: 50%;
    position: relative;
}

#pokeball2{
    height: 100%;
    position: absolute;
    bottom:0;
    right:0;
}

#titleMoves{
    display: flex;
    gap: 34px;
    flex-direction: column;
    justify-content: space-between;
    justify-items: flex-start;
    width: 50%;
    z-index: 1;
}

#title{
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
}

#id{
    font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
}

#name{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    ::first-letter {
    text-transform: uppercase;
  }
}

#types{
    padding-top: 10px;
    display: flex;
    gap: 18px;
}

#Moves{
    padding: 18px;
    flex-grow: 1;
    background-color: #FFFFFF;
    border-radius: 8px;

grid-auto-flow: row;
    display: flex;
    flex-direction: column;
   gap: 20px;

    >p{
        border: 1px dashed rgba(0, 0, 0, 0.14);
        border-radius: 12px;
        width: fit-content;
        padding: 10px;
        background-color: #ECECEC;
    }
}

#moves{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
}

#pokemon{
    
        padding: 30px;
        width: 50%;
        position: absolute;
        bottom: 485px;
        right: 0px;
        min-width: 283.5px;
    
}
`

export const Bar = styled.p`
    --progress: ${props => props.var};
height: 12px;
width: 100%;
//background-color: #ccc;
display: flex;
border-radius: 4px;

::before {
    border-radius: 4px;
  content: "";
  width: calc(var(--progress) * 1%);
  background-color: hsl( calc(var(--progress) * 1) , 80%, 50%);
}
`
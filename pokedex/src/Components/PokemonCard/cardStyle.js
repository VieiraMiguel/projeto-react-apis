import styled from "styled-components";

export const Container = styled.div`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
    position: relative;
    color:#FFFFFF;
    height: 210px;
    width: 440px;
    background-color: #729F92;
    flex-direction: column;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px;
    margin-bottom: 53px;

#topo{
    display: flex ;
    justify-content: space-between;
    padding: 24px;
}

#id {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;
}

#nome {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 10px;
  color: #FFFFFF;

  ::first-letter {
    text-transform: uppercase;
  }
}

#info{
  z-index: 2;
}

#tipo{
  display: flex;
  gap: 7px;
}
    
#buttons{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-bottom: 13px;
    padding-left: 24px;
    padding-right: 24px;
    z-index: 1;
}

#capturar{
    width: 150px;
    height: 38px;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
}

#excluir{
    width: 150px;
    height: 38px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    background-color: #FF6262;
}

#detalhes{
  align-self: center;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  text-decoration-line: underline;
  color: #FFFFFF;
  cursor: pointer;
}

#pokeball{
  position: absolute;
  top: 0;
  right: 0;
}

#pokemon{
  position: absolute;
  bottom: 65px;
  right: 4px;
  width: 45%;
  min-width: 198px;
} 
`;
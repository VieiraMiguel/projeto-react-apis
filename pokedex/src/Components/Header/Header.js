import { useLocation, useNavigate } from "react-router-dom";
import { goToHomePage, goToPokedexPage } from "../../Router/coordinator";
import { Container } from "./headerStyle";
import title from "../../assets/title.png"
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

function Header() {

  const location = useLocation();

  const navigate = useNavigate();

  const context = useContext(GlobalContext)
  const { removeFromPokedex } = context;
  
  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <img src={title} />
            <button id="pokedex" onClick={() => goToPokedexPage(navigate)}>
              Pokedex
            </button>
          </>
        );
      case "/pokedex":
        return (
          <>
            <button id="home" onClick={() => goToHomePage(navigate)}>
            {"< "}Todos Pokémons
            </button>
            <img src={title} />
          </>
        );
      default:
        return (
          <>
            <button id="home" onClick={() => goToHomePage(navigate)}>
              {"< "}Todos Pokémons
            </button>
            <img src={title} />
            {/* <button id="excluir" onClick={() => removeFromPokedex()}>
              Excluir da Pokédex
            </button> */}
          </>
        );
    }
  };

  return <Container>{renderHeader()}</Container>;
}

export default Header;

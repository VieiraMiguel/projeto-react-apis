import { DetailCard } from "../../Components/DetailCard/DetailCard";
import Header from "../../Components/Header/Header";
import { Container } from "./detailStyle";
import pokeball3 from "../../assets/pokeball3.png"

export function PokemonDetailPage() {

  return (
    <Container>

      <Header />

      <div id="main">
        <div id="imgContainer">
          <img id="pokeball3" src={pokeball3} />
        </div>

        <h1 id="titulo">Detalhes</h1>
        <section>
        <DetailCard/>
        </section>

      </div>

    </Container>
  );
}
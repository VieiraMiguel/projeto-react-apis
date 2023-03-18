import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import Header from "../../Components/Header/Header";
import { url } from "../../apiUrl/url";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";
import { Container } from "./pokedexStyle";

export function PokedexPage() {

  const context = useContext(GlobalContext)
  const { pokedex, removeFromPokedex } = context;

  return (
    <Container>
      
      <Header />

      <div id="main">

        <h1>Meus Pokémons</h1>

      <section>
        {pokedex.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemonUrl={`${url}/${pokemon.name}`}
            removeFromPokedex={removeFromPokedex}
          />
        ))}
      </section>
      </div>
    </Container>
  );
}

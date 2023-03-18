import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { Container } from "./listStyle";
import Header from "../../Components/Header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function PokemonListPage() {

  const context = useContext(GlobalContext)
  const { pokelist, addToPokedex } = context;

  const filteredPokelist = () =>
    (pokelist)

  return (
    <Container>

      <Header />

      <div id="home">

        <h1>Todos Pokémons</h1>

        <section>
          {filteredPokelist().map((pokemon) => (
            <PokemonCard
              key={pokemon.url}
              pokemonUrl={pokemon.url}
              addToPokedex={addToPokedex}
            />
          ))}
        </section>

      </div>

      


    </Container>
  );
}
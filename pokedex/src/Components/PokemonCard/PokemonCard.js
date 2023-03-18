import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../Router/coordinator";
import { Container } from "./cardStyle";
import React from "react";
import pokeball from "../../assets/pokeball.png"

import bug from "../../assets/types/bug.png"
import fire from "../../assets/types/fire.png"
import grass from "../../assets/types/grass.png"
import normal from "../../assets/types/normal.png"
import poison from "../../assets/types/poison.png"
import water from "../../assets/types/water.png"
import flying from "../../assets/types/flying.png"
import dark from "../../assets/types/dark.png"
import dragon from "../../assets/types/dragon.png"
import electric from "../../assets/types/electric.png"
import fairy from "../../assets/types/fairy.png"
import fighting from "../../assets/types/fighting.png"
import ghost from "../../assets/types/ghost.png"
import ground from "../../assets/types/ground.png"
import ice from "../../assets/types/ice.png"
import psychic from "../../assets/types/psychic.png"
import rock from "../../assets/types/rock.png"
import steel from "../../assets/types/steel.png"

export const Cores = type => {
  switch (type) {
    case 'grass':
      return '#729F92'
    case 'fire':
      return '#EAAB7D'
    case 'water':
      return '#71C3FF'
    case 'bug':
      return '#76A866'
    case 'normal':
      return '#BF9762'
    case 'poison':
      return '#AD98AE'
    case 'dark':
      return "#707383"
    case 'dragon':
      return "#0A81DA"
    case 'electric':
      return "#FFB94D"
    case 'fairy':
      return "#DDABC3"
    case 'fighting':
      return "#D15B88"
    case 'ghost':
      return "#6E81C5"
    case 'ground':
      return "#C56937"
    case 'ice':
      return "#73D1D3"
    case 'psychic':
      return "#FF8370"
    case 'rock':
      return "#D6C391"
    case 'steel':
      return "#969696"
    default:
      return ''
  }
}

export const Type = type => {
  switch (type) {
    case 'dark':
      return <img src={dark} alt="" />
    case 'dragon':
      return <img src={dragon} alt="" />
    case 'electric':
      return <img src={electric} alt="" />
    case 'fairy':
      return <img src={fairy} alt="" />
    case 'fighting':
      return <img src={fighting} alt="" />
    case 'ghost':
      return <img src={ghost} alt="" />
    case 'ground':
      return <img src={ground} alt="" />
    case 'ice':
      return <img src={ice} alt="" />
    case 'psychic':
      return <img src={psychic} alt="" />
    case 'rock':
      return <img src={rock} alt="" />
    case 'steel':
      return <img src={steel} alt="" />
    case 'grass':
      return <img src={grass} alt="" />
    case 'poison':
      return <img src={poison} alt="" />
    case 'fire':
      return <img src={fire} alt="" />
    case 'flying':
      return <img src={flying} alt="" />
    case 'water':
      return <img src={water} alt="" />
    case 'bug':
      return <img src={bug} alt="" />
    case 'normal':
      return <img src={normal} alt="" />
    default:
      return ''
  }
}

export function PokemonCard(props) {

  const { pokemonUrl, addToPokedex, removeFromPokedex } = props;

  const location = useLocation();

  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  return (
    <Container style={{ backgroundColor: `${Cores(pokemon.types !== undefined && pokemon.types[0].type.name)}` }}>


      <div id="topo">

        <div id="info">
          <p id="id" >#{pokemon.id >= 1 && pokemon.id < 10 ? `0${pokemon.id}` : pokemon.id}</p>
          <p id="nome" >{pokemon.name}</p>
          <div id="tipo">
            <span >{Type(pokemon.types !== undefined && pokemon.types[0].type.name)}</span>
            <span >{Type(pokemon.types !== undefined && pokemon.types[1]?.type.name)}</span>
          </div>
        </div>

        <img id="pokeball" src={pokeball} />
        <img id="pokemon" src={pokemon.sprites?.other?.["official-artwork"].front_default} alt={pokemon.name} />

      </div>

      <div id="buttons">

        {location.pathname === "/" ? (
          <button id="capturar" onClick={() => addToPokedex(pokemon)}>
            Capturar
          </button>
        ) : (
          <button id="excluir" onClick={() => removeFromPokedex(pokemon)}>
            Excluir
          </button>
        )}

        <span id="detalhes" onClick={() => goToDetailsPage(navigate, pokemon.name)}>Detalhes</span>

      </div >

    </Container>
  );
}
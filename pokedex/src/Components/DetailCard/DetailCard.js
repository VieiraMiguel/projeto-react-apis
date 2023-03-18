import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container } from "./detailStyled";
import { Bar } from './detailStyled'
import { Cores } from '../PokemonCard/PokemonCard'
import pokeball2 from "../../assets/pokeball2.png"
import { Type } from '../PokemonCard/PokemonCard'

export function DetailCard() {

  const [detalhes, setDetalhes] = useState({})

  const name = useParams()["*"]

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setDetalhes(response.data);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  const totalBaseStat = () => {
    const AllBaseStat = detalhes.stats && detalhes.stats.map(detail => detail.base_stat)
    const total = AllBaseStat && AllBaseStat.reduce((acc, val) => acc + val, 0)
    return total
  }

  const Id = detalhes.id !== undefined && detalhes.id >= 10 ? detalhes.id : `0${detalhes.id}`

  return (

    <Container style={{ backgroundColor: `${Cores(detalhes.types !== undefined && detalhes.types[0].type.name)}` }}>

      <section id="box1">

        <div id="pokePictures">
            <img src={detalhes.sprites !== undefined && detalhes.sprites['front_default']? detalhes.sprites['front_default'] : undefined} />
            <img src={detalhes.sprites !== undefined && detalhes.sprites['back_default']? detalhes.sprites['back_default'] : undefined} />
        </div>

        <div id='BaseStats'>

          <p>Base stats</p>

          <div id="baseList">

            <div id="texts">
              <p>HP</p>
              <p>Attack</p>
              <p>Defense</p>
              <p>Sp. Atk</p>
              <p>Sp. Def</p>
              <p>Speed</p>
              <p>Total</p>
            </div>

            <div id="numbers">
              
              <p>{detalhes.stats !== undefined && detalhes.stats[0].base_stat}</p>
              <p>{detalhes.stats !== undefined && detalhes.stats[1].base_stat}</p>
              <p>{detalhes.stats !== undefined && detalhes.stats[2].base_stat}</p>
              <p>{detalhes.stats !== undefined && detalhes.stats[3].base_stat}</p>
              <p>{detalhes.stats !== undefined && detalhes.stats[4].base_stat}</p>
              <p>{detalhes.stats !== undefined && detalhes.stats[5].base_stat}</p>
              <p>{totalBaseStat() !== undefined && totalBaseStat()}</p>

            </div>

            <div id="bars">
              <Bar var={detalhes.stats !== undefined && detalhes.stats[0].base_stat} />
              <Bar var={detalhes.stats !== undefined && detalhes.stats[1].base_stat} />
              <Bar var={detalhes.stats !== undefined && detalhes.stats[2].base_stat} />
              <Bar var={detalhes.stats !== undefined && detalhes.stats[3].base_stat} />
              <Bar var={detalhes.stats !== undefined && detalhes.stats[4].base_stat} />
              <Bar var={detalhes.stats !== undefined && detalhes.stats[5].base_stat} />
            </div>

          </div>
        </div>

      </section>

      <section id="box2">
          
        <img id="pokeball2" src={pokeball2} alt="" /> 

        <div id="titleMoves">
        <div id="title">
          <span id="id">#{Id}</span>
          <span id="name">{detalhes.name}</span>
          <div id="types">
          <span>{Type(detalhes.types !== undefined && detalhes.types[0].type.name)}</span>
          <span>{Type(detalhes.types !== undefined && detalhes.types[1]?.type.name)}</span>
          </div>
        </div>

        <div id="Moves">
          <h1 id="moves">Moves</h1>
            <p>{detalhes.moves !== undefined && detalhes.moves[0]?.move.name}</p>
            <p>{detalhes.moves !== undefined && detalhes.moves[1]?.move.name}</p>
            <p>{detalhes.moves !== undefined && detalhes.moves[2]?.move.name}</p>
            <p>{detalhes.moves !== undefined && detalhes.moves[3]?.move.name}</p>
            <p>{detalhes.moves !== undefined && detalhes.moves[4]?.move.name}</p>

        </div>
        </div>

        <img id="pokemon" src={detalhes.sprites?.other?.["official-artwork"]?.["front_default"]} alt="" />
          
      </section>
      
    </Container>

)}


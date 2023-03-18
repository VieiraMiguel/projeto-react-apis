import { Router } from "./Router/Router"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { url } from "./apiUrl/url"
import { GlobalContext } from "./context/GlobalContext"
import { ModalAdd } from "./Components/Modal/ModalAdd"
import { ModalAlreadyAdd } from "./Components/Modal/ModalAlreadyAdd"
import { ModalRemove } from "./Components/Modal/ModalRemove"
import Modal from "react-modal"

Modal.setAppElement('#root');

function App() {
 
  const [pokelist, setPokelist] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  const [modalAddOpen, setAddOpen] = useState(false)
  const [modalAlreadyAdd, setAlreadyAdd] = useState(false)
  const [modalRemoveOpen, setRemoveOpen] = useState(false)

  function abrirModalAdd() {
    setAddOpen(true);
  }

  function fecharModalAdd() {
    setAddOpen(false);
  }

  function abrirAlreadyAdd() {
    setAlreadyAdd(true);
  }

  function fecharAlreadyAdd() {
    setAlreadyAdd(false)
  }

  function abrirModalRemove() {
    setRemoveOpen(true);
  }

  function fecharModalRemove() {
    setRemoveOpen(false);
  }

  useEffect(() => {
    fetchPokelist();
  }, []);

  const fetchPokelist = async () => {
    try {
      const response = await axios.get(url+"?limit=150&offset=0");
      setPokelist(response.data.results);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error.response);
    }
  };

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );
    

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
      abrirModalAdd()
    } else {abrirAlreadyAdd()}
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );

    setPokedex(newPokedex);
    abrirModalRemove()
  };

  const context = {
    pokelist,
    setPokelist,
    pokedex,
    setPokedex,
    fetchPokelist,
    addToPokedex,
    removeFromPokedex,
    modalAddOpen,
    fecharModalAdd,
    modalAlreadyAdd,
    fecharAlreadyAdd,
    modalRemoveOpen,
    fecharModalRemove
  }

  return (
    <GlobalContext.Provider value={context}>
      <Router />
      <ModalAdd />
      <ModalAlreadyAdd />
      <ModalRemove />
    </GlobalContext.Provider>
  )
}

export default App

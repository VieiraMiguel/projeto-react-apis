import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PokemonListPage } from "../Pages/PokemonListPage/PokemonListPage"
import { PokemonDetailPage } from "../Pages/PokemonDetailPage/PokemonDetailPage"
import { PokedexPage } from "../Pages/PokedexPage/PokedexPage"

export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PokemonListPage />} />
                <Route path="/pokedex" element={<PokedexPage />} />
                <Route path="/details" element={<PokemonDetailPage />} />
            </Routes>
        </BrowserRouter>
    )
}

//export default Router
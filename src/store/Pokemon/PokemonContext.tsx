import * as React from 'react';
import {setPokemonName} from "./PokemonReducer"

export const initialState = {
    pokName: "",
    setPokemon: setPokemonName
}

export const PokemonContext = React.createContext(initialState)

export const PokemonProvider = PokemonContext.Provider
import * as React from 'react';

export const initialState = {
    pokName: "",
}

export const PokemonContext = React.createContext(initialState)

export const PokemonProvider = PokemonContext.Provider
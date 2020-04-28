import {initialState} from "./PokemonContext"

enum Actions {
    SET_POK_NAME = "set pokemon name"
}

export const setPokemonName = (name: string | undefined) => {
    return {
       type: Actions.SET_POK_NAME,
       payload: name
    }
}

export function pokemonReducer(state:any, action:any) {
    switch (action.type) {
      case Actions.SET_POK_NAME:
        return {pokName: state.pokName = action.payload};
      default:
        return state
    }
  }
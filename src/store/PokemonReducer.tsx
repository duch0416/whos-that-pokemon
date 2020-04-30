import {initialState} from "./PokemonContext"

enum Actions {
    SET_POK_NAME = "setPokemonName"
}

export const setPokemonName = (payload: string | undefined) => {
    return {
       type: Actions.SET_POK_NAME,
       payload
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
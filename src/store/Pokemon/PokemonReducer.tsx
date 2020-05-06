import React, { useReducer } from "react";

const initialState = {};

enum Actions {
  SET_POK = "setPokemonName",
}

const PokemonContext = React.createContext<{
  state: any;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });
const Provider = PokemonContext.Provider;

export const setPokemonName = (
  name: string | undefined,
  id: number | undefined
) => {
  return {
    type: Actions.SET_POK,
    name,
    id,
  };
};

const PokemonProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer((state: any, action: any) => {
    switch (action.type) {
      case Actions.SET_POK:
        return { pokName: action.name, pokId: action.id };
      default:
        return state;
    }
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { PokemonContext, PokemonProvider };

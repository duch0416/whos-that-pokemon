import * as React from 'react';

export const initState = {status: false};

enum Actions {
    SET_TRUE = "set true",
    SET_FALSE = "set false",
}

export const GuessStatusContext = React.createContext(initState)
export const GuessStatusProvider = GuessStatusContext.Provider

export const setStatusToTrue = () => {
    return {
       type: Actions.SET_TRUE,
    }
}

export const setStatusToFalse = () => {
    return {
       type: Actions.SET_FALSE,
    }
}

export const guessReducer = (state:any, action:any) => {
    switch (action.type) {
        case Actions.SET_TRUE:
          return {status: state.status = true};
        case Actions.SET_FALSE:
          return {status: state.status = false};
        default:
          return state
      }
}
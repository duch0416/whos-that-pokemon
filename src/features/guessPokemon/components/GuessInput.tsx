import * as React from 'react';
import {  useContext } from "react";
import styled from "styled-components"

import {PokemonContext} from "../../../store/PokemonReducer"
import {useGuess} from "../../../hooks/useGuess"

const Input = styled.input`
    height: 30px;
    width: 150px;
    border-radius: 15px;
    box-shadow: 0px 2px 8px 0px #00000029;
    padding: 10px 40px;
    text-align: center;
`

 
const GuessInput: React.SFC= () => {
    const {state} = useContext(PokemonContext)
    const {onChange, inputValue, guessStatus} = useGuess(state.pokName)


    console.log(guessStatus)
    return ( 
        <Input type="text" onChange={onChange} value={inputValue} placeholder="guess name"/>
     );
}
 
export default GuessInput;
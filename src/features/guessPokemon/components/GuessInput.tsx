import * as React from 'react';
import {  useContext } from "react";
import styled from "styled-components"

import {PokemonContext} from "../../../store/Pokemon/PokemonReducer"
import {GuessStatusContext} from "../../../store/GuessStatus/GueesReducer"
import {useGuess} from "../../../hooks/useGuess"

const Input = styled.input<{guessStatus: boolean}>`
    height: 30px;
    width: 150px;
    border-radius: 15px;
    box-shadow: 0px 2px 8px 0px #00000029;
    padding: 10px 40px;
    text-align: center;
    background-color: ${({guessStatus}) => guessStatus ?  "#3CB043" : "white"  };
    border: 1px solid transparent;
    transition: ease 0.2s;
    margin-top: 20px;
    &:focus{
        transform: scale(1.1)
    }
`

 
const GuessInput: React.SFC= () => {
    const {state} = useContext(PokemonContext)
    const {guessStatus} = useContext(GuessStatusContext)
    const {onChange, inputValue} = useGuess(state.pokName)


    return ( 
        <Input type="text" onChange={onChange} value={inputValue} placeholder="guess name" guessStatus={guessStatus.status}/>
     );
}
 
export default GuessInput;
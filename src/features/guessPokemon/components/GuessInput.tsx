import * as React from 'react';
import {  useContext } from "react";
import styled from "styled-components"

import {PokemonContext} from "../../../store/PokemonReducer"

const Input = styled.input`
    height: 30px;
    width: 150px;
    border-radius: 15px;
    box-shadow: 0px 2px 8px 0px #00000029;
    padding: 10px 40px;
`

 
const GuessInput: React.SFC= () => {
    const {state} = useContext(PokemonContext)
    return ( 
        <Input type="text"/>
     );
}
 
export default GuessInput;
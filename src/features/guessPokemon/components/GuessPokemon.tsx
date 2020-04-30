import * as React from "react";
import {  useContext } from "react";
import styled from "styled-components";

import PokImg from "./PokImg"
import GameInterface from "./GameInterface"
import {PokemonContext} from "../../../store/PokemonReducer"


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0;
`;

const Title = styled.h1`
  margin-top: 10px;
  width: 100%;
  font-size: 22px;
  color: white;
  text-align: center;
`


type PokemonData = {
  pokemonName: string | undefined,
  pokemonId: number
}

const GuessPokemon: React.SFC = () => {
  const {state} = useContext(PokemonContext)

  console.log(state)
  return (
    <Wrapper>
      <Title>Who's That Pokemon?</Title>
      <PokImg pokId={state?.pokId}/>
      <GameInterface/>
    </Wrapper>
  );
};

export default GuessPokemon;

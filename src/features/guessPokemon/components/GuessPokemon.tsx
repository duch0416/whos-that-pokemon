import * as React from "react";
import { useState, useContext } from "react";
import styled from "styled-components";

import StartGameBtn from "./StartGameBtn"
import PokImg from "./PokImg"
import {PokemonContext} from "../../../store/PokemonContext"



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
  const [pokData, setPokData] = useState<PokemonData>();
  const pokName = useContext(PokemonContext)

  console.log(pokName)
  return (
    <Wrapper>
      <Title>Who's That Pokemon?</Title>
      <PokImg pokId={pokData?.pokemonId}/>
      <StartGameBtn setPokData={setPokData}/>
    </Wrapper>
  );
};

export default GuessPokemon;

import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

import { drawPokemonData } from "../actions/drawPokemonData";

const Btn = styled.button`
  background-color: #00a86b;
  width: 150px;
  height: 50px;
  border-radius: 30px;
  box-shadow: 0px 2px 8px 0px #00000029;
`;
const StartBtnTxt = styled.p`
  color: white;
`;

type PokemonData = {
    pokemonName: string | undefined,
    pokemonId: number
}
    

interface StartGameBtnProps {}

const StartGameBtn: React.SFC<StartGameBtnProps> = () => {
  const [pokData, setPokData] = useState<PokemonData>();
  const drawPokemon = async () => {
    const PokemonData = await drawPokemonData();
    console.log(PokemonData)
    setPokData(PokemonData)
  };


  return (
    <>
    {pokData && <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokData?.pokemonId}.png`} alt="pokemon"/>}
      <Btn onClick={drawPokemon}>
        <StartBtnTxt>Wylosuj pokemona</StartBtnTxt>
      </Btn>
    </>
  );
};

export default StartGameBtn;

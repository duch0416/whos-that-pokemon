import * as React from "react";
import styled from "styled-components";

import { drawPokemonData } from "../actions/drawPokemonData";

const Btn = styled.button`
  background-color: #00a86b;
  width: 150px;
  height: 50px;
  border-radius: 30px;
  box-shadow: 0px 2px 8px 0px #00000029;
  margin-bottom: 10px;
`;
const StartBtnTxt = styled.p`
  color: white;
`;


    

interface StartGameBtnProps {
  setPokData: any;
}

const StartGameBtn: React.SFC<StartGameBtnProps> = ({setPokData}) => {
  const drawPokemon = async () => {
    const PokemonData = await drawPokemonData();
    console.log(PokemonData)
    setPokData(PokemonData)
  };


  return (
    <>
      <Btn onClick={drawPokemon}>
        <StartBtnTxt>Wylosuj pokemona</StartBtnTxt>
      </Btn>
    </>
  );
};

export default StartGameBtn;

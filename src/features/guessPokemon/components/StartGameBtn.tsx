import React, {useContext} from "react";
import styled from "styled-components";

import { drawPokemonData } from "../actions/drawPokemonData";
import {PokemonContext, setPokemonName} from "../../../store/PokemonReducer"


const Btn = styled.button`
  background-color: #00a86b;
  width: 150px;
  height: 50px;
  border-radius: 30px;
  box-shadow: 0px 2px 8px 0px #00000029;
  margin-bottom: 10px;
  cursor: pointer;
`;
const StartBtnTxt = styled.p`
  color: white;
`;



const StartGameBtn: React.SFC = () => {
  const {dispatch} = useContext(PokemonContext)


  const drawPokemon = async () => {
    const {pokemonName, pokemonId} = await drawPokemonData();
    dispatch(setPokemonName(pokemonName, pokemonId));
  };

  return (
    <Btn onClick={drawPokemon}>
      <StartBtnTxt>Wylosuj pokemona</StartBtnTxt>
    </Btn>
  );
};

export default StartGameBtn;

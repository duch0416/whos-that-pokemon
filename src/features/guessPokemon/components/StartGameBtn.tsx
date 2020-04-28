import * as React from "react";
import { useReducer } from "react";
import styled from "styled-components";

import { drawPokemonData } from "../actions/drawPokemonData";
import {pokemonReducer, setPokemonName} from "../../../store/PokemonReducer"
import {initialState} from "../../../store/PokemonContext"

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


    

interface StartGameBtnProps {
  setPokData: any;
}

const StartGameBtn: React.SFC<StartGameBtnProps> = ({setPokData}) => {
  const [state, dispatch] = useReducer(pokemonReducer, initialState)
  const drawPokemon = async () => {
    const PokemonData = await drawPokemonData();
    dispatch(state.pokName = PokemonData.pokemonName)
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

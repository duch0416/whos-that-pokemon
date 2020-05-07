import React, {useContext} from "react";
import styled from "styled-components";

import { drawPokemonData } from "../actions/drawPokemonData";
import {PokemonContext, setPokemonName} from "../../../store/Pokemon/PokemonReducer"
import {GuessStatusContext, setStatusToFalse} from "../../../store/GuessStatus/GueesReducer"


const Btn = styled.button`
  background-color: white;
  width: 150px;
  height: 50px;
  border-radius: 30px;
  box-shadow: 0px 2px 8px 0px #00000029;
  margin-bottom: 10px;
  cursor: pointer;
  transition: ease 0.2s;
  &:hover {
    transform: scale(1.1)
  }
`;
const StartBtnTxt = styled.p`
  color: gray;
`;



const StartGameBtn: React.SFC = () => {
  const {dispatch} = useContext(PokemonContext)
  const {setStatus} = useContext(GuessStatusContext)


  const drawPokemon = async () => {
    const {pokemonName, pokemonId} = await drawPokemonData();
    dispatch(setPokemonName(pokemonName, pokemonId));
    setStatus(setStatusToFalse())
  };

  return (
    <Btn onClick={drawPokemon}>
      <StartBtnTxt>Draw Pokemon</StartBtnTxt>
    </Btn>
  );
};

export default StartGameBtn;

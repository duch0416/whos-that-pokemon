import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

import StartGameBtn from "./StartGameBtn"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

const PokImg = styled.img`
  width: 160px;
  margin-bottom: 30px;
`

type PokemonData = {
  pokemonName: string | undefined,
  pokemonId: number
}

const GuessPokemon: React.SFC = () => {
  const [pokData, setPokData] = useState<PokemonData>();
  console.log(pokData)

  return (
    <Wrapper>
      {pokData && <PokImg src={`https://pokeres.bastionbot.org/images/pokemon/${pokData?.pokemonId}.png`} alt="pokemon"/>}
      <StartGameBtn setPokData={setPokData}/>
    </Wrapper>
  );
};

export default GuessPokemon;

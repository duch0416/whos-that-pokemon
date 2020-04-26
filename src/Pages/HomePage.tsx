import * as React from "react";
import styled from "styled-components";

import GuessPokemon from "../features/guessPokemon/components/GuessPokemon";
import { PokemonProvider, initialState } from "../store/PokemonContext";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #4a91f2;
`;

const HomePage: React.SFC = () => {
  return (
    <Wrapper>
      <PokemonProvider value={initialState}>
        <GuessPokemon />
      </PokemonProvider>
    </Wrapper>
  );
};

export default HomePage;

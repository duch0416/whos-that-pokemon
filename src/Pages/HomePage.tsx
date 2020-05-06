import * as React from "react";
import styled from "styled-components";

import GuessPokemon from "../features/guessPokemon/components/GuessPokemon";
import { PokemonProvider } from "../store/Pokemon/PokemonReducer";
import { GuessStatusProvider} from "../store/GuessStatus/GueesReducer";

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
      <PokemonProvider>
        <GuessStatusProvider>
          <GuessPokemon />
        </GuessStatusProvider>
      </PokemonProvider>
    </Wrapper>
  );
};

export default HomePage;

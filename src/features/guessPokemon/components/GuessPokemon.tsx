import * as React from "react";
import styled from "styled-components";

import StartGameBtn from "./StartGameBtn"

const Wrapper = styled.div`
`;


const GuessPokemon: React.SFC = () => {
  return (
    <Wrapper>
      <StartGameBtn/>
    </Wrapper>
  );
};

export default GuessPokemon;

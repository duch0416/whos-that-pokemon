import * as React from "react";
import styled from "styled-components";

import StartGameBtn from "./StartGameBtn";
import GuessInput from "./GuessInput";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export interface GameInterfaceProps {}

const GameInterface: React.SFC<GameInterfaceProps> = () => {
  return (
    <Wrapper>
      <StartGameBtn />
      <GuessInput />
    </Wrapper>
  );
};

export default GameInterface;

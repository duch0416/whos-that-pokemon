import * as React from "react";
import styled from "styled-components";

import GuessInput from "./GuessInput";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 75%;
`;
const Img = styled.img`
  width: 100%;
`;

const ImgWrapper = styled.div`
  height: 250px;
  width: 250px;
  @media (min-width: 768px) {
    height: 500px;
    width: 500px;
  }
`;

export interface PokImgProps {
  pokId: number | undefined;
}

const PokImg: React.SFC<PokImgProps> = ({ pokId }) => {
  return (
    <Wrapper>
      <ImgWrapper>
        {pokId && (
          <Img
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokId}.png`}
            alt="pokemon"
          />
        )}
      </ImgWrapper>
      <GuessInput />
    </Wrapper>
  );
};

export default PokImg;

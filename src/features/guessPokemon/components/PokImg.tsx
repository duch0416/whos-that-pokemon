import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75%;
`;
const Img = styled.img`
  max-width: 250px;
`;

export interface PokImgProps {
  pokId: number | undefined;
}

const PokImg: React.SFC<PokImgProps> = ({ pokId }) => {
  return (
    <Wrapper>
      {pokId && (
        <Img
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokId}.png`}
          alt="pokemon"
        />
      )}
    </Wrapper>
  );
};

export default PokImg;

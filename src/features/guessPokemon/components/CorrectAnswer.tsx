import * as React from "react";
import styled from "styled-components";


const GreenCircle = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: green;
`;
const Img = styled.img`
  width: 70px;
`;

const Text = styled.p`
    margin-top: 20px;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
`;

const CorrectAnswer: React.SFC = () => {
  return (
    <div>
      <GreenCircle>
        <Img src="check.svg" />
      </GreenCircle>
      <Text>Correct Answer</Text>
    </div>
  );
};

export default CorrectAnswer;

import * as React from 'react';
import styled from "styled-components"

import StartGameBtn from "./StartGameBtn"

const Wrapper = styled.div`
`

export interface GameInterfaceProps {
    
}
 
const GameInterface: React.SFC<GameInterfaceProps> = () => {
    return ( 
        <Wrapper>
            <StartGameBtn />
        </Wrapper>
     );
}
 
export default GameInterface;
import * as React from 'react';
import styled from "styled-components"

import GuessPokemon from "../features/guessPokemon/components/GuessPokemon"

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`

const HomePage: React.SFC = () => {


    return ( 
        <Wrapper>
            <GuessPokemon/>
        </Wrapper>
     );
}
 
export default HomePage;
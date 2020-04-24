import * as React from "react";
import { createGlobalStyle } from "styled-components";

import HomePage from "./pages/HomePage";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        line-height: 1.4em;
        vertical-align: baseline;
        text-decoration: none;
        outline: 0;
    }
`;

const App: React.SFC = () => {
  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  );
};

export default App;

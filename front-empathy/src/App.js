import React from 'react';
import { renderRoutes } from "react-router-config";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ul, ol {
    list-style: none;
  }
`;


function App({ route }) {
  return (
    <>
      <GlobalStyle/>
      {renderRoutes(route.routes)}
    </>
  );
}

export default App;

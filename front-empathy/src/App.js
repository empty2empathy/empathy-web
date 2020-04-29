import React from 'react';
import { renderRoutes } from "react-router-config";

function App({ route }) {
  return (
    <>
      {renderRoutes(route.routes)}
    </>
  );
}

export default App;

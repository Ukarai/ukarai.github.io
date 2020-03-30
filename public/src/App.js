import React from 'react';
import { GlobalProvider } from './Context/GlobalContext';
import { Routes } from './Routes/Routes';

function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}

export default App;

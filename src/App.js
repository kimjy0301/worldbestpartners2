import React from 'react';
import 'normalize.css';
import './App.css';
import Main from './components/Main';
import './css/tailwind.css';

import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
  html {
    font-family:'Spoqa Han Sans', 'Sans-serif';
  }
`;


function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Main></Main>
    </div>
  );
}

export default App;

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router';

import App from './App.jsx'
import Waves from './assets/Waves.jsx'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Waves />
      <App />
    </BrowserRouter>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Waves from './assets/Waves.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Waves />
    <App />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import "./index.css"
import { LazyFooter } from './sections/Photos/Utils/Footer/LazyFooter'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <LazyFooter/>
  </StrictMode>,
)

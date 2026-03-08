import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'

const basename = import.meta.env.BASE_URL

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={
      basename.endsWith('/')
        ? basename.slice(0, -1)
        : basename
    }>
      <App />
    </BrowserRouter>
  </StrictMode >,
)

import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react';
import Run from './Run.jsx'
import { BrowserRouter } from "react-router";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Run />
  </BrowserRouter>,
)

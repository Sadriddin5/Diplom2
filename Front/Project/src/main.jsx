import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App  from './App.jsx'
import Fut  from './Components/Futter.jsx'
import Home from './Pages/home.jsx'
import Galery from './Pages/galery.jsx'
import Bio from './Pages/biography.jsx'
import Tvor from './Sections4/tvorchestvo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <App />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/galery" element={<Galery/>} />
        <Route path="/bio" element={<Bio/>} />
        <Route path="/tvor" element={<Tvor/>} />
      </Routes>
      <Fut/>
    </BrowserRouter>
  </StrictMode>,
)

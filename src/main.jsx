import React from 'react'
import ReactDOM from 'react-dom/client'

// Componentes
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'
import Tratamiento from './components/Tratamiento.jsx'
// Páginas
import Nosotros from './pages/Nosotros.jsx' 
import Tratamientos from './pages/Tratamientos.jsx'
import DraModelo from './pages/DraModelo.jsx'
import Contacto from './pages/Contacto.jsx'
import NotFound from './pages/NotFound.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  /* <React.StrictMode> */
    <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Nosotros />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route exact path="/tratamientos"  element={<Tratamientos /> } /> 
            <Route path="/tratamientos/:numero"  element={<Tratamiento />} />
            <Route path="/dra-modelo" element={<DraModelo />} />
            <Route path="/contacto"  element={<Contacto />}  />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
  /* </React.StrictMode>, */
)

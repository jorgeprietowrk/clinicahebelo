import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';
import '../header.css';
import Logo from '../components/Logo';

const tratamientos = [
  { numero: '1', nombre: 'Tratamiento de ojeras' },
  { numero: '2', nombre: 'Hidratación profunda' },
  { numero: '3', nombre: 'Tratamiento de labios' },
  { numero: '4', nombre: 'Estimuladores de colágeno' },
  { numero: '5', nombre: 'Tratamiento de bruxismo' },
  { numero: '6', nombre: 'Mesoterapia con vitaminas' },
  { numero: '7', nombre: 'Armonización facial' },
  { numero: '8', nombre: 'Rinomodelación' },
  { numero: '9', nombre: 'Peeling químico' },
  { numero: '10', nombre: 'Eliminación de arrugas de expresión' },
  { numero: '11', nombre: 'Tratamiento de verrugas y queratosis' },
  { numero: '12', nombre: 'Aumento de pómulos' },
  { numero: '13', nombre: 'Marcación mandibular' },
  { numero: '14', nombre: 'Código de barras' },
  { numero: '15', nombre: 'Tratamiento de la sonrisa gingival' },
  { numero: '16', nombre: 'Polinucleótidos' },
  { numero: '17', nombre: 'Exosoma' },
  { numero: '18', nombre: 'Tratamiento de manchas' },
];

function Header() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path ? 'font-bold' : '';

    return (
        <>
        <header>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
            
            <ul className={`fullmenu ${menuOpen ? 'open' : ''}`}>
                <Link to="/" onClick={() => setMenuOpen(false)} id='logoItemR'><Logo /></Link>
                <li className="fullmenu__item"><Link to="/" onClick={() => setMenuOpen(false)} className={`${isActive('/')} hover:font-bold`}>NOSOTROS</Link></li>
                <li className="fullmenu__item"> 
                    <Link to="/tratamientos" onClick={() => setMenuOpen(false)} className={`${isActive('/tratamientos')} hover:font-bold `}>TRATAMIENTOS</Link>
                    <ul className='submenu'>
                        {tratamientos.map(tratamiento => (
                            <li key={tratamiento.numero}>
                                <Link to={`/tratamientos/${tratamiento.numero}`} onClick={() => setMenuOpen(false)} className='block p-6 hover:text-gray-400'>
                                    {tratamiento.nombre}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
                <Link to="/" onClick={() => setMenuOpen(false)} id='logoItem'><Logo /></Link>
                <li className="fullmenu__item"><Link to="/dra-modelo" onClick={() => setMenuOpen(false)} className={`${isActive('/dra-modelo')} hover:font-bold`}>DRA. MODELO</Link></li>
                <li className="fullmenu__item"><Link to="/contacto" onClick={() => setMenuOpen(false)} className={`${isActive('/contacto')} hover:font-bold`}>CONTACTO</Link></li>
            </ul>
            

        </header>
        <div className='m-4'>

        <Link to="/" id='logoR' className=''><Logo /></Link>
        </div>
    </>);
}

export default Header;

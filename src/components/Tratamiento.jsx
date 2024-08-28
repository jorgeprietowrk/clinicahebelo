import React from 'react';
import { useParams } from 'react-router-dom';
import { tratamientos } from '../js/tratamientos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCalendar, faSyringe, faClock } from '@fortawesome/free-solid-svg-icons';
import h from '../media/icono.jpg';

import ojeras from '../media/tratamientos/ojeras.jpg';
import hidratacion from '../media/tratamientos/hidratacion.jpg';
import bruxismo from '../media/tratamientos/bruxismo.jpg';
import armonizacionfacial from '../media/tratamientos/armonizacionfacial.jpg';
import rinomodelacion from '../media/tratamientos/rinomodelacion.jpg';
import arrugas from '../media/tratamientos/arrugas.jpg';
import verrugas from '../media/tratamientos/verrugas.jpg';
import colageno from '../media/tratamientos/colageno.jpg';
import marcacion from '../media/tratamientos/marcacion.jpg';
import codigodebarras from '../media/tratamientos/codigodebarras.jpg';
import polinucleotidos from '../media/tratamientos/polinucleotidos.jpg';
import exosomas from '../media/tratamientos/exosomas.jpg';
import manchas from '../media/tratamientos/manchas.jpeg';
import sonrisa from '../media/tratamientos/sonrisa.jpeg';
import pomulos from '../media/tratamientos/pomulos.jpeg';
import peeling from '../media/tratamientos/peeling.jpeg';
import mesoterapia from '../media/tratamientos/mesoterapia.jpeg';
import labios from '../media/tratamientos/labios.jpeg';

const imageMap = {
  'ojeras.jpg': ojeras,
  'hidratacion.jpg': hidratacion,
  'bruxismo.jpg': bruxismo,
  'armonizacionfacial.jpg': armonizacionfacial,
  'rinomodelacion.jpg': rinomodelacion,
  'arrugas.jpg': arrugas,
  'verrugas.jpg': verrugas,
  'marcacion.jpg': marcacion,
  'codigodebarras.jpg': codigodebarras,
  'polinucleotidos.jpg': polinucleotidos,
  'exosomas.jpg': exosomas,
  'manchas.jpeg': manchas,
  'sonrisa.jpeg': sonrisa,
  'pomulos.jpeg': pomulos,
  'peeling.jpeg': peeling,
  'mesoterapia.jpeg': mesoterapia,
  'labios.jpeg': labios,
  'colageno.jpg': colageno,
};

function Tratamiento() {
  const { numero } = useParams();
  const tratamiento = tratamientos.find(t => t.numero === numero);

  if (!tratamiento) {
    return <div className='mx-auto'>Tratamiento no encontrado.</div>;
  }

  const imageUrl = tratamiento.imagen ? imageMap[tratamiento.imagen] : h;

  return (
    <section id='nv' className='mt-10 px-4 sm:px-8 lg:px-16 mb-20'>
      <div className='titulo lg:w-2/3 w-full lg:text-center sm:text-center md:text-center lg:mb-20 text-left text-5xl sm:text-5xl lg:text-7xl font-bold break-words' style={{ whiteSpace: 'pre-wrap' }}>
        {tratamiento.nombre.split(' ').map((word, index) => (
          <span key={index} className='inline-block border-b-4 border-[#F3DFDC]'>
            {word}&nbsp;
          </span>
        ))}
      </div>

      <div className="flex flex-col justify-evenly lg:flex-row items-center mt-6 lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
        <div className="w-auto lg:w-96 flex justify-center lg:justify-start overflow-hidden rounded-lg">
          <img 
            src={imageUrl} 
            alt={tratamiento.nombre}
            className="w-72 h-72 lg:w-full lg:h-full object-cover rounded-lg transform transition-transform duration-500 hover:scale-110" 
          />
        </div>

        <div className="w-full lg:w-1/2 text-lg sm:text-2xl lg:text-3xl leading-relaxed">
          <div className="flex justify-center w-full lg:justify-center items-center lg:items-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faHeart} size="2x" />
                <span className="text-xl font-semibold mt-2">Resultado</span>
                <span className="text-lg mt-1">{tratamiento.resultado}</span>
              </div>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faCalendar} size="2x" />
                <span className="text-xl font-semibold mt-2">Duración</span>
                <span className="text-lg mt-1">{tratamiento.duracion}</span>
              </div>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faSyringe} size="2x" />
                <span className="text-xl font-semibold mt-2">Anestesia</span>
                <span className="text-lg mt-1">{tratamiento.anestesia}</span>
              </div>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faClock} size="2x" />
                <span className="text-xl font-semibold mt-2">Aplicación</span>
                <span className="text-lg mt-1">{tratamiento.aplicacion}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-lg sm:text-2xl lg:text-3xl text-justify">
            <p>{tratamiento.descripcion}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tratamiento;

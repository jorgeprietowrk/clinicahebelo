import React from 'react';
import { tratamientos } from '../js/tratamientos';
import { Link } from 'react-router-dom';

function Tratamientos() {
  return (
    <main className="flex justify-center">
      <div className="py-8 my-8 mx-auto w-[90%] sm:w-[90%] lg:w-3/4 bg-[#f8dcdc] rounded-md shadow-md overflow-hidden">
        <div className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 px-4 sm:px-6">
          TRATAMIENTOS
        </div>
        <div className="text-center text-lg lg:text-2xl leading-extra-tight space-y-6 px-4">
          {tratamientos.map((tratamiento) => (
            <div key={tratamiento.numero} className="hover:text-gray-400 transition duration-300 ease-in-out">
              <Link to={`/tratamientos/${tratamiento.numero}`}>
                {tratamiento.nombre}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Tratamientos;

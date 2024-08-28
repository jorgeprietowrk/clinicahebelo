import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <FontAwesomeIcon icon={faExclamationTriangle} size="6x" className="text-red-500 mb-4" />
      <h1 className="text-4xl font-bold mb-4">404 - Página No Encontrada</h1>
      <p className="text-lg mb-8">Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className="text-blue-500 text-lg">
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;

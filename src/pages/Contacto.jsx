import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Contacto() {
  return (
    <main className='px-4 md:px-10 lg:px-20'>
      <section id='nv' className='mt-20'>
        <div className="titulo text-center text-3xl md:text-4xl lg:text-5xl font-bold">
          CONTACTO
        </div>
        <div className="subtitulo text-center mt-4 text-xl md:text-2xl lg:text-3xl">
          Contacta con nosotros
        </div>

        <div className="flex flex-col items-center mt-10 mb-12 text-xl sm:text-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full">
            <a
              href="https://wa.me/638065332?text="
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center text-blue-600 hover:underline transition-all duration-1000 justify-center'
            >
              <FontAwesomeIcon icon={faWhatsapp} className='mr-3 text-2xl' />
              <span>Clínica Hébelo</span>
            </a>
            <a
              href="tel:638065332"
              className='flex items-center text-blue-600 hover:underline transition-all duration-1000 justify-center'
            >
              <FontAwesomeIcon icon={faPhone} className='mr-3 text-2xl' />
              <span>638 06 53 32</span>
            </a>
            <a
              href="mailto:info@clinicahebelo.com"
              className='flex items-center text-blue-600 hover:underline transition-all duration-1000 justify-center'
            >
              <FontAwesomeIcon icon={faEnvelope} className='mr-3 text-2xl' />
              <span>info@clinicahebelo.com</span>
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-x-28 md:space-y-0 mt-6 w-full md:w-auto">
            <a
              href="https://www.instagram.com/clinica.hebelo/"
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center text-blue-600 hover:underline transition-all duration-1000'
            >
              <FontAwesomeIcon icon={faInstagram} className='mr-3 text-2xl' />
              <span>clinica.hebelo</span>
            </a>
            <a
              href="https://www.instagram.com/dra.genovevamodelo/"
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center text-blue-600 hover:underline transition-all duration-1000'
            >
              <FontAwesomeIcon icon={faInstagram} className='mr-3 text-2xl' />
              <span>dra.genovevamodelo</span>
            </a>
          </div>
        </div>

        <div className="subtitulo text-center mt-10 text-xl md:text-2xl lg:text-3xl">
          Donde estamos
        </div>
        <div className='flex flex-col items-center mt-6'>
          <a
            href='https://www.google.com/maps/place/Cl%C3%ADnica+H%C3%A9belo/@37.8896199,-4.7998195,18z/data=!4m6!3m5!1s0xd6cdf82553765cb:0xbd94e1e67eae9697!8m2!3d37.8895475!4d-4.7988168!16s%2Fg%2F11ldx245l9?entry=ttu'
            target='_blank'
            rel='noopener noreferrer'
            className="text-center underline mb-6 text-lg md:text-xl lg:text-2xl flex items-center space-x-2"
          >
            <span>Calle Isla Gomera, 3, Local</span>
            <FontAwesomeIcon icon={faLocationDot} className='text-2xl' />
          </a>
          <div className='w-full mb-10 md:mb-20 mt-6'>
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=+(Clinica%20Hebelo)&amp;t=k&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Ubicación en Google Maps"
            >
              <a href="https://www.gps.ie/sport-gps/">hiking gps</a>
            </iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contacto;

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
          Contacta con <br /> nosotros
        </div>
        <div className="flex flex-col md:flex-row md:justify-around text-lg md:text-xl lg:text-2xl mt-10 md:mt-20 mb-12 md:mb-24">
          <div className='flex flex-col items-center md:items-start md:flex-row md:space-x-8 space-y-6 md:space-y-0'>
            <a href="https://wa.me/645963090?text=" target='_blank' rel='noopener noreferrer' className='flex items-center text-blue-600 hover:underline'>
              <FontAwesomeIcon icon={faWhatsapp} className='mr-4 text-2xl' />
              Clínica Hébelo
            </a>
            <a href="tel:638065332" className='flex items-center text-blue-600 hover:underline'>
              <FontAwesomeIcon icon={faPhone} className='mr-4 text-2xl' />
              638 06 53 32
            </a>
            <a href="mailto:info@clinicahebelo.com" className='flex items-center text-blue-600 hover:underline'>
              <FontAwesomeIcon icon={faEnvelope} className='mr-4 text-2xl' />
              info@clinicahebelo.com
            </a>
            <a href="https://www.instagram.com/clinica.hebelo/" target='_blank' rel='noopener noreferrer' className='flex items-center text-blue-600 hover:underline'>
              <FontAwesomeIcon icon={faInstagram} className='mr-4 text-2xl' />
              @clinica.hebelo
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
            className="subtitulo text-center underline mb-6 text-lg md:text-xl lg:text-2xl"
          >
            Calle Isla Gomera, 3, Local <FontAwesomeIcon icon={faLocationDot} className='ml-2 text-2xl' />
          </a>
          <div className='w-full mb-10 md:mb-20 mt-10'>
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

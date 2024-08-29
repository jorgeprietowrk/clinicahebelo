import React from 'react'
import LogoBlanco from '../components/LogoBlanco'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Footer() {
  return (
    <footer className='bg-black flex flex-col md:flex-row justify-around items-center text-white p-6'>
      <div className='mb-4 md:mb-0'><LogoBlanco /></div>

      <div className='leading10 text-center md:text-left'>
        <div className='negrita text-4xl md:text-3xl mb-4 md:mb-0 mt-2'>Contacto</div>
        <div>
          <a href="https://wa.me/645963090?text=" target='_blank' rel='noopener noreferrer' className='font-thin text-base md:text-xl block'>
            <FontAwesomeIcon icon={faWhatsapp} className='mr-2 md:mr-4 mt-2' />Clínica Hébelo
          </a>
        </div>
        <div>
          <a href="tel:638065332" className='font-thin text-base md:text-xl block mt-2'>
            <FontAwesomeIcon icon={faPhone} className='mr-2 md:mr-4' />638 06 53 32
          </a>
        </div>
        <div>
          <a href="mailto:info@clinicahebelo.com" className='font-thin text-base md:text-xl block mt-2'>
            <FontAwesomeIcon icon={faEnvelope} className='mr-2 md:mr-4' />info@clinicahebelo.com
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/clinica.hebelo/" target='_blank' rel='noopener noreferrer' className='font-thin text-base md:text-xl block mt-2'>
            <FontAwesomeIcon icon={faInstagram} className='mr-2 md:mr-4' />@clinica.hebelo
          </a>
        </div>
        <div>
        <a href="https://www.instagram.com/dra.genovevamodelo/" target='_blank' rel='noopener noreferrer' className='font-thin text-base md:text-xl block mt-2'>
              <FontAwesomeIcon icon={faInstagram} className='mr-2 md:mr-4 ' />
              @dra.genovevamodelo
            </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

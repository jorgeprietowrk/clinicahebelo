import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clinica1 from '../media/IMG_6163.jpg';
import clinica2 from '../media/IMG_6170.jpg';
import clinica3 from '../media/IMG_6166.jpg';
import clinica4 from '../media/IMG_6158.jpg';
import home1 from '../media/home11.png';
import home2 from '../media/home2.jpeg';
import home3 from '../media/home3.jpeg';
import CasosSlider from '../components/CasosSlider';



const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} size="2x" />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '10px', zIndex: 1 }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} size="2x" />
    </div>
  );
};



function Nosotros() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    adaptiveHeight: true,
  };

  return (
    <>
      <main>
        <div className='slider-section mt-2'>
        <Slider {...sliderSettings}>
            <div className="slider-image relative">
              <img src={home1} alt="Clínica Hébelo" className="w-full h-auto object-cover" />
            </div>

            <div className="slider-image relative">
              <img src={home2} alt="Imagen 2" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 flex flex-col items-end justify-center text-black font-antic-didone p-8 sm:p-16 lg:p-32">
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 didone text-right">
                  SOBRE LA <br /> DOCTORA
                </h2>
                <Link
                  to="/dra-modelo"
                  className="text-lg sm:text-xl lg:text-2xl px-4 py-2 bg-black hover:bg-gray-800 transition-colors duration-300 text-white rounded mt-4 sm:mt-6 lg:mt-8 mr-8 sm:mr-12 lg:mr-16"
                >
                  Ver Más
                </Link>
              </div>
            </div>

            <div className="slider-image relative">
  <img src={home3} alt="Imagen 3" className="w-full h-auto object-cover" />
  <div className="absolute inset-0 flex flex-col items-start justify-center text-black font-antic-didone p-8 sm:p-16 lg:p-32">
    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 didone">
      TRATAMIENTOS
    </h2>
    <Link
      to="/tratamientos"
      className="sm:text-4xl lg:text-2xl px-4 py-2 bg-black hover:bg-gray-800 transition-colors duration-300 text-white rounded sm:mt-2 lg:mt-6"
    >
      Ver Tratamientos
    </Link>
  </div>
</div>

          </Slider>
        </div>

        <section id='nv' className='mt-20'>
          <div className="titulo text-center leading-10">NUESTROS VALORES</div>
          <div className="contenedor">
            <div>
              <div className="subtitulo">Respeto por la naturalidad</div>
              <div className="texto">
                El respeto por la naturalidad en la medicina estética es un principio esencial.
              </div>
              <div className="texto">
                Se trata de entender la individualidad de cada paciente, reconociendo que la belleza auténtica yace en la diversidad y singularidad de cada persona.
              </div>
              <div className="texto">
                Nuestro objetivo es realzar la belleza inherente de nuestros pacientes en lugar de transformar sus rasgos.
              </div>
            </div>
          </div>

          <div className="contenedor flex-row-reverse text-right mt-10 float-right">
            <div>
              <div className="subtitulo ">Seguridad del paciente</div>
              <div className="texto">
                Desde el momento en que un paciente entra en nuestras consultas, nuestro compromiso es asegurarnos de que se sientan protegidos,
                informados y atendidos con el más alto nivel de cuidado.
              </div>
              <div className="texto">
                La seguridad comienza con la aplicación rigurosa de estándares médicos y protocolos de seguridad.
                Utilizamos únicamente técnicas y tratamientos aprobados, así como equipos de última generación que han demostrado su eficacia y seguridad en el campo de la medicina estética.
              </div>
            </div>
          </div>

          <div className="contenedor mt-6">
            <div>
              <div className="subtitulo">Profesionalidad</div>
              <div className="texto">
                Nuestro compromiso con la excelencia médica se refleja en nuestra continua búsqueda de conocimientos y habilidades actualizadas.
              </div>
              <div className="texto">
                Nos esforzamos por mantenernos al tanto de los avances científicos y tecnológicos más recientes en el campo de la medicina estética, asistiendo a cursos,
                conferencias y participando en programas de formación continua.
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="titulo text-center mt-12">LA CLÍNICA</div>
        </section>

        <div className='slider-section'>
          <Slider {...sliderSettings}>
            <div className="slider-image">
              <img src={clinica1} alt="Clinica Hébelo" className="w-full h-auto object-cover" />
            </div>
            <div className="slider-image">
              <img src={clinica2} alt="Clinica Hébelo" className="w-full h-auto object-cover" />
            </div>
            <div className="slider-image">
              <img src={clinica3} alt="Clinica Hébelo" className="w-full h-auto object-cover" />
            </div>
            <div className="slider-image">
              <img src={clinica4} alt="Clinica Hébelo" className="w-full h-auto object-cover" />
            </div>
          </Slider>
        </div>

        <section className="flex justify-center mt-20 lg:mt-0">
          <a
            href='https://www.google.com/maps/place/Cl%C3%ADnica+H%C3%A9belo/@37.8896199,-4.7998195,18z/data=!4m6!3m5!1s0xd6cdf82553765cb:0xbd94e1e67eae9697!8m2!3d37.8895475!4d-4.7988168!16s%2Fg%2F11ldx245l9?entry=ttu'
            target='_blank'
            rel='noopener noreferrer'
            className="subtitulo text-center underline maps text-base sm:text-lg md:text-xl lg:text-5xl p-2 sm:p-4 md:p-6 lg:p-8 w-[90%] lg:w-[55%]"
          >
            Calle Isla Gomera, 3, Local
            <FontAwesomeIcon icon={faLocationDot} className="ml-2" />
          </a>
        </section>

        <section className='mt-20'>
          <div className="titulo text-center">
            <Link to={`https://search.google.com/local/writereview?placeid=ChIJy2U3VYLfbA0Rl5aufubhlL0`} className='titulo'>OPINIONES</Link>
          </div>
           {/* <div data-trustmary-widget="JEO7CtCk1"></div>  */}
            <div class="elfsight-app-4dd31981-9264-4199-be80-74ac507077da" data-elfsight-app-lazy></div>
        </section>

        <section className='mt-20 mb-20'>
          <div className="titulo text-center">CASOS DE LA DOCTORA</div>
          <CasosSlider />
          
        </section>
      </main>
    </>
  );
}

export default Nosotros;

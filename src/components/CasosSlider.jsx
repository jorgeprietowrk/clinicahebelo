import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import caso1 from "../media/carrusel/fotos carrusel_page-0001.jpg";
import caso2 from "../media/carrusel/fotos carrusel_page-0002.jpg";
import caso3 from "../media/carrusel/fotos carrusel_page-0003.jpg";
import caso4 from "../media/carrusel/fotos carrusel_page-0004.jpg";
import caso5 from "../media/carrusel/fotos carrusel_page-0005.jpg";
import caso6 from "../media/carrusel/fotos carrusel_page-0006.jpg";
import caso7 from "../media/carrusel/fotos carrusel_page-0007.jpg";
import caso8 from "../media/carrusel/fotos carrusel_page-0008.jpg";
import caso9 from "../media/carrusel/fotos carrusel_page-0009.jpg";
import caso10 from "../media/carrusel/fotos carrusel_page-0010.jpg";
import caso11 from "../media/carrusel/fotos carrusel_page-0011.jpg";
import caso12 from "../media/carrusel/fotos carrusel_page-0012.jpg";
import caso13 from "../media/carrusel/fotos carrusel_page-0013.jpg";
import caso14 from "../media/carrusel/fotos carrusel_page-0014.jpg";
import caso15 from "../media/carrusel/fotos carrusel_page-0015.jpg";
import caso16 from "../media/carrusel/fotos carrusel_page-0016.jpg";
import caso17 from "../media/carrusel/fotos carrusel_page-0017.jpg";
import caso18 from "../media/carrusel/fotos carrusel_page-0018.jpg";
import caso19 from "../media/carrusel/fotos carrusel_page-0019.jpg";
import caso20 from "../media/carrusel/fotos carrusel_page-0020.jpg";
import caso21 from "../media/carrusel/fotos carrusel_page-0021.jpg";
import caso22 from "../media/carrusel/fotos carrusel_page-0022.jpg";
import caso23 from "../media/carrusel/fotos carrusel_page-0023.jpg";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 cursor-pointer z-10 mb-10"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} size="2x" className="text-black" />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} size="2x" className="text-black" />
    </div>
  );
};

function CasosSlider() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    adaptiveHeight: true,
    
  };

  const cases = [
    caso1,
    caso2,
    caso3,
    caso4,
    caso5,
    caso6,
    caso7,
    caso8,
    caso9,
    caso10,
    caso11,
    caso12,
    caso13,
    caso14,
    caso15,
    caso16,
    caso17,
    caso18,
    caso19,
    caso20,
    caso21,
    caso22,
    caso23,
  ];

  return (
    <div
      className="slider-section mt-10 mx-auto"
      style={{ maxWidth: "60%", height: "auto" }}
    >
      <Slider {...sliderSettings}>
        {cases.map((caso, index) => (
          <div key={index} className="slider-image">
            <img
              src={caso}
              alt={`Caso ${index + 1}`}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CasosSlider;

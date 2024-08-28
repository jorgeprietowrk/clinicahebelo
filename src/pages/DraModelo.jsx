import React from 'react'
import Geno from '../media/dramodelo.jpg'

function DraModelo() {
    return (
        <main>
            <section className='w-full md:w-3/4 mx-auto px-4 md:px-0 mb-10'>
                <div id='datos' className='flex flex-col md:flex-row-reverse justify-center items-center'>
                    <div className='w-full md:w-1/2 text-center md:text-right subtitulo'>
                        Sobre la <br />
                        Dra. Genoveva Modelo
                        <div className="texto mt-4 md:mt-0">
                            La Dra Genoveva Modelo es
                            <span className='rosa'> Licenciada en Medicina</span> por la Universidad de Córdoba,
                            <span className='rosa'> Máster en Medicina estética</span> y <span className='rosa'>Docente del Máster en Medicina estética</span> de Córdoba
                        </div>
                    </div>

                    <div className='md:w-1/2 mt-4 md:mt-10 flex justify-center'>
                        <div className='w-full md:w-full geno'>
                            <img src={Geno} alt="Dra. Genoveva Modelo" className='rounded-full' />
                        </div>
                    </div>
                </div>
                <div className="texto mt-10 md:mt-20 text-center md:text-left">
                    La Doctora apuesta por la naturalidad en sus resultados, aconsejando siempre el tratamiento que más se adapte a tus necesidades.
                </div>

                <div className='titulo text-center mt-20'>Opiniones de sus pacientes</div>
                <div class="elfsight-app-86449b63-c3e6-447c-a3cb-2b76840b366b" data-elfsight-app-lazy></div>
            </section>
        </main>
    )
}

export default DraModelo

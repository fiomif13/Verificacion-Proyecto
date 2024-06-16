import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './globals.css';
import './style.css';
import imagenes from "./imagenes";

const Inicio = () => {
  return (
    <div className="inicio">
      <div className="div">
        <div className="mask-group">
          <Carousel showThumbs={false} showArrows={false} autoPlay infiniteLoop>
            <div>
              <img className="frame" src={imagenes.frame303} alt="" />
            </div>
            <div>
              <img className="frame" src={imagenes.slide2} alt="" />
            </div>
            <div>
              <img className="frame" src={imagenes.slide3} alt="" />
            </div>
          </Carousel>
        </div>
        <div className="overlap">
          <img className="group" src={imagenes.group72} alt="" />
          <Link to={"/venta-nuevos"} >
            <img className="img" src={imagenes.frame282} alt="" />
          </Link>
          <img className="line" src={imagenes.line8} alt="" />
          <div className="frame-2">
            <div className="frame-3">
              <Carousel showThumbs={false} showArrows={true} autoPlay infiniteLoop showIndicators={false}>
                <div>
                  <img className='frame' src={imagenes.slide4} alt='' />
                  <div className="button-md"><div className="btn-text">Ver más</div></div>
                </div>
                <div>
                  <img className='frame' src={imagenes.slide5} alt='' />
                  <div className="button-md"><div className="btn-text">Ver más</div></div>
                </div>
                <div>
                  <img className='frame' src={imagenes.slide6} alt='' />
                  <div className="button-md"><div className="btn-text">Ver más</div></div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="frame-4">
            <div className="div-wrapper">
              <div className="frame-5">
                <div className="frame-6">
                  <p className="RESEARCH">
                    <span className="text-wrapper-2">¿Alguna pregunta? Llámenos 24/7!</span>
                    <span className="text-wrapper-3">&nbsp;</span>
                  </p>
                  <p className="stratus-RESEARCH">967 673 169<br />963 542 293</p>
                  <p className="cont-ctenos">
                    <span className="text-wrapper-2">Contáctenos<br /></span>
                    <span className="text-wrapper-4">gamecycle@gmail.com</span>
                  </p>
                  <img className="frame-7" src={imagenes.frame118} alt="" />
                </div>
                <div className="frame-8">
                  <div className="text-wrapper-5">Tendencias</div>
                  <div className="frame-9">
                    <div className="text-wrapper-6">PS4</div>
                    <div className="text-wrapper-7">PS3</div>
                    <div className="text-wrapper-7">XBOX ONE</div>
                    <div className="text-wrapper-7">XBOX 360</div>
                    <div className="text-wrapper-7">NINTENDO SWITCH</div>
                  </div>
                </div>
                <div className="frame-10">
                  <div className="text-wrapper-5">Información</div>
                  <div className="frame-9">
                    <div className="text-wrapper-6">Sobre nosotros</div>
                    <div className="text-wrapper-7">Contactenos</div>
                    <div className="text-wrapper-7">FAQs</div>
                    <div className="text-wrapper-7">Devoluciones</div>
                    <div className="text-wrapper-7">Políticas</div>
                    <div className="text-wrapper-7">Terminos y condiciones</div>
                  </div>
                </div>
                <div className="frame-11">
                  <div className="text-wrapper-5">Atencion al cliente</div>
                  <div className="frame-9">
                    <div className="text-wrapper-6">Mi cuenta</div>
                    <div className="text-wrapper-7">Rastrear orden</div>
                    <div className="text-wrapper-7">Visto recientemente</div>
                    <div className="text-wrapper-7">Lista de deseos</div>
                    <div className="text-wrapper-7">Comparar</div>
                    <div className="text-wrapper-7">Ser un vendedor</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-12">
              <div className="img-wrapper"><img className="VISA" src={imagenes.visa} alt=""/></div>
              <div className="img-wrapper"><img className="MASTER" src={imagenes.master} alt=""/></div>
              <div className="img-wrapper"><img className="image" src={imagenes.image128} alt=""/></div>
              <div className="img-wrapper"><img className="INSLALLMENTS" src={imagenes.inslallments} alt=""/></div>
            </div>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group"><div className="element-e">© 2023 Game Cycle</div></div>
        </div>      
      </div>
    </div>
  );
};

export default Inicio;

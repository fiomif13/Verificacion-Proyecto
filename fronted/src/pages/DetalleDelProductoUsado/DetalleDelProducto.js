import React from 'react';
import { Link } from 'react-router-dom';
import imagenes from './imagenes'; // Importar el archivo imagenes.js
import './globals.css';
import './style.css';

const DetalleProductoUsado = () => {
  return (
    <div className="detalle-del-producto">
      <div className="div">
        <div className="frame">
          <div className="div-wrapper"><div className="text-wrapper">Acción</div></div>
          <div className="div-wrapper"><div className="text-wrapper">Aventura</div></div>
          <div className="div-wrapper"><div className="text-wrapper">Mundo Abierto</div></div>
        </div>
        <div className="frame-2"><div className="text-wrapper-2">Añadir al carro</div></div>
        <div className="frame-3">
          <img className="img" src={imagenes.frame} alt="frame" />
          <div className="text-wrapper-3">1</div>
          <img className="img" src={imagenes.frame1181} alt="frame-1" />
        </div>
        <div className="frame-4"><div className="text-wrapper-4">-9%</div></div>
        <div className="text-wrapper-5">Marvel Spiderman</div>
        <div className="frame-5">
          <div className="text-wrapper-6">S/100</div>
          <div className="text-wrapper-7">S/110</div>
        </div>
        <div className="text-wrapper-8">Estado: Usado</div>
        <p className="p">
          Siente todo el poder de un Spider-Man más experimentado con combate improvisado, acrobacias dinámicas,
          recorrido urbano fluido e interacciones con el entorno.
        </p>
        <div className="text-wrapper-9">Géneros</div>
        <img className="image" src={imagenes.vector} alt="image-1" />
        <img className="image-2" src={imagenes.image2} alt="image-2" />
        <img className="image-3" src={imagenes.image5} alt="image-3" />
        <img className="image-4" src={imagenes.image6} alt="image-4" />
        <div className="frame-6">
          <div className="frame-7">
            <img className="star" src={imagenes.starL} alt="star-1" />
            <img className="star" src={imagenes.star2} alt="star-2" />
            <img className="star" src={imagenes.star3} alt="star-3" />
            <img className="star" src={imagenes.star4} alt="star-4" />
            <img className="star-2" src={imagenes.star5} alt="star-5" />
          </div>
          <p className="element"><span className="span">4.5/</span> <span className="text-wrapper-10">5</span></p>
        </div>
        <img className="line" src={imagenes.line3} alt="line-3" />
        <img className="line-2" src={imagenes.line7} alt="line-3" />
        <img className="line-3" src={imagenes.line7} alt="line-3" />
        <div className="frame-wrapper">
          <div className="frame-8">
            <div className="frame-9">
              <div className="frame-10">
                <div className="frame-11">
                  <p className="RESEARCH">
                    <span className="text-wrapper-11">¿Alguna pregunta? Llámenos 24/7!</span>
                    <span className="text-wrapper-12">&nbsp;</span>
                  </p>
                  <p className="stratus-RESEARCH">967 673 169<br />963 542 293</p>
                  <p className="cont-ctenos">
                    <span className="text-wrapper-11">Contáctenos<br /></span>
                    <span className="text-wrapper-13">gamecycle@gmail.com</span>
                  </p>
                  <img className="frame-12" src={imagenes.frame118} alt="frame-118" />
                </div>
                <div className="frame-13">
                  <div className="text-wrapper-14">Tendencias</div>
                  <div className="frame-14">
                    <div className="text-wrapper-15">PS4</div>
                    <div className="text-wrapper-16">PS3</div>
                    <div className="text-wrapper-16">XBOX ONE</div>
                    <div className="text-wrapper-16">XBOX 360</div>
                    <div className="text-wrapper-16">NINTENDO SWITCH</div>
                  </div>
                </div>
                <div className="frame-15">
                  <div className="text-wrapper-14">Información</div>
                  <div className="frame-14">
                    <div className="text-wrapper-15">Sobre nosotros</div>
                    <div className="text-wrapper-16">Contactenos</div>
                    <div className="text-wrapper-16">FAQs</div>
                    <div className="text-wrapper-16">Devoluciones</div>
                    <div className="text-wrapper-16">Políticas</div>
                    <div className="text-wrapper-16">Terminos y condiciones</div>
                  </div>
                </div>
                <div className="frame-16">
                  <div className="text-wrapper-14">Atención al cliente</div>
                  <div className="frame-14">
                    <div className="text-wrapper-15">Mi cuenta</div>
                    <div className="text-wrapper-16">Rastrear orden</div>
                    <div className="text-wrapper-16">Visto recientemente</div>
                    <div className="text-wrapper-16">Lista de deseos</div>
                    <div className="text-wrapper-16">Comparar</div>
                    <div className="text-wrapper-16">Ser un vendedor</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-17">
              <div class="img-wrapper"><img class="VISA" src={imagenes.visa} /></div>
              <div class="img-wrapper"><img class="MASTER" src={imagenes.master} /></div>
              <div class="img-wrapper"><img class="image-5" src={imagenes.image128} /></div>
              <div class="img-wrapper"><img class="INSLALLMENTS" src={imagenes.installments} /></div>
            </div>
          </div>
        </div>
        <div class="overlap-group-wrapper">
          <div class="overlap-group"><div class="element-e">© 2023 Game Cycle</div></div>
        </div>
        <div class="frame-18">
          <div class="group">
            <div class="text-wrapper-17">GAME CYCLE</div>
            <img class="vector" src={imagenes.vector} />
          </div>
          <div class="frame-19">
            <input class="buscar-producto" />
            <div class="overlap-group-2">
              <div class="text-wrapper-18">Todas las categorías</div>
              <img class="chevron-down" src={imagenes.chevronDown} />
            </div>
            <img class="line-4" src={imagenes.line7} />
            <img class="frame-20" src={imagenes.frame198} />
          </div>
          <div class="group-2">
            <div class="frame-21">
              <div class="frame-22">
                <div class="frame-23">
                  <img class="group-3" src={imagenes.group} />
                  <div class="frame-24"><div class="text-wrapper-19">Delivery</div></div>
                </div>
                <div class="frame-25">
                  <img class="group-4" src={imagenes.group95} />
                  <div class="frame-26"><div class="text-wrapper-20">Retornar</div></div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-27">
            <div class="ll-menos-wrapper"><div class="ll-menos">Llámenos</div></div>
            <div class="frame-28">
              <img class="headphones-svgrepo" src={imagenes.headphonesSvgrepoComL} />
              <div class="text-wrapper-21">+51 964542293</div>
            </div>
          </div>
          <div class="frame-29">
            <img class="user" src={imagenes.user} />
            <div class="frame-30">
              <div class="frame-31">
                <div class="group-wrapper">
                  <div class="group-5">
                    <div class="overlap-group-3">
                      <div class="text-wrapper-22">3</div>
                      <img class="shopping-cart" src={imagenes.shoppingCart} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img class="vector-2" src={imagenes.vector1} />
          </div>
        </div>
        <div class="frame-32">
          <div class="navbar">
            <div class="frame-33">
              <div class="group-6">
                <div class="rectangle"></div>
                <div class="rectangle-2"></div>
                <div class="rectangle-3"></div>
              </div>
              <div class="text-wrapper-23">Búsqueda por categoría</div>
            </div>
            <div class="text-wrapper-24">Inicio</div>
            <div class="text-wrapper-25">Nuevo</div>
            <div class="text-wrapper-26">Usado</div>
            <div class="text-wrapper-27">Vender</div>
          </div>
          <img class="frame-34" src={imagenes.frame1181} />
        </div>
      </div>
    </div>
  );
};

export default DetalleProductoUsado;

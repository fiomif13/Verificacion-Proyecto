// src/pages/IniciarSesion/IniciarSesion.js
import React from 'react';
import { Link } from 'react-router-dom';
import './globals.css';
import './style.css';

// Importa las imágenes desde imagenes.js
import imagenes from './imagenes';

const CarritoCompras = () => {
  return (
    <div className="carrito-de-compras">
      <div className="div">
        <img className="line" src={imagenes.line4} />
        <div className="text-wrapper">Tu carrito</div>
        <div className="frame">
          <div className="frame-2">
            <img className="rectangle" src={imagenes.rectangle424} />
            <div className="frame-3">
              <div className="frame-4">
                <div className="frame-5">
                  <div className="text-wrapper-2">Marvel Spiderman</div>
                  <div className="frame-6"><div className="text-wrapper-3">Estado: Nuevo</div></div>
                </div>
                <div className="text-wrapper-4">S/100</div>
              </div>
              <div className="frame-7">
                <img className="img" src={imagenes.frame3} />
                <div className="frame-8">
                  <img className="frame-9" src={imagenes.frame4} />
                  <div className="text-wrapper-5">1</div>
                  <img className="frame-9" src={imagenes.frame5} />
                </div>
              </div>
            </div>
          </div>
          <img className="line-2" src={imagenes.line5} />
          <div className="frame-2">
            <img className="rectangle" src={imagenes.rectangle4241} />
            <div className="frame-3">
              <div className="frame-6">
                <div className="frame-5">
                  <div className="text-wrapper-2">Assassins Creed Valhalla</div>
                  <div className="frame-6"><div className="text-wrapper-3">Estado: Usado</div></div>
                </div>
                <div className="text-wrapper-4">S/100</div>
              </div>
              <div className="frame-7">
                <img className="img" src={imagenes.frame3} />
                <div className="frame-8">
                  <img className="frame-9" src={imagenes.frame4} />
                  <div className="text-wrapper-5">1</div>
                  <img className="frame-9" src={imagenes.frame5} />
                </div>
              </div>
            </div>
          </div>
          <img className="line-2" src={imagenes.line6} />
          <div className="frame-2">
            <img className="rectangle" src={imagenes.rectangle4242} />
            <div className="frame-3">
              <div className="frame-4">
                <div className="frame-5">
                  <div className="text-wrapper-2">Rayman Legends</div>
                  <div className="frame-6"><div className="text-wrapper-3">Estado: Usado</div></div>
                </div>
                <div className="text-wrapper-4">S/30</div>
              </div>
              <div className="frame-7">
                <img className="img" src={imagenes.frame6} />
                <div className="frame-8">
                  <img className="frame-9" src={imagenes.frame7} />
                  <div className="text-wrapper-5">1</div>
                  <img className="frame-9" src={imagenes.frame8} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-10">
          <div className="text-wrapper-6">Resumen</div>
          <div className="frame-11">
            <div className="frame-12">
              <div className="text-wrapper-7">Subtotal</div>
              <div className="text-wrapper-8">S/ 230</div>
            </div>
            <div className="frame-12">
              <div className="text-wrapper-7">Descuento (-20%)</div>
              <div className="text-wrapper-9">-S/ 46</div>
            </div>
            <div className="frame-12">
              <div className="text-wrapper-7">Delivery</div>
              <div className="text-wrapper-8">S/ 20</div>
            </div>
            <img className="line-2" src={imagenes.line61} />
            <div className="frame-12">
              <div className="text-wrapper-10">Total</div>
              <div className="text-wrapper-11">S/ 204</div>
            </div>
          </div>
          <div className="frame-13">
            <div className="frame-14">
              <img className="img" src={imagenes.frame9} />
              <div className="text-wrapper-12">Código de promoción</div>
            </div>
            <div className="div-wrapper"><div className="text-wrapper-13">Aplicar</div></div>
          </div>
          <Link to="/pago-tarjetas">
          <div className="frame-15">
            <div className="text-wrapper-13">Pagar</div>
            <img className="img" src={imagenes.arrowDownBoldL} />
          </div>
          </Link>
        </div>
        <div className="frame-wrapper">
          <div className="frame-16">
            <div className="frame-17">
              <div className="frame-18">
                <div className="frame-19">
                  <p className="RESEARCH">
                    <span className="span">¿Alguna pregunta? Llámenos 24/7!</span>
                    <span className="text-wrapper-14">&nbsp;</span>
                  </p>
                  <p className="stratus-RESEARCH">967 673 169<br />963 542 293</p>
                  <p className="cont-ctenos">
                    <span className="span">Contáctenos<br /></span> <span className="text-wrapper-15">gamecycle@gmail.com</span>
                  </p>
                  <img className="frame-20" src={imagenes.frame118} />
                </div>
                <div className="frame-21">
                  <div className="text-wrapper-16">Tendencias</div>
                  <div className="frame-22">
                    <div className="text-wrapper-17">PS4</div>
                    <div className="text-wrapper-18">PS3</div>
                    <div className="text-wrapper-18">XBOX ONE</div>
                    <div className="text-wrapper-18">XBOX 360</div>
                    <div className="text-wrapper-18">NINTENDO SWITCH</div>
                  </div>
                </div>
                <div className="frame-23">
                  <div className="text-wrapper-16">Información</div>
                  <div className="frame-22">
                    <div className="text-wrapper-17">Sobre nosotros</div>
                    <div className="text-wrapper-18">Contactenos</div>
                    <div className="text-wrapper-18">FAQs</div>
                    <div className="text-wrapper-18">Devoluciones</div>
                    <div className="text-wrapper-18">Políticas</div>
                    <div className="text-wrapper-18">Terminos y condiciones</div>
                  </div>
                </div>
                <div className="frame-24">
                  <div className="text-wrapper-16">Atención al cliente</div>
                  <div className="frame-22">
                    <div className="text-wrapper-17">Mi cuenta</div>
                    <div className="text-wrapper-18">Rastrear orden</div>
                    <div className="text-wrapper-18">Visto recientemente</div>
                    <div className="text-wrapper-18">Lista de deseos</div>
                    <div className="text-wrapper-18">Comparar</div>
                    <div className="text-wrapper-18">Ser un vendedor</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-25">
              <div className="img-wrapper"><img className="VISA" src={imagenes.visa} /></div>
              <div className="img-wrapper"><img className="MASTER" src={imagenes.master} /></div>
              <div className="img-wrapper"><img className="image" src={imagenes.image128} /></div>
              <div className="img-wrapper"><img className="INSLALLMENTS" src={imagenes.inslallments} /></div>
            </div>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group"><div className="element-e">© 2023 Game Cycle</div></div>
        </div>
        <div className="frame-26">
          <div className="group">
            <div className="text-wrapper-19">GAME CYCLE</div>
            <img className="vector" src={imagenes.vector} />
          </div>
          <div className="frame-27">
            <input className="buscar-producto" />
            <div className="overlap-group-2">
              <div className="text-wrapper-20">Todas las categorías</div>
              <img className="chevron-down" src={imagenes.chevronDown} />
            </div>
            <img className="line-3" src={imagenes.line7} />
            <img className="frame-28" src={imagenes.frame198} />
          </div>
          <div className="group-2">
            <div className="frame-29">
              <div className="frame-30">
                <div className="frame-31">
                  <img className="group-3" src={imagenes.group} />
                  <div className="frame-32"><div className="text-wrapper-21">Delivery</div></div>
                </div>
                <div className="frame-33">
                  <img className="group-4" src={imagenes.group95} />
                  <div className="frame-34"><div className="text-wrapper-22">Retornar</div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-35">
            <div className="ll-menos-wrapper"><div className="ll-menos">Llámenos</div></div>
            <div className="frame-36">
              <img className="headphones-svgrepo" src={imagenes.headphonesSvgrepoCom1} />
              <div className="text-wrapper-23">+51 964542293</div>
            </div>
          </div>
          <div className="frame-37">
            <img className="user" src={imagenes.user} />
            <div className="frame-38">
              <div className="frame-39">
                <div className="group-wrapper">
                  <div className="group-5">
                    <div className="overlap-group-3">
                      <div className="text-wrapper-24">3</div>
                      <img className="shopping-cart" src={imagenes.shoppingCart} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="vector-2" src={imagenes.vector1} />
          </div>
        </div>
        <div className="frame-40">
          <div className="navbar">
            <div className="frame-41">
              <div className="group-6">
                <div className="rectangle-2"></div>
                <div className="rectangle-3"></div>
                <div className="rectangle-4"></div>
              </div>
              <div className="text-wrapper-25">Búsqueda por categoría</div>
            </div>
            <Link to="/inicio" class="text-wrapper-26">Inicio</Link>
            <Link to="/venta-nuevos" class="text-wrapper-27">Nuevo</Link>
            <Link to="/venta-usados" class="text-wrapper-28">Usado</Link>
            <Link to="/venta-codigo" class="text-wrapper-29">Vender</Link>
          </div>
          <img className="frame-42" src={imagenes.frame1181} />
        </div>
      </div>
    </div>
  );
};

export default CarritoCompras;

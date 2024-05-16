// src/pages/IniciarSesion/IniciarSesion.js
import React from 'react';
import { Link } from 'react-router-dom';
import imagenes from './imagenes';
import './globals.css';
import './style.css';

const PagoConTarjetas = () => {
  return (
    <div class="pago-con-tarjeta">
      <div class="div">
        <div class="overlap">
          <div class="overlap-group">
            <div class="order-summary">
              <div class="frame">
                <div class="frame-2">
                  <div class="text-wrapper">Resumen</div>
                  <img class="line" src={imagenes.line4} />
                </div>
                <div class="frame-3">
                  <img class="img" src={imagenes.line4} />
                  <div class="frame-4">
                    <input class="cdigo-de-promocin" />
                    <div class="div-wrapper"><div class="text-wrapper-2">Aplicar</div></div>
                  </div>
                </div>
                <div class="frame-5">
                  <img class="img" src={imagenes.line4} />
                  <div class="frame-6">
                    <div class="frame-7">
                      <div class="text-wrapper-3">Subtotal</div>
                      <div class="text-wrapper-4">S/ 230</div>
                    </div>
                    <div class="frame-7">
                      <div class="text-wrapper-5">Descuento</div>
                      <div class="text-wrapper-4">- S/ 46</div>
                    </div>
                    <div class="frame-7">
                      <div class="text-wrapper-5">Delivery</div>
                      <div class="text-wrapper-4">S/ 20</div>
                    </div>
                  </div>
                </div>
                <div class="frame-8"></div>
                <div class="frame-5">
                  <img class="img" src={imagenes.line4} />
                  <div class="frame-9">
                    <div class="frame-10">
                      <div class="text-wrapper-6">Total</div>
                      <div class="text-wrapper-7">Cantidad a pagar:</div>
                    </div>
                    <div class="text-wrapper-8">S/ 204</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-11">
              <div class="navbar">
                <div class="frame-12">
                  <div class="group">
                    <div class="rectangle"></div>
                    <div class="rectangle-2"></div>
                    <div class="rectangle-3"></div>
                  </div>
                  <div class="text-wrapper-9">Búsqueda por categoría</div>
                </div>
                <Link to="/inicio" class="text-wrapper-10">Inicio</Link>
            <Link to="/venta-nuevos" class="text-wrapper-11">Nuevo</Link>
            <Link to="/venta-usados" class="text-wrapper-12">Usado</Link>
            <Link to="/venta-codigo" class="text-wrapper-13">Vender</Link>
              </div>
              <img class="frame-13" src={imagenes.frame118} />
            </div>
          </div>
          <div class="frame-14">
            <div class="frame-2">
              <div class="text-wrapper-14">Pago</div>
              <img class="line" src={imagenes.line4} />
            </div>
            <div class="frame-6">
              <div class="text-wrapper-15">Pagar con:</div>
              <div class="card-wrapper">
                <div class="card">
                  <div class="overlap-group-wrapper">
                    <div class="overlap-group-2">
                      <div class="ellipse"></div>
                      <div class="ellipse-2"></div>
                    </div>
                  </div>
                  <div class="card-2">Tarjeta</div>
                </div>
              </div>
            </div>
            <div class="frame-6">
              <div class="frame-5">
                <div class="frame-6">
                  <div class="text-wrapper-16">Número de tarjeta</div>
                  <input class="element" />
                </div>
                <div class="frame-15">
                  <div class="frame-6">
                    <div class="text-wrapper-16">Fecha de caducidad</div>
                    <div class="frame-16"><div class="text-wrapper-17">MM/AA</div></div>
                  </div>
                  <div class="frame-6">
                    <div class="text-wrapper-16">CVV</div>
                    <input class="element-wrapper" />
                  </div>
                </div>
                <div class="save-card-details">
                  <div class="frame-17"></div>
                  <div class="save-card-details-2">Guardar datos</div>
                </div>
              </div>
            </div>
            <div class="frame-18">
              <Link to="/compra-exitosa" class="pay"><div class="pay-usd">Pagar S/ 230</div></Link>
              <img class="vector" src={imagenes.vector1} />
              <p class="p">
                Sus datos personales se utilizarán para procesar su pedido, respaldar su experiencia en este sitio web y
                para otros fines descritos en nuestra política de privacidad.
              </p>
            </div>
          </div>
        </div>
        <div class="frame-19">
          <div class="group-2">
            <div class="text-wrapper-18">GAME CYCLE</div>
            <img class="vector-2" src={imagenes.vector} />
          </div>
          <div class="frame-20">
            <input class="buscar-producto" />
            <div class="overlap-group-3">
              <div class="text-wrapper-19">Todas las categorías</div>
              <img class="chevron-down" src={imagenes.chevronDown} />
            </div>
            <img class="line-2" src={imagenes.line71} />
            <img class="frame-21" src={imagenes.frame198} />
          </div>
          <div class="frame-wrapper">
            <div class="frame-22">
              <div class="frame-23">
                <div class="frame-24">
                  <img class="group-3" src={imagenes.group} />
                  <div class="frame-25"><div class="text-wrapper-20">Delivery</div></div>
                </div>
                <div class="frame-26">
                  <img class="group-4" src={imagenes.group95} />
                  <div class="frame-27"><div class="text-wrapper-21">Retornar</div></div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-28">
            <div class="ll-menos-wrapper"><div class="ll-menos">Llámenos</div></div>
            <div class="frame-29">
              <img class="headphones-svgrepo" src={imagenes.headphonesSvgrepoComL} />
              <div class="text-wrapper-22">+51 964542293</div>
            </div>
          </div>
          <div class="frame-30">
            <img class="user" src={imagenes.user} />
            <div class="frame-31">
              <div class="frame-32">
                <div class="group-wrapper">
                  <div class="group-5">
                    <div class="overlap-group-4">
                      <div class="text-wrapper-23">3</div>
                      <img class="shopping-cart" src={imagenes.shoppingCart} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img class="vector-3" src={imagenes.vector2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagoConTarjetas;

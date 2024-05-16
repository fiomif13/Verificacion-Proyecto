// src/pages/IniciarSesion/IniciarSesion.js
import React from 'react';
import { Link } from 'react-router-dom';
import imagenes from './imagenes';
import './globals.css';
import './style.css';

const VentaFinal = () => {
  return (
    <div class="VENTA-FINAL">
      <div class="div">
        <div class="frame">
          <div class="div-wrapper"><p class="text-wrapper">¡TU VIDEOJUEGO SE HA PUESTO EN VENTA!</p></div>
          <div class="frame-2">
            <Link to="/inicio" class="frame-3"><div class="text-wrapper-2">Volver al incio</div></Link>
            <div class="frame-4"><div class="text-wrapper-2">Ver publicación</div></div>
          </div>
        </div>
        <div class="frame-5">
          <div class="group">
            <div class="text-wrapper-3">GAME CYCLE</div>
            <img class="vector" src={imagenes.vector} />
          </div>
          <div class="frame-6">
            <div class="text-wrapper-4">Buscar producto</div>
            <div class="overlap-group">
              <div class="text-wrapper-5">Todas las categorías</div>
              <img class="chevron-down" src={imagenes.chevronDown} />
            </div>
            <img class="line" src={imagenes.line7} />
            <img class="img" src={imagenes.frame198} />
          </div>
          <div class="frame-wrapper">
            <div class="frame-7">
              <div class="frame-8">
                <div class="frame-9">
                  <img class="group-2" src={imagenes.group} />
                  <div class="frame-10"><div class="text-wrapper-6">Delivery</div></div>
                </div>
                <div class="frame-11">
                  <img class="group-3" src={imagenes.group95} />
                  <div class="frame-12"><div class="text-wrapper-7">Retornar</div></div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-13">
            <div class="ll-menos-wrapper"><div class="ll-menos">Llámenos</div></div>
            <div class="frame-14">
              <img class="headphones-svgrepo" src={imagenes.headphonesSvgrepoComL} />
              <div class="text-wrapper-8">+51 964542293</div>
            </div>
          </div>
          <div class="frame-15">
            <img class="user" src={imagenes.user} />
            <div class="frame-16">
              <div class="frame-17">
                <div class="group-wrapper">
                  <div class="overlap-group-wrapper">
                    <div class="overlap-group-2">
                      <div class="text-wrapper-9">3</div>
                      <img class="shopping-cart" src={imagenes.shoppingCart} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img class="vector-2" src={imagenes.vector1} />
          </div>
        </div>
        <div class="frame-18">
          <div class="navbar">
            <div class="frame-19">
              <div class="group-4">
                <div class="rectangle"></div>
                <div class="rectangle-2"></div>
                <div class="rectangle-3"></div>
              </div>
              <div class="text-wrapper-10">Búsqueda por categoría</div>
            </div>
            <Link to="/inicio" class="text-wrapper-11">Inicio</Link>
            <Link to="/venta-nuevos" class="text-wrapper-12">Nuevo</Link>
            <Link to="/venta-usados" class="text-wrapper-13">Usado</Link>
            <Link to="/venta-codigo" class="text-wrapper-14">Vender</Link>
          </div>
          <img class="frame-20" src={imagenes.frame118} />
        </div>
      </div>
    </div>
  );
};

export default VentaFinal;


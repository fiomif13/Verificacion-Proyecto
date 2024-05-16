// src/pages/IniciarSesion/IniciarSesion.js
import React from 'react';
import { Link } from 'react-router-dom';
import './globals.css';
import './style.css';
import imagenes from './imagenes';

const VentaDatos = () => {
  return (
    <div class="VENTA-datos">
    <div class="div">
      <div class="main">
        <div class="text-wrapper">DATOS DEL VIDEOJUEGO</div>
        <div class="TITULO">
          <div class="label"><div class="label-2">Título</div></div>
          <input class="container" />
        </div>
        <div class="div-wrapper">
          <div class="overlap-group">
            <div class="CONSOLA">
              <div class="label"><div class="label-2">Género</div></div>
              <div class="container-2"><div class="text">Selecciona un género</div></div>
            </div>
            <img class="ep-arrow-up-bold" src={imagenes.epArrowUpBold} />
          </div>
        </div>
        <div class="div-wrapper">
          <div class="overlap-group">
            <div class="CONSOLA">
              <div class="label"><div class="label-2">Consola</div></div>
              <div class="container-2"><div class="text">Selecciona una consola</div></div>
            </div>
            <img class="ep-arrow-up-bold" src={imagenes.epArrowUpBold} />
          </div>
        </div>
        <div class="div-wrapper">
          <div class="CONSOLA-2">
            <div class="label"><div class="label-2">PRECIO</div></div>
            <input class="input" />
          </div>
        </div>
        <div class="div-wrapper">
          <div class="CONSOLA-2">
            <div class="label"><div class="label-2">DESCRIPCIÓN (OPCIONAL)</div></div>
            <input class="input" />
          </div>
        </div>
        <div class="imagen">
          <div class="overlap">
            <div class="CONSOLA-3">
              <div class="label"><div class="label-2">Agregar imagenes</div></div>
            </div>
            <img class="vector" src={imagenes.vector} />
          </div>
          <div class="frame"><div class="text-wrapper-2">Seleccionar archivo</div></div>
          <div class="text-wrapper-3">Ningún archivo seleccionado</div>
        </div>
        <Link to="/venta-final" class="frame-2"><div class="text-wrapper-4">VENDER</div></Link>
      </div>
      <div class="frame-3">
        <div class="group">
          <div class="text-wrapper-5">GAME CYCLE</div>
          <img class="img" src={imagenes.vector1} />
        </div>
        <div class="frame-4">
          <input class="buscar-producto" />
          <div class="overlap-group-2">
            <div class="text-wrapper-6">Todas las categorías</div>
            <img class="chevron-down" src={imagenes.chevronDown} />
          </div>
          <img class="line" src={imagenes.line7} />
          <img class="frame-5" src={imagenes.frame198} />
        </div>
        <div class="frame-wrapper">
          <div class="frame-6">
            <div class="frame-7">
              <div class="frame-8">
                <img class="group-2" src={imagenes.group} />
                <div class="frame-9"><div class="text-wrapper-7">Delivery</div></div>
              </div>
              <div class="frame-10">
                <img class="group-3" src={imagenes.group95} />
                <div class="frame-11"><div class="text-wrapper-8">Retornar</div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-12">
          <div class="ll-menos-wrapper"><div class="ll-menos">Llámenos</div></div>
          <div class="frame-13">
            <img class="headphones-svgrepo" src={imagenes.headphonesSvgrepoComL} />
            <div class="text-wrapper-9">+51 964542293</div>
          </div>
        </div>
        <div class="frame-14">
          <img class="user" src={imagenes.user} />
          <div class="frame-15">
            <div class="frame-16">
              <div class="group-wrapper">
                <div class="overlap-group-wrapper">
                  <div class="overlap-group-3">
                    <div class="text-wrapper-10">3</div>
                    <img class="shopping-cart" src={imagenes.shoppingCart} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img class="vector-2" src={imagenes.vector2} />
        </div>
      </div>
      <div class="frame-17">
        <div class="navbar">
          <div class="frame-18">
            <div class="group-4">
              <div class="rectangle"></div>
              <div class="rectangle-2"></div>
              <div class="rectangle-3"></div>
            </div>
            <div class="text-wrapper-11">Búsqueda por categoría</div>
          </div>
          <Link to="/inicio" class="text-wrapper-12">Inicio</Link>
            <Link to="/venta-nuevos" class="text-wrapper-13">Nuevo</Link>
            <Link to="/venta-usados" class="text-wrapper-14">Usado</Link>
            <Link to="/venta-codigo" class="text-wrapper-15">Vender</Link>
        </div>
        <img class="frame-19" src={imagenes.frame118} />
      </div>
    </div>
  </div>
  );
};

export default VentaDatos;

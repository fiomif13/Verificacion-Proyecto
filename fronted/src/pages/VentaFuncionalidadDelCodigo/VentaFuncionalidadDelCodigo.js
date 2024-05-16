// src/pages/IniciarSesion/IniciarSesion.js
import React from 'react';
import { Link } from 'react-router-dom';
import './globals.css';
import './style.css';
import imagenes from './imagenes'; // Importa el archivo imagenes.js

const VentaFuncionalidadDelCodigo = () => {
  return (
    <div class="venta-funcionalidad">
      <div class="div">
        <div class="main">
          <p class="text-wrapper">¿Para que sirve el código?</p>
          <div class="TITULO">
            <div class="label">
              <p class="p">
                El código se entrega a las personas que tienen un videojuego en buenas condiciones, y así generar
                confianza y seguridad a sus futuros compradores. Para obtenerlo se debe acercar a nuestras tiendas
                físicas más cercanas. Donde evaluaremos el detalle de su producto.
              </p>
            </div>
          </div>
          <img class="frame" src={imagenes.frame} alt="Frame" />
          <Link to="/venta-codigo" class="div-wrapper"><div class="text-wrapper-2">Volver</div></Link>
        </div>
        <div class="frame-2">
          <div class="group">
            <div class="text-wrapper-3">GAME CYCLE</div>
            <img class="vector" src={imagenes.vector} alt="Vector" />
          </div>
          <div class="frame-3">
            <div class="text-wrapper-4">Buscar producto</div>
            <div class="overlap-group">
              <div class="text-wrapper-5">Todas las categorías</div>
              <img class="chevron-down" src={imagenes.chevronDown} alt="Chevron Down" />
            </div>
            <img class="line" src={imagenes.line7} alt="Line" />
            <img class="img" src={imagenes.frame198} alt="Frame 198" />
          </div>
          <div class="frame-wrapper">
            <div class="frame-4">
              <div class="frame-5">
                <div class="frame-6">
                  <img class="group-2" src={imagenes.group} alt="Group" />
                  <div class="frame-7"><div class="text-wrapper-6">Delivery</div></div>
                </div>
                <div class="frame-8">
                  <img class="group-3" src={imagenes.group95} alt="Group 95" />
                  <div class="frame-9"><div class="text-wrapper-7">Retornar</div></div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-10">
            <div class="ll-menos-wrapper"><div class="ll-menos">Llámenos</div></div>
            <div class="frame-11">
              <img class="headphones-svgrepo" src={imagenes.headphonesSvgrepoComL} alt="Headphones SVG" />
              <div class="text-wrapper-8">+51 964542293</div>
            </div>
          </div>
          <div class="frame-12">
            <img class="user" src={imagenes.user} alt="User" />
            <div class="frame-13">
              <div class="frame-14">
                <div class="group-wrapper">
                  <div class="overlap-group-wrapper">
                    <div class="overlap-group-2">
                      <div class="text-wrapper-9">3</div>
                      <img class="shopping-cart" src={imagenes.shoppingCart} alt="Shopping Cart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img class="vector-2" src={imagenes.vector1} alt="Vector 1" />
          </div>
        </div>
        <div class="frame-15">
          <div class="navbar">
            <div class="frame-16">
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
          <img class="frame-17" src={imagenes.frame118} alt="Frame 118" />
        </div>
      </div>
    </div>
  );
};

export default VentaFuncionalidadDelCodigo;


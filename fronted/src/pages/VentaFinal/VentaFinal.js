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
            <Link to="/inicio" class="frame-3"><button class="text-wrapper-2">Volver al incio</button></Link>
            <Link to="/detalle-producto-usado" class="frame-4"><button class="text-wrapper-2">Ver publicación</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentaFinal;


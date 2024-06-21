// src/pages/IniciarSesion/IniciarSesion.js
import React from 'react';
import { Link } from 'react-router-dom';
import imagenes from './imagenes'; // Importar el archivo imagenes.js
import './globals.css';
import './style.css';

const PantallaDesplegableVentas = () => {
  return (
    <div class="pantalla-despegable">
      <div class="div3">
        <div class="overlap-group3">
          <div class="text-wrapper3">Ventas</div>
          <div class="overlap3">
            <div class="text-wrapper-2-3">Estas vendiendo 2 juegos</div>
            <img class="x-square3" src={imagenes.xSquare2} /> {/* Reemplazar la imagen */}
          </div>
          <img class="vector3" src={imagenes.vector2} /> {/* Reemplazar la imagen */}
        </div>
        <img class="line3" src={imagenes.line132} /> {/* Reemplazar la imagen */}
        <div class="text-wrapper-3-3">Posible ingreso</div>
        <div class="text-wrapper-4-3">S/ 200</div>
        <div class="frame3"><div class="text-wrapper-5-3">Vender más</div></div>
        <div class="frame-2-3">
          <div class="frame-3-3">
            <img class="ljcxangrw-x3" src={imagenes.Ijc5xangrw540x12} /> {/* Reemplazar la imagen */}
            <p class="p3">
              <span class="span3">Sackboy: Una gran aventura<br /></span>
              <span class="text-wrapper-6-3">Unid: 1<br />S/ 100</span>
            </p>
            <img class="trash3" src={imagenes.trash212} /> {/* Reemplazar la imagen */}
          </div>
          <img class="img3" src={imagenes.line172} /> {/* Reemplazar la imagen */}
          <div class="frame-3-3">
            <img class="ljcxangrw-x3" src={imagenes.Ijc5xangrw540x112} /> {/* Reemplazar la imagen */}
            <p class="p3">
              <span class="span3">The Last of Us 2<br /></span> <span class="text-wrapper-6-3">Unid: 1<br />S/ 100</span>
            </p>
            <img class="trash3" src={imagenes.trash212} /> {/* Reemplazar la imagen */}
          </div>
          <img class="img3" src={imagenes.line172} /> {/* Reemplazar la imagen */}
        </div>
      </div>
    </div>
  );
};

export default PantallaDesplegableVentas;

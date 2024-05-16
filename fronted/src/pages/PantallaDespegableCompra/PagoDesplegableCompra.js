// src/pages/IniciarSesion/IniciarSesion.js
import React from 'react';
import { Link } from 'react-router-dom';
import './globals.css';
import './style.css';

const PagoDesplegableCompra = () => {
  return (
    <div class="pantalla-despegable">
      <div class="div">
        <div class="overlap">
          <div class="overlap-group">
            <div class="text-wrapper">Carrito de compras</div>
            <div class="frame">
              <div class="group-wrapper">
                <div class="group">
                  <div class="overlap-group-2">
                    <img class="shopping-cart" src="img/shopping-cart.svg" />
                    <div class="text-wrapper-2">3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="overlap-2">
            <p class="p">Tienes 3 juegos en la lista</p>
            <img class="x-square" src="img/x-square.svg" />
          </div>
        </div>
        <img class="line" src="img/line-13.svg" />
        <div class="text-wrapper-3">Cosoto Total</div>
        <div class="text-wrapper-4">S/ 230</div>
        <div class="div-wrapper"><div class="text-wrapper-5">Más detalle</div></div>
        <div class="frame-2"><div class="text-wrapper-5">Pagar</div></div>
        <div class="frame-3">
          <div class="frame-4">
            <img class="ljcxangrw-x" src="img/ljc1xangrw-540x-1.png" />
            <p class="div-2">
              <span class="span">Marvel Spiderman<br /></span> <span class="text-wrapper-6">Unid: 1<br />S/ 100</span>
            </p>
            <img class="trash" src="img/trash-2-2.svg" />
          </div>
          <img class="img" src="img/line-18.svg" />
          <div class="frame-4">
            <img class="ljcxangrw-x-2" src="img/ljc1xangrw-540x-1-1.png" />
            <p class="div-2">
              <span class="span">Assassins Creed Valhalla<br /></span>
              <span class="text-wrapper-6">Unid: 1<br />S/ 100</span>
            </p>
            <img class="trash" src="img/trash-2-2.svg" />
          </div>
          <img class="img" src="img/line-18.svg" />
          <div class="frame-4">
            <img class="ljcxangrw-x-2" src="img/ljc1xangrw-540x-1-2.png" />
            <p class="div-2">
              <span class="span">Rayman Leyends<br /></span> <span class="text-wrapper-6">Unid: 1<br />S/ 30</span>
            </p>
            <img class="trash" src="img/trash-2-2.svg" />
          </div>
          <img class="img" src="img/line-18.svg" />
        </div>
      </div>
    </div>
  );
};

export default PagoDesplegableCompra;

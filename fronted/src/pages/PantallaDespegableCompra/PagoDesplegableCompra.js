// src/pages/PantallaDespegableCompra/PagoDesplegableCompra.js
import React from 'react';
import { Link } from 'react-router-dom';
import './globals.css';
import './style.css';
import imagenes from './imagenes';

const PagoDesplegableCompra = () => {
  return (
    <div className="pantalla-despegable">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <div className="text-wrapper">Carrito de compras</div>
            <div className="frame">
              <div className="group-wrapper">
                <div className="group">
                  <div className="overlap-group-2">
                    <img className="shopping-cart" src={imagenes.shoppingCart} />
                    <div className="text-wrapper-2">3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-2">
            <p className="p">Tienes 3 juegos en la lista</p>
            <img className="x-square" src={imagenes.xSquare} />
          </div>
        </div>
        <img className="line" src={imagenes.line13} />
        <div className="text-wrapper-3">Costo Total</div>
        <div className="text-wrapper-4">S/ 230</div>
        <Link to="/carrito-compras" className="div-wrapper"><div className="text-wrapper-5">Más detalle</div></Link>
        <Link to="/pago-tarjetas" className="frame-2"><div className="text-wrapper-5">Pagar</div></Link>
        <div className="frame-3">
          <div className="frame-4">
            <img className="ljcxangrw-x" src={imagenes.Ijc1xangrw540x1} />
            <p className="div-2">
              <span className="span">Marvel Spiderman<br /></span> <span className="text-wrapper-6">Unid: 1<br />S/ 100</span>
            </p>
            <img className="trash" src={imagenes.trash22} />
          </div>
          <img className="img" src={imagenes.line18} />
          <div className="frame-4">
            <img className="ljcxangrw-x-2" src={imagenes.Ijc1xangrw540x11} />
            <p className="div-2">
              <span className="span">Assassins Creed Valhalla<br /></span>
              <span className="text-wrapper-6">Unid: 1<br />S/ 100</span>
            </p>
            <img className="trash" src={imagenes.trash22} />
          </div>
          <img className="img" src={imagenes.line18} />
          <div className="frame-4">
            <img className="ljcxangrw-x-2" src={imagenes.Ijc1xangrw540x12} />
            <p className="div-2">
              <span className="span">Rayman Legends<br /></span> <span className="text-wrapper-6">Unid: 1<br />S/ 30</span>
            </p>
            <img className="trash" src={imagenes.trash22} />
          </div>
          <img className="img" src={imagenes.line18} />
        </div>
      </div>
    </div>
  );
};

export default PagoDesplegableCompra;

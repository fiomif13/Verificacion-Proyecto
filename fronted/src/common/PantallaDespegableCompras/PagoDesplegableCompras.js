// src/pages/PantallaDespegableCompra/PagoDesplegableCompra.js
import React from 'react';
import { Link } from 'react-router-dom';
import './globals.css';
import './style.css';
import imagenes from './imagenes';

const PagoDesplegableCompras = () => {
  return (
    <div className="pantalla-despegable">
      <div className="div2">
        <div className="overlap2">
          <div className="overlap-group2">
            <div className="text-wrapper2">Carrito de compras</div>
            <div className="frame2">
              <div className="group-wrapper2">
                <div className="group2">
                  <div className="overlap-group-2-2">
                    <img className="shopping-cart2" src={imagenes.shoppingCart} />
                    <div className="text-wrapper-2-2">3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-2-2">
            <p className="p2">Tienes 3 juegos en la lista</p>
            <img className="x-square2" src={imagenes.xSquare} />
          </div>
        </div>
        
        <div className="text-wrapper-3-2">Costo Total</div>
        <div className="text-wrapper-4-2">S/ 230</div>
        <Link to="/carrito-compras" className="div-wrapper-2"><div className="text-wrapper-5-2">Más detalle</div></Link>
        <Link to="/pago-tarjetas" className="frame-2-2"><div className="text-wrapper-5-2">Pagar</div></Link>
        <div className="frame-3-2">
          <div className="frame-4-2">
            <img className="ljcxangrw-x2" src={imagenes.Ijc1xangrw540x1} />
            <p className="div-2-2">
              <span className="span2">Marvel Spiderman<br /></span> <span className="text-wrapper-6-2">Unid: 1<br />S/ 100</span>
            </p>
            <img className="trash2" src={imagenes.trash22} />
          </div>
          <img className="img2" src={imagenes.line18} />
          <div className="frame-4-2">
            <img className="ljcxangrw-x-2-2" src={imagenes.Ijc1xangrw540x11} />
            <p className="div-2-2">
              <span className="span2">Assassins Creed Valhalla<br /></span>
              <span className="text-wrapper-6-2">Unid: 1<br />S/ 100</span>
            </p>
            <img className="trash2" src={imagenes.trash22} />
          </div>
          <img className="img2" src={imagenes.line18} />
          <div className="frame-4-2">
            <img className="ljcxangrw-x-2-2" src={imagenes.Ijc1xangrw540x12} />
            <p className="div-2-2">
              <span className="span2">Rayman Legends<br /></span> <span className="text-wrapper-6">Unid: 1<br />S/ 30</span>
            </p>
            <img className="trash2" src={imagenes.trash22} />
          </div>
          <img className="img2" src={imagenes.line18} />
        </div>
      </div>
    </div>
  );
};

export default PagoDesplegableCompras;

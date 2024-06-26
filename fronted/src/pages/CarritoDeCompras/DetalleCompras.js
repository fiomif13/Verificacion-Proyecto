// src/pages/IniciarSesion/IniciarSesion.js
import React from 'react';
import { Link } from 'react-router-dom';
import './globals.css';
import './style.css';
import Header from '../../common/header/header.js';
import useCarrito from '../auxiliar.js';
import CarritoCompras from '../CarritoCompras.js';


// Importa las imágenes desde imagenes.js
import imagenes from './imagenes.js';

const DetalleCompras = () => {

  const {
    juegosSeleccionados,
    isDropdownVisible,
    setIsDropdownVisible,
    handleRemoverJuego,
    mostrarCarrito,
    carritoKey
  } = useCarrito();

  return (
    <div>
      <Header 
        juegosSeleccionados={juegosSeleccionados}
        onRemoverJuego={handleRemoverJuego}
        isComprasDropdownVisible={isDropdownVisible}
        setIsComprasDropdownVisible={setIsDropdownVisible}
      />
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
              <input className="text-wrapper-12" placeholder="Codigo de promocion"  ></input>
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
        
      </div>
    </div>
    {mostrarCarrito && (
          <CarritoCompras
            key={carritoKey}
            juegosSeleccionados={juegosSeleccionados}
            handleRemoverJuego={handleRemoverJuego}
            isDropdownVisible={isDropdownVisible}
            setIsComprasDropdownVisible={setIsDropdownVisible}
          />
        )}
    </div>

  );
};

export default DetalleCompras;

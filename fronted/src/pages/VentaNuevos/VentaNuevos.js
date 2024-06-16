
// src/pages/VentaNuevos/VentaNuevos.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imagenes from './imagenes'; // Importación del archivo de imágenes
import PagoDesplegableCompra from '../PantallaDespegableCompra/PagoDesplegableCompra.js'; // Importar el componente desplegable
import './globals.css';
import './style.css';

const VentaNuevos = () => {
 

  return (
    <div className="venta-nuevos">
      <div className="div">
      
        <div className="videojuego">
          <div className="frame">
            <div className="text-wrapper">Gears 5 Xbox One</div>
            <img className="rectangle" src={imagenes.rectangle424} />
            <div className="div-wrapper"><div className="text-wrapper-2">S/ 80</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div className="videojuego-2">
          <div className="frame-3">
            <div className="text-wrapper-4">Detroit Become Human PS4</div>
            <img className="rectangle-para" src={imagenes.rectangleParaVideojuego} />
            <div className="div-wrapper"><div className="text-wrapper-2">S/ 60</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div className="videojuego-3">
          <div className="frame-4">
            <p className="p">Assasins Creed III Remastered Xbox One</p>
            <img className="img" src={imagenes.image51} />
            <div className="div-wrapper"><div className="text-wrapper-2">S/ 75</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div className="videojuego-4">
          <div className="frame-5">
            <p className="text-wrapper-4">The Las of Us Remastered PS4</p>
            <img className="image" src={imagenes.image511} />
            <div className="div-wrapper"><div className="text-wrapper-2">S/ 70</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div className="videojuego-5">
          <div className="frame-3">
            <div className="text-wrapper-4">Rachet and Clank PS4</div>
            <img className="captura-de-pantalla" src={imagenes.capturaDePantalla202311080901351} />
            <div className="div-wrapper"><div className="text-wrapper-2">S/ 70</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div className="videojuego-6">
          <div className="frame-3">
            <p className="text-wrapper-4">Red Dead Redemption II PS4</p>
            <img className="captura-de-pantalla-2" src={imagenes.capturaDePantalla202311080903521} />
            <div className="div-wrapper"><div className="text-wrapper-2">S/ 60</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div className="videojuego-7">
          <div className="frame-6">
            <div className="text-wrapper-4">Battlefield 1 Xbox One</div>
            <img className="rectangle-para-2" src={imagenes.rectangleParaVideojuego1} />
            <div className="div-wrapper"><div className="text-wrapper-2">S/ 70</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div className="videojuego-8">
          <div className="frame-3">
            <p className="text-wrapper-4">Just Cause 4 Xbox One</p>
            <img className="rectangle-para-3" src={imagenes.rectangleParaVideojuego2} />
            <div className="div-wrapper"><div className="text-wrapper-2">S/ 70</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div className="videojuego-9">
          <div className="frame-3">
            <div className="text-wrapper-4">Halo Infinite Xbox One</div>
            <img className="img" src={imagenes.rectangleParaVideojuego3} />
            <div className="div-wrapper"><div className="text-wrapper-2">S/ 70</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div className="videojuego-10">
          <div className="frame-6">
            <div className="text-wrapper-5">Mario Kart 8 Deluxe</div>
            <img className="rectangle-2" src={imagenes.rectangle4241} />
            <div className="div-wrapper"><div className="text-wrapper-2">S/ 80</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div className="videojuego-11">
          <div className="frame-4">
            <p className="text-wrapper-4">Kirby and the Forgotten Land</p>
            <img className="image-2" src={imagenes.image512} />
            <div className="div-wrapper"><div className="text-wrapper-2">S/ 75</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div className="videojuego-12">
          <div className="frame">
            <div className="text-wrapper-4">Mario Party Superstars</div>
            <img className="rectangle-3" src={imagenes.rectangle4242} />
            <div className="div-wrapper"><div className="text-wrapper-2">S/ 75</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div className="videojuego-13">
          <div className="frame-4">
            <div className="text-wrapper-4">Zelda: Links Awakening</div>
            <img className="image-3" src={imagenes.image513} />
            <div className="div-wrapper"><div className="text-wrapper-2">S/ 70</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div className="videojuego-14">
          <div className="frame-4">
            <div className="text-wrapper-4">Super Mario Maker 2</div>
            <img className="image-4" src={imagenes.image514} />
            <div className="div-wrapper"><div className="text-wrapper-2">S/ 70</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div className="videojuego-15">
          <Link to='/detalle-producto'>
          <div className="frame-24">
            <p className="text-wrapper-4">Marvel Spiderman: Edición juego del año</p>
            <img className="rectangle-para-4" src={imagenes.rectangleParaVideojuego4} />
            <div className="div-wrapper"><div className="text-wrapper-2">S/ 100</div></div>
          </div>
          </Link> 
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <img className="frame-25" src={imagenes.frame49} />
        
      </div>
    </div>
  );
};

export default VentaNuevos;

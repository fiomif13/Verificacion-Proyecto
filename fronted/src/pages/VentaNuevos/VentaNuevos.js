// src/pages/IniciarSesion/IniciarSesion.js
import React from 'react';
import { Link } from 'react-router-dom';
import imagenes from './imagenes.js'; // Importación del archivo de imágenes
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
        <div className="frame-7">
          <div className="group">
            <div className="text-wrapper-6">GAME CYCLE</div>
            <img className="vector" src={imagenes.vector} />
          </div>
          <div className="frame-8">
            <input className="buscar-producto" />
            <div className="overlap-group">
              <div className="text-wrapper-7">Todas las categorías</div>
              <img className="chevron-down" src={imagenes.chevronDown} />
            </div>
            <img className="line" src={imagenes.line7} />
            <img className="frame-9" src={imagenes.frame198} />
          </div>
          <div className="frame-wrapper">
            <div className="frame-10">
              <div className="frame-11">
                <div className="frame-12">
                  <img className="group-2" src={imagenes.group} />
                  <div className="frame-13"><div className="text-wrapper-8">Delivery</div></div>
                </div>
                <div className="frame-14">
                  <img className="group-3" src={imagenes.group95} />
                  <div className="frame-15"><div className="text-wrapper-9">Retornar</div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-16">
            <div className="ll-menos-wrapper"><div className="ll-menos">Llámenos</div></div>
            <div className="frame-17">
              <img className="headphones-svgrepo" src={imagenes.headphonesSvg} />
              <div className="text-wrapper-10">+51 964542293</div>
            </div>
          </div>
          <div className="frame-18">
            <img className="user" src={imagenes.user} />
            <div className="frame-19">
              <div className="frame-20">
                <div className="group-wrapper">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <div className="text-wrapper-11">3</div>
                      <img className="shopping-cart" src={imagenes.shoppingCart} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="vector-2" src={imagenes.vector1} />
          </div>
        </div>
        <div className="frame-21">
          <div className="navbar">
            <div className="frame-22">
              <div className="group-4">
                <div className="rectangle-4"></div>
                <div className="rectangle-5"></div>
                <div className="rectangle-6"></div>
              </div>
              <div className="text-wrapper-12">Búsqueda por categoría</div>
            </div>
            <Link to="/inicio" class="text-wrapper-13">Inicio</Link>
            <Link to="/venta-nuevos" class="text-wrapper-14">Nuevo</Link>
            <Link to="/venta-usados" class="text-wrapper-15">Usado</Link>
            <Link to="/venta-codigo" class="text-wrapper-16">Vender</Link>
          </div>
          <img className="frame-23" src={imagenes.frame118} />
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

// src/pages/IniciarSesion/IniciarSesion.js
import React from 'react';
import { Link } from 'react-router-dom';
import './globals.css';
import './style.css';
import imagenes from './imagenes'; 

const VentaUsados = () => {
  return (
    <div class="venta-usados">
      <div class="div">
        <div class="videojuego">
          <div class="frame">
            <div class="text-wrapper">Marvel Spiderman: Miles Morales</div>
            <img class="image" src={imagenes.image50} />
            <div class="div-wrapper"><div class="text-wrapper-2">S/ 40</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div class="videojuego-2">
          <div class="frame-3">
            <p class="text-wrapper">Zelda: Breath of the Wild</p>
            <img class="rectangle-para" src={imagenes.rectangleParaVideojuego} />
            <div class="div-wrapper"><div class="text-wrapper-2">S/ 30</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div class="videojuego-3">
          <div class="frame-4">
            <div class="text-wrapper">Injustice 2 Legendary Edition</div>
            <img class="img" src={imagenes.rectangle424} />
            <div class="div-wrapper"><div class="text-wrapper-2">S/ 30</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div class="videojuego-4">
          <div class="frame-4">
            <div class="text-wrapper-4">Rayman Legends</div>
            <img class="img" src={imagenes.rectangle4241} />
            <div class="div-wrapper"><div class="text-wrapper-2">S/ 30</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div class="videojuego-5">
          <div class="frame-3">
            <div class="text-wrapper">Mario Golf Super Rush</div>
            <img class="rectangle-para-2" src={imagenes.rectangleParaVideojuego1} />
            <div class="div-wrapper"><div class="text-wrapper-2">S/ 40</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div class="videojuego-6">
          <div class="frame-5">
            <p class="text-wrapper-5">Titanfall 2 Ultimate Edition Xbox One</p>
            <img class="img" src={imagenes.rectangleParaVideojuego2} />
            <div class="div-wrapper"><div class="text-wrapper-2">S/ 40</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div class="videojuego-7">
          <div class="frame-3">
            <div class="text-wrapper">Super Smash Bros Ultimate</div>
            <img class="rectangle-para-3" src={imagenes.rectangleParaVideojuego3} />
            <div class="div-wrapper"><div class="text-wrapper-2">S/ 40</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div class="videojuego-8">
          <div class="frame-6">
            <div class="text-wrapper">Lego Marvel Super Heroes</div>
            <img class="captura-de-pantalla" src={imagenes.capturaDePantalla202311080906271} />
            <div class="div-wrapper"><div class="text-wrapper-2">S/ 40</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div class="videojuego-9">
          <div class="frame-5">
            <p class="text-wrapper">The Surge 2 Xbox One</p>
            <img class="rectangle-para-4" src={imagenes.rectangleParaVideojuego4} />
            <div class="div-wrapper"><div class="text-wrapper-2">S/ 40</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div class="videojuego-10">
          <div class="frame-5">
            <div class="text-wrapper-5">Uncharted 4 PS4</div>
            <img class="rectangle-para-5" src={imagenes.rectangleParaVideojuego5} />
            <div class="div-wrapper"><div class="text-wrapper-2">S/ 40</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div class="videojuego-11">
          <div class="frame-5">
            <p class="text-wrapper">Shadow of the Tomb Raider PS4</p>
            <img class="rectangle-para-4" src={imagenes.rectangleParaVideojuego6} />
            <div class="div-wrapper"><div class="text-wrapper-2">S/ 40</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div class="videojuego-12">
          <div class="frame-3">
            <div class="text-wrapper">Zelda Tears of Kingdom</div>
            <img class="rectangle-para-6" src={imagenes.rectangleParaVideojuego7} />
            <div class="div-wrapper"><div class="text-wrapper-2">S/ 50</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div class="videojuego-13">
          <div class="frame-7">
            <div class="text-wrapper">Assasins Creed Valhalla</div>
            <img class="rectangle" src={imagenes.rectangle4242} />
            <div class="div-wrapper"><div class="text-wrapper-2">S/ 100</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div class="videojuego-14">
          <div class="frame-6">
            <p class="text-wrapper">Halo 5 Guardians Xbox One</p>
            <img class="rectangle-para-4" src={imagenes.rectangleParaVideojuego8} />
            <div class="div-wrapper"><div class="text-wrapper-2">S/ 40</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div class="videojuego-15">
          <div class="frame-6">
            <div class="text-wrapper">Doom Slayers Collection PS4</div>
            <img class="rectangle-para-4" src={imagenes.rectangleParaVideojuego9} />
            <div class="div-wrapper"><div class="text-wrapper-2">S/ 50</div></div>
          </div>
          <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-3">Comprar</div></Link>
        </div>
        <div class="frame-8">
          <div class="group">
            <div class="text-wrapper-6">GAME CYCLE</div>
            <img class="vector" src={imagenes.vector} />
          </div>
          <div class="frame-9">
            <input class="buscar-producto" />
            <div class="overlap-group">
              <div class="text-wrapper-7">Todas las categorías</div>
              <img class="chevron-down" src={imagenes.chevronDown} />
            </div>
            <img class="line" src={imagenes.line7} />
            <img class="frame-10" src={imagenes.frame198} />
          </div>
          <div class="frame-wrapper">
            <div class="frame-11">
              <div class="frame-12">
                <div class="frame-13">
                  <img class="group-2" src={imagenes.group} />
                  <div class="frame-14"><div class="text-wrapper-8">Delivery</div></div>
                </div>
                <div class="frame-15">
                  <img class="group-3" src={imagenes.group95} />
                  <div class="frame-16"><div class="text-wrapper-9">Retornar</div></div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-17">
            <div class="ll-menos-wrapper"><div class="ll-menos">Llámenos</div></div>
            <div class="frame-18">
              <img class="headphones-svgrepo" src={imagenes.headphonesSvgrepoComL} />
              <div class="text-wrapper-10">+51 964542293</div>
            </div>
          </div>
          <div class="frame-19">
            <img class="user" src={imagenes.user} />
            <div class="frame-20">
              <div class="frame-21">
                <div class="group-wrapper">
                  <div class="overlap-group-wrapper">
                    <div class="overlap-group-2">
                      <div class="text-wrapper-11">3</div>
                      <Link to="/pago-desplegable">
                      <img  className="shopping-cart" src={imagenes.shoppingCart} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/iniciar-sesion">
            <img className="vector-2" src={imagenes.vector1} alt="" />
            </Link>
          </div>
        </div>
        <div class="frame-22">
          <div class="navbar">
            <div class="frame-23">
              <div class="group-4">
                <div class="rectangle-2"></div>
                <div class="rectangle-3"></div>
                <div class="rectangle-4"></div>
              </div>
              <div class="text-wrapper-12">Búsqueda por categoría</div>
            </div>
            <Link to="/inicio" class="text-wrapper-13">Inicio</Link>
            <Link to="/venta-nuevos" class="text-wrapper-14">Nuevo</Link>
            <Link to="/venta-usados" class="text-wrapper-15">Usado</Link>
            <Link to="/venta-codigo" class="text-wrapper-16">Vender</Link>
          </div>
          <img class="frame-24" src={imagenes.frame118} />
        </div>
        <img class="frame-25" src={imagenes.frame49} />
      </div>
    </div>
  );
};

export default VentaUsados;

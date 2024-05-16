// src/pages/IniciarSesion/IniciarSesion.jsimport React from 'react';
import { Link } from 'react-router-dom';
import imagenes from './imagenes'; // Importar el archivo imagenes.js
import './globals.css';
import './style.css';

const VentaCodigo = () => {
  return (
    <div class="venta-cdigo">
      <div class="div">
        <div class="main">
          <div class="text-wrapper">¡Vende tu videojuego!</div>
          <img class="shopify" src={imagenes.shopify1} /> {/* Usar la imagen desde imagenes.js */}
          <div class="TITULO">
            <div class="label"><div class="label-2">Código</div></div>
            <input class="container" />
          </div>
          <Link to="/venta-datos" class="frame"><div class="text-wrapper-2">Ingresar</div></Link>
          <Link to="/venta-funcionalidad" >
          <img class="para-qu-sirve-el" src={imagenes.paraQueSirveElCodigo} /> {/* Usar la imagen desde imagenes.js */}
          </Link>
        </div>
        <div class="frame-2">
          <div class="group">
            <div class="text-wrapper-3">GAME CYCLE</div>
            <img class="vector" src={imagenes.vector} /> {/* Usar la imagen desde imagenes.js */}
          </div>
          <div class="frame-3">
            <div class="text-wrapper-4">Buscar producto</div>
            <div class="overlap-group">
              <div class="text-wrapper-5">Todas las categorías</div>
              <img class="chevron-down" src={imagenes.chevronDown} /> {/* Usar la imagen desde imagenes.js */}
            </div>
            <img class="line" src={imagenes.line7} /> {/* Usar la imagen desde imagenes.js */}
            <img class="img" src={imagenes.frame198} /> {/* Usar la imagen desde imagenes.js */}
          </div>
          <div class="frame-wrapper">
            <div class="div-wrapper">
              <div class="frame-4">
                <div class="frame-5">
                  <img class="group-2" src={imagenes.group} /> {/* Usar la imagen desde imagenes.js */}
                  <div class="frame-6"><div class="text-wrapper-6">Delivery</div></div>
                </div>
                <div class="frame-7">
                  <img class="group-3" src={imagenes.group95} /> {/* Usar la imagen desde imagenes.js */}
                  <div class="frame-8"><div class="text-wrapper-7">Retornar</div></div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-9">
            <div class="ll-menos-wrapper"><div class="ll-menos">Llámenos</div></div>
            <div class="frame-10">
              <img class="headphones-svgrepo" src={imagenes.headphonesSvgrepoComL} /> {/* Usar la imagen desde imagenes.js */}
              <div class="text-wrapper-8">+51 964542293</div>
            </div>
          </div>
          <div class="frame-11">
            <img class="user" src={imagenes.user} /> {/* Usar la imagen desde imagenes.js */}
            <div class="frame-12">
              <div class="frame-13">
                <div class="group-wrapper">
                  <div class="overlap-group-wrapper">
                    <div class="overlap-group-2">
                      <div class="text-wrapper-9">3</div>
                      <img class="shopping-cart" src={imagenes.shoppingCart} /> {/* Usar la imagen desde imagenes.js */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img class="vector-2" src={imagenes.vector1} /> {/* Usar la imagen desde imagenes.js */}
          </div>
        </div>
        <div class="frame-14">
          <div class="navbar">
            <div class="frame-15">
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
          <img class="frame-16" src={imagenes.frame118} /> {/* Usar la imagen desde imagenes.js */}
        </div>
      </div>
    </div>
  );
};

export default VentaCodigo;

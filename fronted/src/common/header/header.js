import React from 'react';
import { Link } from 'react-router-dom';
import './globals.css';
import './style.css';
import imagenes from "./imagenes";

const Header = () => {
  return (
    <div className="header">
     <div className="inicio">
      
        <div className="frame-13">
          <div className="group-3">
            <div className="text-wrapper-8">GAME CYCLE</div>
            <img className="vector" src={imagenes.vector} alt="" />
          </div>
          <div className="frame-14">
            <input className="buscar-producto" placeholder='Buscar producto'/>
            <div className="overlap-group-2">
              <select className="text-wrapper-9">
                    <option value="" disabled selected>Selecciona un género</option>
                    <option value="accion">Acción</option>
                    <option value="aventura">Aventura</option>
                    <option value="estrategia">Estrategia</option>
                    <option value="deportes">Deportes</option>
                    <option value="rpg">RPG</option>
                    <option value="simulacion">Simulación</option>
                  </select>
            </div>
            <img className="line-5" src={imagenes.line7} alt="" />
            <img className="frame-15" src={imagenes.frame198} alt="" />
          </div>
          <div className="group-4">
            <div className="frame-16">
              <div className="frame-17">
                <div className="frame-18">
                  <img className="group-5" src={imagenes.group} alt="" />
                  <div className="frame-19"><div className="text-wrapper-10">Delivery</div></div>
                </div>
                <div className="frame-20">
                  <img className="group-6" src={imagenes.group95} alt="" />
                  <div className="frame-21"><div className="text-wrapper-11">Retornar</div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-22">
            <div className="ll-menos-wrapper"><div className="ll-menos">Llámenos</div></div>
            <div className="frame-23">
              <img className="headphones-svgrepo" src={imagenes.headphonesSvg} alt="" />
              <div className="text-wrapper-12">+51 964542293</div>
            </div>
          </div>
          <div className="frame-24">
            <img className="user" src={imagenes.user} alt="" />
            <div className="frame-25">
              <div className="frame-26">
                <div className="frame-27">
                  <div className="group-7">
                    <div className="overlap-group-3">
                      <div className="text-wrapper-13">3</div>
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
        <div className="frame-31">
          <div className="navbar">
            <div className="frame-29">
              <div className="group-8">
                <div className="rectangle-2"></div>
                <div className="rectangle-3"></div>
                <div className="rectangle-4"></div>
              </div>
              <div className="text-wrapper-14">Búsqueda por categoría</div>
            </div>
            <Link to="/inicio" class="text-wrapper-15">Inicio</Link>
            <Link to="/venta-nuevos" class="text-wrapper-16">Nuevo</Link>
            <Link to="/venta-usados" class="text-wrapper-17">Usado</Link>
            <Link to="/venta-codigo" class="text-wrapper-18">Vender</Link>
          </div>
          <img className="frame-30" src={imagenes.frame118_1} alt="" />
        </div>
      </div>
  </div>
  );
};

export default Header;
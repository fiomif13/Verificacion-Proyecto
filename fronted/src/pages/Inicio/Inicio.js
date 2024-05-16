import React from 'react';
import { Link } from 'react-router-dom';
import './globals.css';
import './style.css';
import imagenes from "./imagenes";

const Inicio = () => {
  return (
    <div className="inicio">
      <div className="div">
        <div className="mask-group"><img className="frame" src={imagenes.frame303} alt="" /></div>
        <div className="overlap">
          <img className="group" src={imagenes.group72} alt="" />
          <Link to={"/venta-nuevos"} >
            <img className="img" src={imagenes.frame282} alt="" />
          </Link>
          <img className="line" src={imagenes.line8} alt="" />
          <div className="group-wrapper">
            <div className="group-2">
              <img className="line-2" src={imagenes.line10} alt="" />
              <img className="line-3" src={imagenes.line12} alt="" />
              <img className="line-4" src={imagenes.line12} alt="" />
            </div>
          </div>
          <div className="frame-2">
            <div className="frame-3">
              <p className="mes-de-terror"><span className="text-wrapper">Mes de </span> <span className="span">Terror</span></p>
              <p className="p">
                Por el mes de octubre introdúcete en mundos oscuros y horripilantes. Accede a los descuentos por tiempo
                limitado.
              </p>
              <div className="button-md"><div className="btn-text">Ver más</div></div>
            </div>
            <div className="rectangle-wrapper"><img className="rectangle" src={imagenes.rectangleL} alt="" /></div>
            <div className="rectangle-wrapper"><img className="rectangle" src={imagenes.rectangle2} alt="" /></div>
            <div className="rectangle-wrapper"><img className="rectangle" src={imagenes.rectangle3} alt="" /></div>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="frame-4">
            <div className="div-wrapper">
              <div className="frame-5">
                <div className="frame-6">
                  <p className="RESEARCH">
                    <span className="text-wrapper-2">¿Alguna pregunta? Llámenos 24/7!</span>
                    <span className="text-wrapper-3">&nbsp;</span>
                  </p>
                  <p className="stratus-RESEARCH">967 673 169<br />963 542 293</p>
                  <p className="cont-ctenos">
                    <span className="text-wrapper-2">Contáctenos<br /></span>
                    <span className="text-wrapper-4">gamecycle@gmail.com</span>
                  </p>
                  <img className="frame-7" src={imagenes.frame118} alt="" />
                </div>
                <div className="frame-8">
                  <div className="text-wrapper-5">Tendencias</div>
                  <div className="frame-9">
                    <div className="text-wrapper-6">PS4</div>
                    <div className="text-wrapper-7">PS3</div>
                    <div className="text-wrapper-7">XBOX ONE</div>
                    <div className="text-wrapper-7">XBOX 360</div>
                    <div className="text-wrapper-7">NINTENDO SWITCH</div>
                  </div>
                </div>
                <div className="frame-10">
                  <div className="text-wrapper-5">Información</div>
                  <div className="frame-9">
                    <div className="text-wrapper-6">Sobre nosotros</div>
                    <div className="text-wrapper-7">Contactenos</div>
                    <div className="text-wrapper-7">FAQs</div>
                    <div className="text-wrapper-7">Devoluciones</div>
                    <div className="text-wrapper-7">Políticas</div>
                    <div className="text-wrapper-7">Terminos y condiciones</div>
                  </div>
                </div>
                <div className="frame-11">
                  <div className="text-wrapper-5">Atención al cliente</div>
                  <div className="frame-9">
                    <div className="text-wrapper-6">Mi cuenta</div>
                    <div className="text-wrapper-7">Rastrear orden</div>
                    <div className="text-wrapper-7">Visto recientemente</div>
                    <div className="text-wrapper-7">Lista de deseos</div>
                    <div className="text-wrapper-7">Comparar</div>
                    <div className="text-wrapper-7">Ser un vendedor</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-12">
              <div className="img-wrapper"><img className="VISA" src={imagenes.visa} alt=""/></div>
              <div className="img-wrapper"><img className="MASTER" src={imagenes.master} alt=""/></div>
              <div className="img-wrapper"><img className="image" src={imagenes.image128} alt=""/></div>
              <div className="img-wrapper"><img className="INSLALLMENTS" src={imagenes.inslallments} alt=""/></div>
            </div>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group"><div className="element-e">© 2023 Game Cycle</div></div>
        </div>
        <div className="frame-13">
          <div className="group-3">
            <div className="text-wrapper-8">GAME CYCLE</div>
            <img className="vector" src={imagenes.vector} alt="" />
          </div>
          <div className="frame-14">
            <input className="buscar-producto" />
            <div className="overlap-group-2">
              <div className="text-wrapper-9">Todas las categorías</div>
              <img className="chevron-down" src={imagenes.chevronDown} alt="" />
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
                      <img  className="shopping-cart" src={imagenes.shoppingCart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="vector-2" src={imagenes.vector1} alt="" />
          </div>
        </div>
        <div className="frame-28">
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

export default Inicio;

import React from 'react';
import './globals.css';
import './style.css';
import { Link } from 'react-router-dom';
import imagenes from "./imagenes"

const Registrarse = () => {
  return (
    <div className="registrarse">
      <div className="frame-wrapper">
        <div className="frame">
          <div className="div">
            <div className="text-wrapper">Registro</div>
            <img className="line" src={imagenes.line} alt="line" />
          </div>
          <div className="div-wrapper"><div className="text-wrapper-2">Rellena los siguientes campos</div></div>
          <div className="frame-2"><input className="nombre-completo" /> <img className="user" src={imagenes.user} alt="user" /></div>
          <div className="frame-2"><input className="e-mail" /> <img className="mail" src={imagenes.mail} alt="mail" /></div>
          <div className="frame-2">
            <input className="contrasea" />
            <img className="lock" src={imagenes.lock} alt="lock" />
            <div className="group">
              <div className="overlap-group"><div className="ellipse"></div></div>
            </div>
          </div>
          <div className="frame-2">
            <input className="confirmar-contrasea" />
            <div className="overlap-group-wrapper">
              <div className="overlap-group"><div className="ellipse"></div></div>
            </div>
            <img className="img" src={imagenes.lock} alt="lock" />
          </div>
          

          <div className="frame-3"><Link to="/iniciar-sesion" className="text-wrapper-3">Registrarse</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Registrarse;

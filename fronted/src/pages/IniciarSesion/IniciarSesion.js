import React from 'react';
import { Link } from 'react-router-dom';
import './globals.css';
import './style.css';

// Importa las imágenes SVG
import mailSvg from './img/mail.svg';
import line2Svg from './img/line-2-1.svg';
import line3Svg from './img/line-3-1.svg';
import lockSvg from './img/lock.svg';
import frame444Svg from './img/frame-444.svg';
import bienvenidoASvg from './img/bienvenido-a-gamecycle-com.png';
import vectorSvg from './img/vector.svg';

const IniciarSesion = () => {
  return (
    <div className="iniciar-sesin">
      <div className="group-wrapper">
        <div className="group">
          <div className="frame">
            <div className="overlap">
              <div className="rectangle"></div>
              <div className="div">
                <div className="text-wrapper">Iniciar sesión</div>
                <Link to="/registrarse" className="text-wrapper-2">Registrarse</Link>
                <div className="frame-2">
                  <input className="correo-electrnico" placeholder='ejemplo@gmail.com'/>
                  <img className="mail" src={mailSvg} alt="mail" /></div>
                <div className="frame-3">
                  <div className="frame-4">
                    <input type="checkbox" id="rememberPassword" name="rememberPassword" />
                    <label className="text-wrapper-3" for="rememberPassword">Recordar contraseña</label>
                  </div>
                  <div className="text-wrapper-4">Olvide mi contraseña</div>
                </div>
                <div className="text-wrapper-5">o conectáte con</div>
                <img className="frame-5" src={frame444Svg} alt="frame" />
                <div className="frame-6">
                  <input className="contrasea" />
                  <input type="password" className="correo-electrnico" placeholder='*********'/>
                  <img className="lock" src={lockSvg} alt="lock" />
                  
                </div>
              </div>
              <div className="frame-7">
                <div className="overlap-2">
                  <Link to="/inicio" className="rectangle-2">
                  <div className="text-wrapper-6">Ingresar</div>
                  </Link>
              </div>
            </div>
            </div>
          </div>
          <img className="bienvenido-a" src={bienvenidoASvg} alt="bienvenido" />
          <div className="group-2">
            <div className="text-wrapper-7">GAME CYCLE</div>
            <img className="vector" src={vectorSvg} alt="vector" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;

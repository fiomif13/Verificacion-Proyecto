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
                <div className="frame-2"><input className="correo-electrnico" /> <img className="mail" src={mailSvg} alt="mail" /></div>
                <div className="frame-3">
                  <div className="frame-4">
                    <div className="overlap-wrapper">
                      <div className="overlap-group">
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-2">
                            <img className="line" src={line2Svg} alt="line" /> <img className="img" src={line3Svg} alt="line" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-wrapper-3">Recordar contraseña</div>
                  </div>
                  <div className="text-wrapper-4">Olvide mi contraseña</div>
                </div>
                <div className="text-wrapper-5">o conectáte con</div>
                <img className="frame-5" src={frame444Svg} alt="frame" />
                <div className="frame-6">
                  <input className="contrasea" />
                  <img className="lock" src={lockSvg} alt="lock" />
                  <div className="div-wrapper">
                    <div className="ellipse-wrapper"><div className="ellipse"></div></div>
                  </div>
                </div>
              </div>
              <div className="frame-7">
                <div className="overlap-2">
                  <div className="rectangle-2"></div>
                  <Link to="/inicio" className="text-wrapper-6">Ingresar</Link>
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

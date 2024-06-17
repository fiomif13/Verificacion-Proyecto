import React from 'react';
import { Link } from 'react-router-dom';
import './globals.css';
import './style.css';
import { useState, useEffect } from 'react';


// Importa las imágenes SVG
import mailSvg from './img/mail.svg';
import lockSvg from './img/lock.svg';
import frame444Svg from './img/frame-444.svg';
import bienvenidoASvg from './img/bienvenido-a-gamecycle-com.png';
import vectorSvg from './img/vector.svg';

const IniciarSesion = () => {
  // Estado para almacenar usuarios obtenidos del servidor
  const [usuarios, setUsuarios] = useState([]);

  // Función asincrónica para obtener usuarios del servidor
  const fetchUsuarios = async () => {
    try {
      const response = await fetch('http://localhost:3001/iniciar-sesion');
      if (!response.ok) {
        throw new Error('Error en la petición');
      }
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Efecto para llamar a fetchUsuarios cuando el componente se monte
  useEffect(() => {
    fetchUsuarios();
  }, []);

  // Mostrar el correo del primer usuario en el campo de entrada
  const primerCorreo = usuarios.length > 0 ? usuarios[0].correo : '';
  console.log('Primer correo:', primerCorreo);

  console.log(usuarios);
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
                  <input className="correo-electrnico" placeholder={primerCorreo}/>
                  <img className="mail" src={mailSvg} alt="mail" /></div>
                  
                <div className="frame-3">
                  <div className="frame-4">
                    <input type="checkbox" id="rememberPassword" name="rememberPassword" />
                      <label className="text-wrapper-3" htmlFor="rememberPassword">Recordar contraseña</label>
                  </div>
                  <div className="text-wrapper-4">Olvide mi contraseña</div>
                </div>
                <div className="text-wrapper-5">o conectáte con</div>
                <img className="frame-5" src={frame444Svg} alt="frame" />
                <div className="frame-6">
                  <input type="password" className="contrasea" placeholder='*********'/>
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

import React from 'react';
import { Link } from 'react-router-dom';
import imagenes from './imagenes'; // Importar el archivo imagenes.js
import './globals.css';
import './style.css';

const DetalleProducto = () => {
  return (
    <div className="detalle-del-producto">
      <div className="div">
        <div className="frame">
          <div className="div-wrapper"><div className="text-wrapper">Acción</div></div>
          <div className="div-wrapper"><div className="text-wrapper">Aventura</div></div>
          <div className="div-wrapper"><div className="text-wrapper">Mundo Abierto</div></div>
        </div>
        <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-2">Añadir al carro</div></Link>
        <div className="frame-3">
          <img className="img" src={imagenes.frame} alt="frame" />
          <div className="text-wrapper-3">1</div>
          <img className="img" src={imagenes.frame1181} alt="frame-1" />
        </div>
        <div className="frame-4"><div className="text-wrapper-4">-9%</div></div>
        <div className="text-wrapper-5">Marvel Spiderman</div>
        <div className="frame-5">
          <div className="text-wrapper-6">S/100</div>
          <div className="text-wrapper-7">S/110</div>
        </div>
        <div className="text-wrapper-8">Estado: Usado</div>
        <p className="p">
          Siente todo el poder de un Spider-Man más experimentado con combate improvisado, acrobacias dinámicas,
          recorrido urbano fluido e interacciones con el entorno.
        </p>
        <div className="text-wrapper-9">Géneros</div>
        <img className="image" src={imagenes.vector} alt="image-1" />
        <img className="image-2" src={imagenes.image2} alt="image-2" />
        <img className="image-3" src={imagenes.image5} alt="image-3" />
        <img className="image-4" src={imagenes.image6} alt="image-4" />
        <div className="frame-6">
          <div className="frame-7">
            <img className="star" src={imagenes.starL} alt="star-1" />
            <img className="star" src={imagenes.star2} alt="star-2" />
            <img className="star" src={imagenes.star3} alt="star-3" />
            <img className="star" src={imagenes.star4} alt="star-4" />
            <img className="star-2" src={imagenes.star5} alt="star-5" />
          </div>
          <p className="element"><span className="span">4.5/</span> <span className="text-wrapper-10">5</span></p>
        </div>
        <img className="line" src={imagenes.line3} alt="line-3" />
        <img className="line-2" src={imagenes.line7} alt="line-3" />
        <img className="line-3" src={imagenes.line7} alt="line-3" />
        
      </div>
    </div>
  );
};

export default DetalleProducto;

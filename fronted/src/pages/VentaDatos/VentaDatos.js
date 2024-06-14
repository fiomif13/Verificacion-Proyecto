import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './globals.css';
import './style.css';
import imagenes from './imagenes';

const VentaDatos = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileInputClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="VENTA-datos">
      <div className="div">
        <div className="main">
          <div className="text-wrapper">DATOS DEL VIDEOJUEGO</div>
          <div className="TITULO">
            <div className="label"><div className="label-2">Título</div></div>
            <input className="container" placeholder="Buscar producto"/>
          </div>
          <div className="div-wrapper">
            <div className="overlap-group">
              <div className="CONSOLA">
                <div className="label">
                  <div className="label-2">Género</div>
                </div>
                <div className="container-2">
                  <select className="text">
                    <option value="" disabled selected>Selecciona un género</option>
                    <option value="accion">Femenino</option>
                    <option value="aventura">Masculino</option>
                    <option value="estrategia">Prefiero no decirlo</option>
                  </select>
                </div>
              </div>
              <img className="ep-arrow-up-bold" src={imagenes.epArrowUpBold} />
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-group">
              <div className="CONSOLA">
                <div className="label">
                  <div className="label-2">Consola</div>
                </div>
                <div className="container-2">
                  <select className="text">
                    <option value="" disabled selected>Selecciona una consola</option>
                    <option value="xbox">Xbox</option>
                    <option value="playstation">PlayStation</option>
                    <option value="nintendo">Nintendo</option>
                  </select>
                </div>
              </div>
              <img className="ep-arrow-up-bold" src={imagenes.epArrowUpBold} />
            </div>
          </div>
          <div className="div-wrapper">
            <div className="CONSOLA-2">
              <div className="label"><div className="label-2">PRECIO</div></div>
              <input className="input" placeholder="Precio"/>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="CONSOLA-2">
              <div className="label"><div className="label-2">DESCRIPCIÓN (OPCIONAL)</div></div>
              <input className="input" placeholder="Descripción" />
            </div>
          </div>
          <div className="imagen">
            <div className="overlap">
              <div className="CONSOLA-3">
                <div className="label"><div className="label-2">Agregar imágenes</div></div>
              </div>
              <img
                className="vector"
                src={selectedImage || imagenes.vector}
                alt="Imagen seleccionada o predeterminada"
              />
            </div>
            <button className="frame" onClick={handleFileInputClick}>
              <div className="text-wrapper-2">Seleccionar archivo</div>
            </button>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <div className="text-wrapper-3">
              {selectedImage ? 'Archivo seleccionado' : 'Ningún archivo seleccionado'}
            </div>
          </div>
          <Link to="/venta-final" className="frame-2">
            <button className="text-wrapper-44">VENDER</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VentaDatos;

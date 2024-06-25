// src/pages/IniciarSesion/IniciarSesion.jsimport React from 'react';
import { Link } from 'react-router-dom';
import imagenes from './imagenes'; // Importar el archivo imagenes.js
import './globals.css';
import './style.css';
import axios from 'axios';
import { useState } from 'react';
import Header from '../../common/header/header.js';

const VentaCodigo = () => {
  const [juegosSeleccionados, setJuegosSeleccionados] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  
  const handleRemoverJuego = (juegoId) => {
    const juegoExistente = juegosSeleccionados.find(juego => juego.juego_id === juegoId);
    let nuevosJuegosSeleccionados;
    if (juegoExistente.cantidad > 1) {
      nuevosJuegosSeleccionados = juegosSeleccionados.map(juego =>
        juego.juego_id === juegoId ? { ...juego, cantidad: juego.cantidad - 1 } : juego
      );
    } else {
      nuevosJuegosSeleccionados = juegosSeleccionados.filter(juego => juego.juego_id !== juegoId);
      setIsDropdownVisible(nuevosJuegosSeleccionados.length > 0);
    }
    setJuegosSeleccionados(nuevosJuegosSeleccionados);
    actualizarJuegosSeleccionados(nuevosJuegosSeleccionados);
  }
  const actualizarJuegosSeleccionados = (juegosSeleccionados) => {
    axios.post('http://localhost:3001/juegos-seleccionados', juegosSeleccionados)
      .then(response => console.log('Selected games updated successfully:', response))
      .catch(error => console.error('Error updating selected games:', error));
  };
  return (
    <div>
      <Header 
        juegosSeleccionados={juegosSeleccionados}
        onRemoverJuego={handleRemoverJuego}
        isComprasDropdownVisible={isDropdownVisible}
        setIsComprasDropdownVisible={setIsDropdownVisible}
      />
      <div class="venta-cdigo">
        <div class="div">          
          <div class="main">
            <div class="text-wrapper">¡Vende el videojuego!</div>
            <img class="shopify" src={imagenes.shopify1} /> {/* Usar la imagen desde imagenes.js */}
            <div class="TITULO">
              <div class="label"><div class="label-2" >Código </div></div>
              <input class="container" placeholder="Ingrese codigo"/>
            </div>
            <Link to="/venta-datos" class="frame"><button class="text-wrapper-2">Ingresar</button></Link>
            <Link to="/venta-funcionalidad" >
            <img class="para-qu-sirve-el" src={imagenes.paraQueSirveElCodigo} /> {/* Usar la imagen desde imagenes.js */}
            </Link>
          </div>   
        </div>
      </div>
     </div>
  );
};

export default VentaCodigo;

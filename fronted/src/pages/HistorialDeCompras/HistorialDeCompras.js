import React from 'react';
import './globals.css';
import './style.css';
import imagenes from "./imagenes";
import axios from 'axios';
import { useState } from 'react';
import Header from '../../common/header/header.js';

const HistorialDeCompras = () => {
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
      <div className="historial-de-compras">

        <div className="div">
          <img className="line" src={imagenes.line4} alt="linea 4" />
          <img className="img" src={imagenes.line5} alt="linea 5" />
          <div className="text-wrapper">Historial de compras</div>
          
          <div className="historial">
            <div className="navbar-2">
              <div className="videojuegos">VIDEOJUEGOS</div>
              <div className="text-wrapper-18">FECHA</div>
              <div className="text-wrapper-18">PRECIO TOTAL</div>
              <div className="tipo-de-pago">TIPO DE PAGO</div>
            </div>
          
            <div className="products">
              <div className="product">
                <div className="product-2">
                  <p className="p">Nombre del videojuego - Plataforma - Estado del videojuego (nuevo o usado)</p>
                </div>
                <div className="frame-28"><div className="text-wrapper-19">23 feb. 2024</div></div>
                <div className="text-wrapper-20">S/ XX,00</div>
                <div className="frame-28"><div className="text-wrapper-19">Tarjeta de crédito, cupón</div></div>
              </div>
              <div className="product">
                <div className="product-2"><p className="p">Marvel Spiderman 2 - PlayStation 5 - Nuevo</p></div>
                <div className="text-wrapper-21">27 dic. 2023</div>
                <div className="text-wrapper-22">S/ 200,00</div>
                <div className="frame-28"><div className="text-wrapper-19">PayPal</div></div>
              </div>
              <div className="product">
                <div className="product-2"><p className="p">Super Mario Wonder - Nintendo Switch - Usado</p></div>
                <div className="text-wrapper-21">24 nov. 2023</div>
                <div className="text-wrapper-22">S/ 100,00</div>
                <div className="frame-28"><div className="text-wrapper-19">Tarjeta de crédito, cupón</div></div>
              </div>
              <div className="product">
                <div className="product-2"><p className="p">Halo Infinite - Xbox Series X|S - Usado</p></div>
                <div className="frame-28"><div className="text-wrapper-19">4 sept. 2023</div></div>
                <div className="text-wrapper-22">S/ 60,00</div>
                <div className="frame-28"><div className="text-wrapper-19">Tarjeta de crédito</div></div>
              </div>
              <div className="product">
                <div className="product-2"><p className="p">Death Stranding - PC - Nuevo</p></div>
                <div className="text-wrapper-21">28 jul. 2023</div>
                <div className="text-wrapper-22">S/ 150,00</div>
                <div className="frame-28"><div className="text-wrapper-19">PayPal, cupón</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default HistorialDeCompras;

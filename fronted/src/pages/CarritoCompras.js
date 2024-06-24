//C:\Users\PROGRESA HUACHIPA\OneDrive\Escritorio\ProyectoUXFinal\ProjectUX\fronted\src\pages\CarritoCompras.js
import React, { useState } from 'react';
import Header from '../common/header/header.js';

const CarritoCompras = ({ juegos, tipo }) => {
  const [juegosSeleccionados, setJuegosSeleccionados] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleComprarClick = (juegoId) => {
    const juegoSeleccionado = juegos.find(juego => juego.juego_id === juegoId);
    if (juegoSeleccionado) {
      const juegoExistente = juegosSeleccionados.find(juego => juego.juego_id === juegoId);
      if (juegoExistente) {
        setJuegosSeleccionados(juegosSeleccionados.map(juego =>
          juego.juego_id === juegoId ? { ...juego, cantidad: juego.cantidad + 1 } : juego
        ));
      } else {
        setJuegosSeleccionados([...juegosSeleccionados, { ...juegoSeleccionado, cantidad: 1 }]);
      }
      setIsDropdownVisible(true);
    }
  };

  const handleRemoverJuego = (juegoId) => {
    const juegoExistente = juegosSeleccionados.find(juego => juego.juego_id === juegoId);
    if (juegoExistente.cantidad > 1) {
      setJuegosSeleccionados(juegosSeleccionados.map(juego =>
        juego.juego_id === juegoId ? { ...juego, cantidad: juego.cantidad - 1 } : juego
      ));
    } else {
      const juegosFiltrados = juegosSeleccionados.filter(juego => juego.juego_id !== juegoId);
      setJuegosSeleccionados(juegosFiltrados);
      setIsDropdownVisible(juegosFiltrados.length > 0);
    }
  };

  return (
    <div className={`venta-${tipo}`}>
      <Header
        juegosSeleccionados={juegosSeleccionados}
        onRemoverJuego={handleRemoverJuego}
        isComprasDropdownVisible={isDropdownVisible}
        setIsComprasDropdownVisible={setIsDropdownVisible}
      />
      <div className="div">
        <div className="frame">
          <h1>{tipo === 'nuevos' ? 'Nuevos Juegos' : 'Juegos Usados'}</h1>
          <ul className="juegos-grid">
            {juegos.map(juego => (
              <li key={juego.juego_id} className="juego-item">
                <div className="videojuego">
                  <div className="text-wrapper">{juego.titulo}</div>
                  <img className="rectangle" src={`http://localhost:3001/uploads/${juego.titulo}`} alt={juego.titulo} />
                  <div className="div-wrapper">Precio: {juego.precio}</div>
                  <button className="text-wrapper-3" onClick={() => handleComprarClick(juego.juego_id)}>Comprar</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarritoCompras;
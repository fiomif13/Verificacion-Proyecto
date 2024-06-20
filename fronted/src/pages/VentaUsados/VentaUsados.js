import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './globals.css';
import './style.css';

const VentaUsados = () => {
  const [juegos, setJuegos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/venta-usados')
      .then(response => response.json())
      .then(data => setJuegos(data))
      .catch(error => setError('Error fetching used games:', error));
  }, []);

  console.log(juegos);

  return (
    <div className="venta-usados">
      <div className="div">
          <div className="frame">
            <h1>Juegos Usados</h1>
            {error && <p>{error}</p>}
            <ul className="juegos-grid">
              {juegos.map(juego => (
                <li key={juego.juego_id} className="juego-item">
                  <div className="videojuego">
                    <div className="text-wrapper">{juego.titulo}</div>
                    <img className="rectangle" src={`http://localhost:3001/uploads/${juego.titulo}`} alt={juego.titulo} />
                    <div className="div-wrapper">Precio: {juego.precio}</div>
                    <Link to="/carrito-compras" className="frame-2">
                      <div className="text-wrapper-3">Comprar</div>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </div>
  );
};

export default VentaUsados;

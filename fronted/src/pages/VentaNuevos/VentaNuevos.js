import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './globals.css';
import './style.css';

const NuevosJuegos = () => {
  const [juegos, setJuegos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/venta-nuevos')
      .then(response => response.json())
      .then(data => setJuegos(data))
      .catch(error => setError('Error fetching new games:', error));
  }, []);

  console.log(juegos);

  return (
    <div className='venta-nuevos'>
      <div className='div'>
        <div className='frame'>
          <h1>Nuevos Juegos</h1>
          {error && <p>{error}</p>}
          <ul className="juegos-grid">
            {juegos.map(juego => (
              <li key={juego.juego_id} className="juego-item">
                <div className="videojuego">
                  <div className="text-wrapper">{juego.titulo}</div>
                  <Link to={`/detalle-producto/${juego.juego_id}`} >
                    <img className="rectangle" src={`http://localhost:3001/uploads/${juego.titulo}`} alt={juego.titulo} />
                  </Link>
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

export default NuevosJuegos;
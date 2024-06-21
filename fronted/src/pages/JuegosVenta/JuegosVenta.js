import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


const JuegosPorCategoria = () => {
  const { juego_id } = useParams();
  const [juego, setJuego] = useState(null);

  // Use the 'juego' object to display the game details
  const { categoria_id } = useParams();
  const [juegos, setJuegos] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();



  useEffect(() => {
    const fetchJuegos = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/juegos-por-categoria?categoria_id=${categoria_id}`);
        setJuegos(response.data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchJuegos();
  }, [categoria_id]);

  
  console.log(juego);
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
                    <Link to={`/detalle-producto/${juego.juego_id}`} className="frame-3">
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

export default JuegosPorCategoria;

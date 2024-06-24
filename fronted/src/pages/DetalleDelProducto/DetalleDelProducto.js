import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import imagenes from './imagenes';
import './globals.css';
import './style.css';

const DetalleProducto = () => {
  const { juego_id } = useParams();
  const [juego, setJuego] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [estados, setEstados] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJuego = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/detalle-producto/${juego_id}`);
        setJuego(response.data);
      } catch (error) {
        console.error('Error fetching game details:', error);
        setError('Error fetching game details');
      }
    };

    const fetchCategorias = async () => {
      try {
        const response = await axios.get('http://localhost:3001/categorias');
        setCategorias(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const fetchEstados = async () => {
      try {
        const response = await axios.get('http://localhost:3001/estados');
        setEstados(response.data);
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    };

    fetchJuego();
    fetchCategorias();
    fetchEstados();
  }, [juego_id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!juego) {
    return <p>Cargando...</p>;
  }

  // Encuentra el nombre de la categoría y el estado
  const categoriaNombre = categorias.find(cat => cat.categoria_id === juego.categoria_id)?.nombre;
  const estadoNombre = estados.find(est => est.estado_id === juego.estado_id)?.nombre;

  console.log(juego);
  return (
    <div className="detalle-del-producto">
      <div className="div">
        <div className="frame">
          <div className="div-wrapper2"><div className="text-wrapper">{categoriaNombre}</div></div>
        </div>
        <Link to="/carrito-compras" className="frame-222"><div className="text-wrapper-222">Añadir al carro</div></Link>
        <div className="text-wrapper-52">{juego.titulo}</div>
        <div className="frame-52">
          <div className="text-wrapper-6">S/{juego.precio}</div>
        </div>
        <div className="text-wrapper-82">Estado: {estadoNombre}</div>
        <p className="p2">
          {juego.descripcion}
        </p>
        <div className="text-wrapper-92">Géneros</div>
        <img className="img2" src={`http://localhost:3001/uploads/${juego.titulo}`} alt={juego.titulo} />
        <div className="frame-6">
          <div className="frame-7">
          </div>
        </div>
      </div>
      <img className="line22" src={imagenes.line3} alt="line-3" />
      <img className="line-22" src={imagenes.line3} alt="line-3" />
      <img className="line-32" src={imagenes.line3} alt="line-3" />
    </div>
    
  );
};

export default DetalleProducto;

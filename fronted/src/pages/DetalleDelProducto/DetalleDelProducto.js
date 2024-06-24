import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import imagenes from './imagenes';
import './globals.css';
import './style.css';
import Header from '../../common/header/header.js';

const DetalleProducto = () => {
  const { juego_id } = useParams();
  const [juego, setJuego] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [estados, setEstados] = useState([]);
  const [error, setError] = useState(null);

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
    <div>
      <Header
        juegosSeleccionados={juegosSeleccionados}
        onRemoverJuego={handleRemoverJuego}
        isComprasDropdownVisible={isDropdownVisible}
        setIsComprasDropdownVisible={setIsDropdownVisible}
      />
    <div className="detalle-del-producto">

      <div className="div">
        <div className="frame">
          <div className="div-wrapper"><div className="text-wrapper">{categoriaNombre}</div></div>
        </div>
        <Link to="/carrito-compras" className="frame-2"><div className="text-wrapper-2">Añadir al carro</div></Link>
        <div className="text-wrapper-5">{juego.titulo}</div>
        <div className="frame-5">
          <div className="text-wrapper-6">S/{juego.precio}</div>
        </div>
        <div className="text-wrapper-8">{estadoNombre}</div>
        <p className="p">
          {juego.descripcion}
        </p>
        <div className="text-wrapper-9">Géneros</div>
        <img src={`http://localhost:3001/uploads/${juego.titulo}`} alt={juego.titulo} />
        <div className="frame-6">
          <div className="frame-7">
          </div>
        </div>
        
      </div>
    </div>
    </div>

  );
};

export default DetalleProducto;

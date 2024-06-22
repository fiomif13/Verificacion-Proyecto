import React, { useEffect, useState } from 'react';
import './globals.css';
import './style.css';
import CarritoCompras from '../CarritoCompras.js';

const VentaUsados = () => {
  const [juegos, setJuegos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/venta-usados')
      .then(response => response.json())
      .then(data => setJuegos(data))
      .catch(error => setError('Error fetching used games:', error));
  }, []);

  return (
    <CarritoCompras juegos={juegos} tipo="usados" />
  );
};

export default VentaUsados;

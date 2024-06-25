import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './globals.css';
import './style.css';
import imagenes from "./imagenes";
import Header from '../../common/header/header.js';
import axios from 'axios';

const Inicio = () => {
  const [juegosSeleccionados, setJuegosSeleccionados] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/juegos-seleccionados')
      .then(response => setJuegosSeleccionados(response.data))
      .catch(error => console.error('Error fetching selected games:', error));
  }, []);
  
  const handleRemoverJuego = (juegoId) => {
    const juegoExistente = juegosSeleccionados.find(juego => juego.juego_id === juegoId);
    let nuevosJuegosSeleccionados;
    eliminarJuegos();
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

  const eliminarJuegos = () => {
    axios.delete('http://localhost:3001/juegos-seleccionados')
      .then(response => console.log(response.data))
      .catch(error => console.error('Error deleting selected games:', error));
    setJuegosSeleccionados([]);
  };

  return (
    <div>
      <Header
        juegosSeleccionados={juegosSeleccionados}
        onRemoverJuego={handleRemoverJuego}
        isComprasDropdownVisible={isDropdownVisible}
        setIsComprasDropdownVisible={setIsDropdownVisible}
      />
    <div className="inicio">

      <div className="div">
        <div className="mask-group">
          <Carousel showThumbs={false} showArrows={false} autoPlay infiniteLoop>
            <div>
              <img className="frame" src={imagenes.frame303} alt="" />
            </div>
            <div>
              <img className="frame" src={imagenes.slide2} alt="" />
            </div>
            <div>
              <img className="frame" src={imagenes.slide3} alt="" />
            </div>
          </Carousel>
        </div>
        <div className="overlap">
          <img className="group" src={imagenes.group72} alt="" />
          <Link to={"/venta-nuevos"} >
            <img className="img" src={imagenes.frame282} alt="" />
          </Link>
          <img className="line" src={imagenes.line8} alt="" />
          <div className="frame-2">
            <div className="frame-3">
              <Carousel showThumbs={false} showArrows={true} autoPlay infiniteLoop showIndicators={false}>
                <div>
                  <img className='frame' src={imagenes.slide4} alt='' />
                  <div className="button-md"><div className="btn-text">Ver más</div></div>
                </div>
                <div>
                  <img className='frame' src={imagenes.slide5} alt='' />
                  <div className="button-md"><div className="btn-text">Ver más</div></div>
                </div>
                <div>
                  <img className='frame' src={imagenes.slide6} alt='' />
                  <div className="button-md"><div className="btn-text">Ver más</div></div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Inicio;
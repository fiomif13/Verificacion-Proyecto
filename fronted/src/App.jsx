//C:\Users\PROGRESA HUACHIPA\OneDrive\Escritorio\ProyectoUXFinal\ProjectUX\fronted\src\App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import IniciarSesion from './pages/IniciarSesion/IniciarSesion.js';
import Registrarse from './pages/Registrarse/Registrarse.js';
import Inicio from "./pages/Inicio/Inicio.js";
import NuevosJuegos from "./pages/VentaNuevos/VentaNuevos.js";
import VentaUsados from "./pages/VentaUsados/VentaUsados.js";
import VentaDatos from "./pages/VentaDatos/VentaDatos.js";
import VentaFinal from "./pages/VentaFinal/VentaFinal.js";
import VentaFuncionalidadDelCodigo from "./pages/VentaFuncionalidadDelCodigo/VentaFuncionalidadDelCodigo.js";
import PantallaDesplegableVenta from "./pages/PantallaDespegableVenta/PantallaDesplegableVenta.js";
import VentaCodigo from "./pages/VentaCodigo/VentaCodigo.js";
import PagoConTarjetas from "./pages/PagoConTarjetas/PagoConTarjetas.js";
import CompraExitosa from "./pages/CompraExitosa/CompraExitosa.js";
import DetalleProducto from "./pages/DetalleDelProducto/DetalleDelProducto.js";
import CarritoCompras from "./pages/CarritoDeCompras/CarritoCompras.js";
import DetalleProductoUsado from "./pages/DetalleDelProductoUsado/DetalleDelProducto.js";
import Header from './common/header/header.js';
import MaybeShowHeader from './common/MaybeShowHeader/MaybeShowHeader.js';
import SaveImage from "./pages/Configuraciones/ImagenConfig.js"; 
import MaybeShowFooter from "./common/MaybeShowFooter/MaybeShowFooter.js";
import Footer from "./common/footer/footer.js";
import HistorialDeCompras from './pages/HistorialDeCompras/HistorialDeCompras.js';
import JuegosPorCategoria from "./pages/JuegosVenta/JuegosVenta.js";

function App() {
  
  return (
    <Router>

      <Routes>
        <Route path="/detalle-producto/:juego_id" element={<DetalleProducto />} />
        <Route path="/juegos-por-categoria/:categoria_id" element={<JuegosPorCategoria />} />
        <Route path="/configuraciones" element={<SaveImage />} />
        <Route path="/carrito-compras" element={<CarritoCompras />} />
        <Route path="/detalle-producto-usado" element={<DetalleProductoUsado />} />
        <Route path="/detalle-producto" element={<DetalleProducto />} />
        <Route path="/compra-exitosa" element={<CompraExitosa />} />
        <Route path="/pago-tarjetas" element={<PagoConTarjetas />} />
        <Route path="/venta-codigo" element={<VentaCodigo />} />
        <Route path="/pantalla-venta" element={<PantallaDesplegableVenta />} />
        <Route path="/venta-funcionalidad" element={<VentaFuncionalidadDelCodigo />} />
        <Route path="/venta-final" element={<VentaFinal />} />
        <Route path="/venta-datos" element={<VentaDatos />} />
        <Route path="/venta-usados" element={<VentaUsados />} />
        <Route path="/venta-nuevos" element={<NuevosJuegos />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/historial" element={<HistorialDeCompras />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/" element={<IniciarSesion />} />
      </Routes>
      <MaybeShowFooter>
        <Footer />
      </MaybeShowFooter>
    </Router>
  );
}

export default App;
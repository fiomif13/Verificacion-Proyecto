// src/App.js
import {BrowserRouter, Route, Routes} from "react-router-dom"
import React from 'react';

import IniciarSesion from './pages/IniciarSesion/IniciarSesion.js';
import Registrarse from './pages/Registrarse/Registrarse.js';
import Inicio from "./pages/Inicio/Inicio.js";
import VentaNuevos from "./pages/VentaNuevos/VentaNuevos.js";
import VentaUsados from "./pages/VentaUsados/VentaUsados.js";
import VentaDatos from "./pages/VentaDatos/VentaDatos.js";
import VentaFinal from "./pages/VentaFinal/VentaFinal.js";
import VentaFuncionalidadDelCodigo from "./pages/VentaFuncionalidadDelCodigo/VentaFuncionalidadDelCodigo.js";
import PantallaDesplegableVenta from "./pages/PantallaDespegableVenta/PantallaDesplegableVenta.js";
import VentaCodigo from "./pages/VentaCodigo/VentaCodigo.js";
import PagoConTarjetas from "./pages/PagoConTarjetas/PagoConTarjetas.js";
import PagoDesplegableCompra from "./pages/PantallaDespegableCompra/PagoDesplegableCompra.js";
import CompraExitosa from "./pages/CompraExitosa/CompraExitosa.js";
import DetalleProducto from "./pages/DetalleDelProducto/DetalleDelProducto.js";
import CarritoCompras from "./pages/CarritoDeCompras/CarritoCompras.js";

function App(){
  return(
    <BrowserRouter>
          <Routes>
              <Route path="/carrito-compras" element={<CarritoCompras/>}/>
              <Route path="/detalle-producto" element={<DetalleProducto/>}/>
              <Route path="/compra-exitosa" element={<CompraExitosa/>}/>
              <Route path="/pago-desplegable" element={<PagoDesplegableCompra/>}/>
              <Route path="/pago-tarjetas" element={<PagoConTarjetas/>}/>
              <Route path="/venta-codigo" element={<VentaCodigo/>}/>
              <Route path="/pantalla-venta" element={<PantallaDesplegableVenta/>}/>
              <Route path="/venta-funcionalidad" element={<VentaFuncionalidadDelCodigo/>}/>
              <Route path="/venta-final" element={<VentaFinal/>}/>
              <Route path="/venta-datos" element={<VentaDatos/>}/>
              <Route path="/venta-usados" element={<VentaUsados/>}/>
              <Route path="/venta-nuevos" element={<VentaNuevos/>}/>
              <Route path="/registrarse" element={<Registrarse/>}/>
              <Route path="/iniciar-sesion" element={<IniciarSesion/>}/>
              <Route path="/inicio" element={<Inicio/>}/>
              <Route path="/" element={<IniciarSesion/>}/>
          </Routes>
    </BrowserRouter>
  )
}

export default App;
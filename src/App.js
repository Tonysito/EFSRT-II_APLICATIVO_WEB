import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './FOOTER/Footer';
import Header from './HEADER/Header';
import MainVender from './Vender.jsx';
import Registro from './registrar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nosotros from './Nosotros/Nosotros.jsx';
import Carrito from './Carrito.jsx'; // Verifica que la ruta sea correcta
import ServicioCliente from './ServicioCliente/ServicioCliente.jsx';

function App () {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Carrito />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/vender" element={<MainVender />} />
          <Route path="/Nosotros" element={<Nosotros/>} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/ServicioCliente" element={<ServicioCliente />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

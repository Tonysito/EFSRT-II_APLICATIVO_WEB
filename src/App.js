import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './FOOTER/Footer';
import Header from './HEADER/Header';
import MainVender from './Vender.jsx';
import Registro from './Registro';
import 'bootstrap/dist/css/bootstrap.min.css';

import Carrito from './Carrito.jsx';

function App () {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Carrito />} />
          <Route path="/vender" element={<MainVender />} />
          <Route path="/Registro" element={<Registro />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

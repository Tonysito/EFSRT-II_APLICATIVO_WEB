import './App.css';
import React, { useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import Footer from './FOOTER/Footer';
import Header from './HEADER/Header';
import MainVender from './Vender.jsx';
import Registro from './registrar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nosotros from './Nosotros/Nosotros.jsx';
import Carrito from './Carrito.jsx'; // Verifica que la ruta sea correcta
import ServicioCliente from './ServicioCliente/ServicioCliente.jsx';
import Swal from 'sweetalert2';




function App () {

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0); // Desplaza al tope de la página cada vez que cambia el pathname
    }, [pathname]);
  
    return null;
  };

  useEffect(() => {
     // Verificar si hay tempData en localStorage
     const tempData = localStorage.getItem('tempData');
     if (tempData) {
         const data = JSON.parse(tempData);
            showAlert(data);
         localStorage.removeItem('tempData');
     }
}, []);

const showAlert = (data) => {
  setTimeout(() => {
    Swal.fire({
      title: data.title,
      text: data.text,
      icon: data.icon,
      confirmButtonText: 'Cerrar',
      confirmButtonColor: '#4CAF50',
      iconColor: '#4CAF50',
      customClass: {
        popup: 'animated bounce',
      },
    });
  }, 3000); // 3000 milisegundos (3 segundos)
};

  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop /> {/* Componente para gestionar el scroll al tope */}
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

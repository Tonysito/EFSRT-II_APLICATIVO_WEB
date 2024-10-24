import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // Importa SweetAlert
import './Header.css';
import Formulario from './Formulario';


const Header = () => {
  const handleSearchKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Evitar que la página se recargue
      Swal.fire({
        title: 'Funcionalidad en Desarrollo',
        text: 'La función de búsqueda estará disponible en la próxima versión.',
        icon: 'info',
        confirmButtonText: 'Cerrar',
        background: '#fff',
        color: '#333',
        confirmButtonColor: '#ff4d4f',
      });
    }
  };

  return (
    <header className="contenedor-header">
      <div className="contenido-header">
        <div className="logo-header">
          <a href="/">
            <img src="../images/LogoPNG.png" alt="Logo" />
          </a>
        </div>
        
        <input
          id='text'
          className="barra-busqueda-header"
          type="text"
          placeholder="Buscar productos..."
          onKeyDown={handleSearchKeyDown} // Manejar evento de tecla
        />
        <Formulario />
      </div>
      <div>
        <nav className="navegacion-header">
          <div className="menu-comprar">
            <Link to="/Carrito">Comprar</Link>
            <div className="submenu">
              <a href="#accesorio">Accesorio</a>
              <a href="#belleza">Belleza y Salud</a>
              <a href="#calzado">Calzado y Moda</a>
            </div>
          </div>
          <div className="menu-vender">
            <Link to="/vender">Vender</Link>
            <div className="submenu">
              <a href="#vender-productos">Vender productos</a>
              <a href="#vender-servicios">Vender servicios</a>
            </div>
          </div>
          <Link to="/Nosotros">Nosotros</Link>
          <Link to="/ServicioCliente">Servicio al cliente</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

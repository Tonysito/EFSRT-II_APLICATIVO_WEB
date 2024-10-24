import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // Importa SweetAlert
import './Header.css';
import Formulario from './Formulario';
import { RxHamburgerMenu } from 'react-icons/rx'; // Importar el ícono de hamburguesa
import { AiOutlineClose } from 'react-icons/ai'; // Ícono de cierre (una "X")


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú hamburguesa

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna el estado del menú (abierto/cerrado)
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

      <button className="menu-btn" onClick={toggleMenu}>
          {menuOpen ? (
            <AiOutlineClose size={30} color="#ff4d4f" /> // Mostrar una "X" cuando el menú está abierto
          ) : (
            <RxHamburgerMenu size={30} color="#333" /> // Mostrar el ícono de hamburguesa cuando está cerrado
          )}
        </button>
      <div>
        <nav className={`navegacion-header ${menuOpen ? 'show-menu' : ''}`}>
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

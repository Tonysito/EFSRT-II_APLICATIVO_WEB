import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="contenedor-header">
      <div className="contenido-header">
        <div className="logo-header">
          <img src="logo.png" alt="Logo" />
          <h1>ComerciaPe</h1>
        </div>
        
        <input
          className="barra-busqueda-header"
          type="text"
          placeholder="Buscar productos..."
        />
        
        <nav className="navegacion-header">
          <a href="#tendencia">Tendencia</a>
          <div className="menu-comprar">
            <a href="#comprar">Comprar</a>
            <div className="submenu">
              <a href="#accesorio">Accesorio</a>
              <a href="#belleza">Belleza y Salud</a>
              <a href="#calzado">Calzado y Moda</a>
            </div>
          </div>
          <div className="menu-vender">
            <a href="#vender">Vender</a>
            <div className="submenu">
              <a href="#vender-productos">Vender productos</a>
              <a href="#vender-servicios">Vender servicios</a>
            </div>
          </div>
          <a href="#nosotros">Nosotros</a>
          <a href="#servicio-cliente">Servicio al Cliente</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

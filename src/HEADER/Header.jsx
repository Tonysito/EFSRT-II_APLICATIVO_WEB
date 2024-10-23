import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Formulario from './Formulario';

const Header = ({ allProducts, setProducts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Evitar que la página se recargue

      if (searchTerm.trim() === '') {
        // Si la barra de búsqueda está vacía, mostrar todos los productos
        setProducts(allProducts);
      } else {
        // Filtrar productos que coincidan con el término de búsqueda
        const filteredProducts = allProducts.filter(product =>
          product.nameProduct.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(filteredProducts);
      }

      // Limpiar la barra de búsqueda después de la búsqueda
      setSearchTerm('');
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
          className="barra-busqueda-header"
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleSearchSubmit} // Manejar evento de tecla
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

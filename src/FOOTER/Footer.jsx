import React from 'react';
import './Footer.css'; 
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { PiX } from 'react-icons/pi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">
        <div className="footer-logo">
          <img className='loguito' src="/images/LogoPNG.png"  alt="Logo de ComerciaPe" /> {/* Colocar logo */}
   
        </div>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>
      <hr />
      <div className="footer-sections">
        <div>
          <h2>Nosotros</h2>
          <a href="/Trabaja">Trabaja con nosotros</a>
          <a href="/Blog">Blog</a>
          <a href="/Acerca">Acerca de ComerciaPe</a>
        </div>
        <div>
          <h2>Cuenta</h2>
          <a href="/">Crear cuenta emprendedor</a>
          <a href="/">Crear cuenta</a>
        </div>
        <div>
          <h2>Productos</h2>
          <a href="/">Tendencia</a>
          <a href="/">Ofertas</a>
          <a href="/">Servicios</a>  {/* Ofrecer servicios */}
        </div>
        <div>
          <h2>Atención al cliente</h2>
          <a href="/">Tu cuenta</a>
          <a href="/">Tus pedidos</a>
          <a href="/">Devoluciones y reemplazos</a>
          <a href="/">Ayuda</a>
        </div>
        <div className="footer-register">
          <h2>REGÍSTRATE</h2>
          <form>
            <input type="email" placeholder="Ingresa tu correo" required aria-label="Correo electrónico para registrarse"/>
            <button type="submit">Registrarse</button>
          </form>
        </div>
      </div>
      <div className="footer-rights">
        <p>Copyright &copy; 2024 ComerciaPe. Todos los derechos reservados.</p>
        <p>
          <a href="/privacidad">Política de privacidad</a> | 
          <a href="/">Términos y condiciones</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

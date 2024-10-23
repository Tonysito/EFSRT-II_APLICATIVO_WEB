import React from 'react';
import './Nosotros.css'; // Importa el CSS mejorado

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <div className="hero-section">
        <h1>Bienvenido a ComerciaPe</h1>
        <p>Conectando Perú con el mundo a través del comercio digital</p>
      </div>

      <section className="nosotros-content">
        <div className="text-container">
          <h2>Sobre Nosotros</h2>
          <p>
            En <strong>ComerciaPe</strong>, estamos comprometidos con el desarrollo del comercio digital en Perú. Nos enfocamos en brindar una plataforma segura y confiable para que las personas puedan comprar y vender productos con facilidad. Nuestro objetivo es conectar a los emprendedores con el mercado global, especialmente con miras al lanzamiento del <strong>megapuerto de Chancay</strong>.
          </p>
        </div>
        <div className="image-container">
          <img src="./images/megapuerto.jpeg" alt="Megapuerto de Chancay" />
     
        </div>
      </section>

      <section className="megapuerto-section">
        <h2>El Impacto del Megapuerto de Chancay</h2>
        <p>
          El megapuerto de Chancay será una pieza clave en el crecimiento del comercio internacional en Perú. Este gran proyecto no solo facilitará el transporte de mercancías, sino que también abrirá nuevas oportunidades para los emprendedores locales. En <strong>ComerciaPe</strong>, estamos listos para aprovechar esta oportunidad y conectar a más personas con el comercio global.
        </p>
        <img src="/images/panoramica.jpeg" alt="Megapuerto de Chancay" className="megapuerto-image"/>
      </section>

      <section className="valores-section">
        <h2>Nuestros Valores</h2>
        <ul>
          <li><strong>Innovación:</strong> Siempre buscamos nuevas maneras de mejorar la experiencia del comercio digital.</li>
          <li><strong>Confianza:</strong> La seguridad y la transparencia son nuestros principales pilares.</li>
          <li><strong>Compromiso:</strong> Nos comprometemos con el desarrollo de nuestros usuarios y el país.</li>
          <li><strong>Excelencia:</strong> Ofrecemos un servicio de calidad para garantizar la satisfacción de nuestros clientes.</li>
        </ul>
      </section>
    </div>
  );
};

export default Nosotros;

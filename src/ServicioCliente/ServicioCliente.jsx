import React, { useState } from 'react';
import './ServicioCliente.css'; // Importamos el CSS correspondiente
import { FaWhatsapp, FaPhone   } from 'react-icons/fa';
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const ServicioCliente = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [consulta, setConsulta] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aquí podrías enviar el mensaje a tu backend o manejarlo como desees
    // Ejemplo: enviarConsulta(nombre, correo, consulta);
    
    setMensaje('¡Gracias por tu consulta! Nos pondremos en contacto contigo pronto.');
    
    // Limpiar los campos
    setNombre('');
    setCorreo('');
    setConsulta('');
  };

  return (
    <div className="servicio-cliente-container">
      <div className="header-section">
        <h1>Servicio al Cliente</h1>
        <p>Estamos aquí para ayudarte con todo lo que necesites en ComerciaPe</p>
      </div>

      <section className="faq-section">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-item">
          <h3>¿Cómo puedo rastrear mi pedido?</h3>
          <p>Una vez que tu pedido haya sido procesado y enviado, recibirás un correo electrónico con los detalles del seguimiento.</p>
        </div>
        <div className="faq-item">
          <h3>¿Cómo puedo devolver un producto?</h3>
          <p>Puedes iniciar el proceso de devolución desde tu cuenta, en la sección de pedidos. Sigue las instrucciones que aparecerán en pantalla.</p>
        </div>
        <div className="faq-item">
          <h3>¿Cuáles son los métodos de pago aceptados?</h3>
          <p>Aceptamos tarjetas de crédito, débito, transferencias bancarias y pagos mediante billeteras electrónicas.</p>
        </div>
      </section>

      <section className="contact-section">
        <h2>¿Necesitas más ayuda?</h2>
        <p>Nuestro equipo de atención al cliente está disponible 24/7 para asistirte.</p>

        <div className="contact-options">
          <div className="contact-method">
          <FaPhone size="2rem"  /> 
            <h3>Teléfono</h3>
            <p>Llámanos al <strong>(01) 123-4567</strong></p>
          </div>
          <div className="contact-method">
          <IoMdMail size="2rem"/>
            <h3>Correo Electrónico</h3>
            <p>Escríbenos a <strong>soporte@comerciape.com</strong></p>
          </div>
          <div className="contact-method">
         <IoChatbubbleEllipses size="2rem"/>
            <h3>Chat en Vivo</h3>
            <p>Habla con un representante ahora</p>
          </div>
        </div>
      </section>

      <section className="form-section">
        <h2>Envíanos tu Consulta</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Tu correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <textarea
            placeholder="Escribe tu consulta..."
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
            required
          ></textarea>
          <button type="submit">Enviar Consulta</button>
        </form>
        {mensaje && <p className="success-message">{mensaje}</p>}
      </section>

      <section className="support-section">
        <h2>Otros Recursos</h2>
        <ul>
          <li><a href="/">Políticas de Devolución</a></li>
          <li><a href="/">Términos y Condiciones</a></li>
          <li><a href="/">Privacidad y Seguridad</a></li>
        </ul>
      </section>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/51960537380"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >  
        <FaWhatsapp size="2rem" />
      </a>
    </div>
  );
};

export default ServicioCliente;

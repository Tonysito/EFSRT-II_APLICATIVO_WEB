import React, { useState } from 'react';
import './Formulario.css';

// Importa el archivo JSON de usuarios
import usuarios from '../usuarios.json';

const Formulario = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const toggleRegisterForm = () => {
    setMostrarFormulario(prevState => !prevState);
  };

  const validateForm = (e) => {
    e.preventDefault();
    let valid = true;

    // Validar correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('El correo electrónico debe contener un nombre de usuario seguido de un símbolo @, seguido de un dominio que incluye al menos un punto (.) y una extensión. No debe haber espacios ni caracteres especiales prohibidos antes o después del @ y el punto.');
      valid = false;
    } else {
      setEmailError('');
    }

    // Validar contraseña
    if (!password) {
      setPasswordError('Ingrese la contraseña correcta. Verifique que ingresó los datos correctos.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      // Verificar las credenciales en usuarios.json
      const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.password === password);

      if (usuarioEncontrado) {
        // Redirigir a la página de inicio si el usuario existe
        window.location.href = '/vender'; // Cambia esto a la ruta de tu página de inicio
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    }
  };

  return (
    <div className="cuenta-container">
      <div className="cuenta-icon" onClick={toggleRegisterForm}>
        <i className="fas fa-user" />
      </div>
      <div>
        <span onClick={toggleRegisterForm}>Iniciar Sesión</span>
      </div>
      {mostrarFormulario &&
        <div className="overlay" onClick={toggleRegisterForm}>
          <div
            id="registro"
            className="registro-form"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="form-container">
              <p className="title">Iniciar Sesión</p>
              <form className="form" onSubmit={validateForm}>
                <div className="input-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingrese su correo"
                  />
                  {emailError && <p className="error">{emailError}</p>}
                </div>
                <div className="input-group">
                  <label htmlFor="password">Contraseña</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingrese su contraseña"
                  />
                  {passwordError && <p className="error">{passwordError}</p>}
                </div>
                <button className="IniciarSesion" type="submit">Iniciar sesión</button>
              </form>
              <div className="social-message">
                <div className="line" />
                <p className="message">Continuar con </p>
                <div className="line" />
              </div>
              <div className="social-iconos">
                {/* Botones de redes sociales (opcional) */}
              </div>
              <p className="signup">
                No tienes una cuenta?
                {' '}
                <a
                  rel="noopener noreferrer"
                  href="/Registro"
                >
                  Crear Cuenta
                </a>
              </p>
            </div>
          </div>
        </div>}
    </div>
  );
};

export default Formulario;
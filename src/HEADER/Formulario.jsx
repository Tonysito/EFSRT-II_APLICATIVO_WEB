import React, { useState, useEffect } from 'react';
import './Formulario.css';
import usuarios from '../usuarios.json';

const Formulario = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usuarioNombre, setUsuarioNombre] = useState(null); // Estado para el nombre del usuario
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Recuperar el nombre del usuario del localStorage al cargar el componente
  useEffect(() => {
    const nombreGuardado = localStorage.getItem('usuarioNombre');
    if (nombreGuardado) {
      setUsuarioNombre(nombreGuardado);
    }
  }, []);

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
        // Establecer el nombre del usuario en el estado y en localStorage
        setUsuarioNombre(usuarioEncontrado.fullName); // Usa 'fullName' del JSON
        localStorage.setItem('usuarioNombre', usuarioEncontrado.fullName); // Guardar en localStorage
        window.location.href = '/'; // Cambia esto a la ruta de tu página de inicio
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    }
  };

  const handleLogout = () => {
    setUsuarioNombre(null); // Restablecer el nombre del usuario
    localStorage.removeItem('usuarioNombre'); // Eliminar del localStorage
    window.location.href = '/'; // Opcional: redirigir a la página de inicio
  };

  return (
    <div className="cuenta-container">
      <div className="cuenta-icon" onClick={toggleRegisterForm}>
        <i className="fas fa-user" />
      </div>
      <div className='user-sesion'>
        <span onClick={toggleRegisterForm}>
          {usuarioNombre ? usuarioNombre : 'Iniciar Sesión'}
        </span>
        {usuarioNombre && (
          <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
        )}
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
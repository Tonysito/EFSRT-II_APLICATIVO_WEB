import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Registro = () => {

    const navigate = useNavigate();

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        companyName: '',
        firstName: '',
        lastName: '',
        phone: '',
        userType: ''
    });

    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
        companyNameError: '',
        firstNameError: '',
        lastNameError: '',
        phoneError: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone' && value.length > 9) {
            return; // No hacer nada si ya hay 9 caracteres
        }

        setFormData({
            ...formData,
            [name]: value
        });
        validateField(name, value);
    };

    const validateField = (name,value) => {
        let valid = true;
        const newErrors = { ...errors };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.emailError = 'El correo electrónico es inválido.';
            valid = false;
        } else {
            newErrors.emailError = '';
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            newErrors.passwordError = 'La contraseña debe tener al menos 8 caracteres e incluir una letra mayúscula, una letra minúscula, un número y un carácter especial.';
            valid = false;
        } else {
            newErrors.passwordError = '';
        }

        const companyNameRegex = /^[a-zA-Z0-9\s]{3,50}$/;
        if (!companyNameRegex.test(formData.companyName)) {
            newErrors.companyNameError = 'El nombre de la empresa debe tener entre 3 y 50 caracteres y solo puede incluir letras, números y espacios.';
            valid = false;
        } else {
            newErrors.companyNameError = '';
        }

        const firstNameRegex = /^[a-zA-Z\s]{3,50}$/;
        if (!firstNameRegex.test(formData.firstName)) {
            newErrors.firstNameError = 'El nombre debe tener entre 3 y 50 caracteres y solo puede incluir letras y espacios.';
            valid = false;
        } else {
            newErrors.firstNameError = '';
        }

        const lastNameRegex = /^[a-zA-Z\s]{3,50}$/;
        if (!lastNameRegex.test(formData.lastName)) {
            newErrors.lastNameError = 'El apellido debe tener entre 3 y 50 caracteres y solo puede incluir letras y espacios.';
            valid = false;
        } else {
            newErrors.lastNameError = '';
        }

        if (name === 'phone') {
            const phoneRegex = /^\d{9}$/;
            if (!phoneRegex.test(value)) {
                newErrors.phoneError = 'El teléfono debe ser un número de 9 dígitos.';
            } else {
                newErrors.phoneError = '';
            }
        }
        setIsButtonDisabled(!valid);
        setErrors(newErrors);

        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Formulario enviado");

        if (validateField()) {
            const usuarioData = {
                id: Date.now(),
                ...formData,
            };
    
            try {
                console.log("Enviando datos al servidor...");
                const response = await fetch('http://localhost:5000/usuarios', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(usuarioData),
                });

                if (!response.ok) {
                    throw new Error('Error en la respuesta del servidor');
                }

                sessionStorage.setItem('mensaje', 'Registro exitoso. ¡Bienvenido/a!');
                console.log("Datos enviados y mensaje guardado en sessionStorage");
                
                navigate('/'); // Redirige a la página principal
            } catch (error) {
                console.error('Error al registrar el usuario:', error);
                alert('Hubo un error al conectar con el servidor.');
            }
        } else {
            alert("Por favor, complete todos los campos requeridos.");
        }
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
                <h2 className="mb-4">Registro</h2>
                <div className="mb-3">
                <label htmlFor="country" className="form-label" >País/región:</label>
                <select
                    className="form-select"
                    id="country"
                    name="country"
                    defaultValue="Perú"
                    disabled
                >
                    <option value="Perú">Perú</option>
                </select>
                </div>
                <div className="mb-3">
                    <span className="form-label">Rol comercial:</span>
                    <br/>
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            className="form-check-input"
                            id="comprador"
                            name="userType"
                            value="Comprador"
                            checked={formData.userType === 'Comprador'}
                            onChange={handleChange}
                        />
                        <label htmlFor="comprador" className="form-check-label">Comprador</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            className="form-check-input"
                            id="vendedor"
                            name="userType"
                            value="Vendedor"
                            checked={formData.userType === 'Vendedor'}
                            onChange={handleChange}
                        />
                        <label htmlFor="vendedor" className="form-check-label">Vendedor</label>
                    </div>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico:</label>
                    <input
                        type="email"
                        className={`form-control ${errors.emailError ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                    />
                    {errors.emailError && <div className="invalid-feedback">{errors.emailError}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña:</label>
                    <input
                        type="password"
                        className={`form-control ${errors.passwordError ? 'is-invalid' : ''}`}
                        placeholder="Password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required = {true}
                        autoComplete="true"
                    />
                    {errors.passwordError && <div className="invalid-feedback">{errors.passwordError}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="companyName" className="form-label">Nombre de empresa:</label>
                    <input
                        type="text"
                        className={`form-control ${errors.companyNameError ? 'is-invalid' : ''}`}
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        autoComplete="organization"
                    />
                    {errors.companyNameError && <div className="invalid-feedback">{errors.companyNameError}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">Nombre:</label>
                    <input
                        type="text"
                        className={`form-control ${errors.firstNameError ? 'is-invalid' : ''}`}
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        autoComplete="given-name"
                    />
                    {errors.firstNameError && <div className="invalid-feedback">{errors.firstNameError}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Apellidos:</label>
                    <input
                        type="text"
                        className={`form-control ${errors.lastNameError ? 'is-invalid' : ''}`}
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        autoComplete="family-name"
                    />
                    {errors.lastNameError && <div className="invalid-feedback">{errors.lastNameError}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono:</label>
                    <input
                        type="tel"
                        className={`form-control ${errors.phoneError ? 'is-invalid' : ''}`}
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={9}
                        required
                        autoComplete="tel"
                    />
                    {errors.phoneError && <div className="invalid-feedback">{errors.phoneError}</div>}
                </div>
                <button type="submit" className="btn btn-danger" disabled={isButtonDisabled}>Registrarme</button>
            </form>
        </div>
    );
};

export default Registro;

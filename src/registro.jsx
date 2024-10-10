import React, { useState } from 'react';

const Registro = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        companyName: '',
        fullName: '',
        phone: ''
    });

    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
        companyNameError: '',
        fullNameError: '',
        phoneError: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };

        // Validar correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.emailError = 'El correo electrónico es inválido.';
            valid = false;
        } else {
            newErrors.emailError = '';
        }

        // Validar contraseña
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            newErrors.passwordError = 'La contraseña debe tener al menos 8 caracteres e incluir una letra mayúscula, una letra minúscula, un número y un carácter especial.';
            valid = false;
        } else {
            newErrors.passwordError = '';
        }

        // Validar nombre de la empresa
        const companyNameRegex = /^[a-zA-Z0-9\s]{3,50}$/; // Alfanumérico, 3 a 50 caracteres
        if (!companyNameRegex.test(formData.companyName)) {
            newErrors.companyNameError = 'El nombre de la empresa debe tener entre 3 y 50 caracteres y solo puede incluir letras, números y espacios.';
            valid = false;
        } else {
            newErrors.companyNameError = '';
        }

        // Validar nombre completo
        const fullNameRegex = /^[a-zA-Z\s]{3,50}$/; // Solo letras y espacios, 3 a 50 caracteres
        if (!fullNameRegex.test(formData.fullName)) {
            newErrors.fullNameError = 'El nombre completo debe tener entre 3 y 50 caracteres y solo puede incluir letras y espacios.';
            valid = false;
        } else {
            newErrors.fullNameError = '';
        }

        // Validar teléfono
        const phoneRegex = /^\d{9}$/; // Solo 9 dígitos
        if (!phoneRegex.test(formData.phone)) {
            newErrors.phoneError = 'El teléfono debe ser un número de 9 dígitos.';
            valid = false;
        } else {
            newErrors.phoneError = '';
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            const usuarioData = {
                id: Date.now(), // ID único basado en la fecha y hora actual
                ...formData,
            };

            // Guardar datos en el archivo usuarios.json
            await fetch('http://localhost:5000/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuarioData),
            });

            alert('Registro exitoso');
            setFormData({
                email: '',
                password: '',
                companyName: '',
                fullName: '',
                phone: ''
            });
        } else {
            alert('Por favor, corrige los errores en el formulario.');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
            <h2>Registro</h2>
            <div>
                <label>País/región:</label>
                <select name="country" value="Perú" disabled>
                    <option value="Perú">Perú</option>
                </select>
            </div>
            <div>
                <label>Correo electrónico:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {errors.emailError && <span style={{ color: 'red' }}>{errors.emailError}</span>}
            </div>
            <div>
                <label>Contraseña:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                {errors.passwordError && <span style={{ color: 'red' }}>{errors.passwordError}</span>}
            </div>
            <div>
                <label>Nombre de empresa:</label>
                <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                />
                {errors.companyNameError && <span style={{ color: 'red' }}>{errors.companyNameError}</span>}
            </div>
            <div>
                <label>Nombre completo:</label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
                {errors.fullNameError && <span style={{ color: 'red' }}>{errors.fullNameError}</span>}
            </div>
            <div>
                <label>Teléfono:</label>
                <input
                    type="text"
                    name="phone"
                    pattern="\d{9}"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    maxLength="9"
                    placeholder="Número de 9 dígitos"
                />
                {errors.phoneError && <span style={{ color: 'red' }}>{errors.phoneError}</span>}
            </div>
            <button type="submit">Aceptación y registro</button>
        </form>
    );
};

export default Registro;
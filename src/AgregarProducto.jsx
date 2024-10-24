import React, { useState, useEffect } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AgregarProducto = ({ setAllProducts }) => {
  const [nombreProducto, setNombreProducto] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState(1);
  const [img, setImg] = useState('');
  const [nuevoId, setNuevoId] = useState(null);
  const [mostrarAgregarProducto, setMostrarAgregarProducto] = useState(false);
  const [userType, setUserType] = useState(null);

  // Función para crear un retraso
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const tipoUsuarioGuardado = localStorage.getItem('tipoUsuario');
    if (tipoUsuarioGuardado) {
      setUserType(tipoUsuarioGuardado); // Establece el userType directamente
    }

    const fetchLastId = async () => {
      try {
        const response = await fetch('https://comerciape.netlify.app/data.json');
        const data = await response.json();
        const lastProduct = data[data.length - 1];
        setNuevoId(lastProduct ? lastProduct.id + 1 : 1);
      } catch (error) {
        console.error('Error al cargar el último ID:', error);
      }
    };

    fetchLastId();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Primero mostrar la alerta de confirmación
    const resultado = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres agregar este producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, agregar',
      cancelButtonText: 'Cancelar',
    });

    // Si el usuario confirma, continuar con la lógica de agregar el producto
    if (resultado.isConfirmed) {
      const nuevoProducto = {
        id: nuevoId,
        nameProduct: nombreProducto,
        price: parseFloat(precio),
        quantity: parseInt(cantidad),
        img: img,
      };
    
      try {
        const response = await fetch('https://comerciape.netlify.app/data.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(nuevoProducto),
        });
    
        // Verificar si la respuesta es exitosa
        if (response.ok) {
          // Obtener el producto agregado solo si la respuesta fue exitosa
          const addedProduct = await response.json();
          // Añadir el producto al estado después de un retraso de 1 segundo
          await delay(1000); // 1000 ms = 1 segundo de retraso
          setAllProducts((prevProducts) => [...prevProducts, addedProduct]);
    
          // Mostrar alerta de éxito
          await Swal.fire({
            title: '¡Producto Agregado!',
            text: 'El producto se ha agregado exitosamente.',
            icon: 'success',
            confirmButtonText: 'Cerrar',
          });
        } else {
          // Si la respuesta no es exitosa, manejar el error aquí
          Swal.fire({
            title: 'Estamos trabajando',
            text: 'Esta función aun esta en desarrollo',
            icon: 'info',
            confirmButtonText: 'Cerrar',
            customClass: {
                popup: 'animated bounce'
            }
        });
          // Aquí puedes optar por no mostrar la alerta de error si no lo deseas
          // O podrías mostrar un mensaje genérico, si lo prefieres.
        }
      } catch (error) {
        // Mostrar alerta de error solo si hay un error en el fetch
        Swal.fire({
          title: 'Estamos trabajando',
          text: 'Esta función aun esta en desarrollo',
          icon: 'info',
          confirmButtonText: 'Cerrar',
          customClass: {
              popup: 'animated bounce'
          }
      });
        // Aquí también puedes optar por no mostrar la alerta de error si no lo deseas
      }
    } else {
      // Si el usuario cancela la acción
      Swal.fire({
        title: 'Cancelado',
        text: 'El producto no fue agregado.',
        icon: 'info',
        confirmButtonText: 'Cerrar',
      });
    }
  }

  // Función que alterna la visibilidad del overlay
  const toggleAgregarProductoForm = () => {
    setMostrarAgregarProducto((prev) => !prev);
  };

  return (
    <>
      {userType === 'Vendedor' && (
        <button className='boton-agregar-producto' onClick={toggleAgregarProductoForm}>
          <FaPlusCircle />
        </button>
      )}
      {mostrarAgregarProducto && (
        <div className="overlay" onClick={toggleAgregarProductoForm}>
          <div className="form-container" onClick={(e) => e.stopPropagation()}>
            <h2 className="title">Agregar Producto</h2>
            <form className="form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label>ID del Producto:</label>
                <input type="number" value={nuevoId || ''} readOnly />
              </div>
              <div className="input-group">
                <label>Nombre del Producto:</label>
                <input
                  type="text"
                  value={nombreProducto}
                  onChange={(e) => setNombreProducto(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label>Precio:</label>
                <input
                  type="number"
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label>Cantidad:</label>
                <input
                  type="number"
                  value={cantidad}
                  onChange={(e) => setCantidad(e.target.value)}
                  min="1"
                  required
                />
              </div>
              <div className="input-group">
                <label>Imagen URL:</label>
                <input
                  type="text"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  required
                />
              </div>
              <button className="IniciarSesion" type="submit">Agregar Producto</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AgregarProducto;

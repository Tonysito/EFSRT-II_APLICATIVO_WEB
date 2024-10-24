import React, { useState, useEffect } from 'react';
import { CarritoCompras } from './components/CarritoCompras';
import ProductList from './components/ProductList';
import AgregarProducto from './AgregarProducto';
import Swal from 'sweetalert2';
import './Carrito.css';

function Carrito() {
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);
    const [usuarioNombre, setUsuarioNombre] = useState(null);
    const [userType, setUserType] = useState(null);
 

    useEffect(() => {
        const nombreGuardado = localStorage.getItem('usuarioNombre');
        const tipoUsuarioGuardado = localStorage.getItem('tipoUsuario');


        if (nombreGuardado) {
            setUsuarioNombre(nombreGuardado);
            setUserType(tipoUsuarioGuardado);
        }
         // Verificar si hay tempData en localStorage
         const tempData = localStorage.getItem('tempData');
         if (tempData) {
             // Parsear el objeto almacenado
             const data = JSON.parse(tempData);
                showAlert(data);
             // Eliminar tempData del localStorage después de mostrarlo
             localStorage.removeItem('tempData');
         }
    }, []);

    const showAlert = (data) => {
        Swal.fire({
            title: data.title,
            text: data.text,
            icon: data.icon,
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#4CAF50',
            iconColor: '#4CAF50',
            customClass: {
                popup: 'animated bounce',
            },
        });
    };


    return (
        <>
            <CarritoCompras
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
            />
            <ProductList
                usuarioNombre={usuarioNombre}
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
            />

            {userType === 'Vendedor' && (
                <AgregarProducto userType={userType} />
            )}
        </>
    );
}

export default Carrito;

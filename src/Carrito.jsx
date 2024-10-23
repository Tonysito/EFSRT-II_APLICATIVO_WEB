import React, { useState, useEffect } from 'react';
import { CarritoCompras } from './components/CarritoCompras';
import ProductList from './components/ProductList';
import AgregarProducto from './AgregarProducto';
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
    }, []);


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


            <div><p>Prueba 11</p></div>
        </>
    );
}

export default Carrito;

import React, { useState, useEffect } from 'react';
import { CarritoCompras } from './components/CarritoCompras';
import ProductList  from './components/ProductList';
import './Carrito.css';

function Carrito() {
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);
    const [usuarioNombre, setUsuarioNombre] = useState(null);

    // Recuperar el nombre del usuario del localStorage al cargar el componente
    useEffect(() => {
        const nombreGuardado = localStorage.getItem('usuarioNombre');
        if (nombreGuardado) {
            setUsuarioNombre(nombreGuardado);
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
        </>
    );
}

export default Carrito;

import React from 'react';
import { useState } from 'react'
import '../assets/css/style.css'

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState (0);

    const agregar = () => contador < stock && setContador (contador + 1)
    const restar = () => contador > 0 && setContador (contador - 1)
    return (
        <div className='verMas'>
            <div className='container'>
                <button onClick={restar} disabled={contador<=0} className= "btnContador" > - </button>
                <p clasName="text">{contador}</p>
                <button onClick={agregar} disabled={contador>=stock} className= "btnContador" > + </button>
            </div>
            <div >
            <button clasName='btnAgregar m-4'>Agregar al Carrito</button>
            </div>
            
            
        </div>
    );
}

export default ItemCount;

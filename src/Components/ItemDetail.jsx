import React from 'react';
import ItemCount from './ItemCount';
import '../assets/css/style.css'


const ItemDetail = ({detail}) => {
    return (
      <div className='ver'>
        <div className="card" style={{ width: "400px" }}>
          <img
            src={`../assets/${detail.img}`}
            className="img-fluid rounded h-100 mt-3"
            alt="producto"
          />
          <div className="card-body">
            <h5 className="card-title">{detail.name}</h5>
            <p>{detail.description}</p>
            <p className="card-text">Precio $ {detail.price}</p>
            <p className="card-text">Stock: {detail.stock}</p>
            <ItemCount stock={detail.stock} className="btnAgregar"/>

          </div>
        </div>
      </div>
    );
}

export default ItemDetail;

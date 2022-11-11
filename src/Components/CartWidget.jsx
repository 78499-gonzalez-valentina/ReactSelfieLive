import React from 'react';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    return (
        <div>
            <Link to="/Cart">
                <button className="btn btn-light" >
                    <p>carrito</p>
                    {/* <img src="../assets/img/carrito.png" alt="" /> */}
                </button>
            </Link>
        </div>
    );
}

export default CartWidget;

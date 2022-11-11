import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import '../assets/css/style.css'

const Navbar = () => {
    return (
        
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand mr-4" to="/">
      <img src="../assets/img/ValuSelfieminii.png" alt="marca" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ulNav">
        <li className="nav-item btnNav">
          <Link className="nav-link active" to="/" >Inicio</Link>
        </li>
        <li className="nav-item btnNav">
          <Link className="nav-link active" to="/category/EnEvento">En vivo en tu evento</Link>
        </li>
        <li className="nav-item btnNav">
          <Link className="nav-link active" to="/category/EntregaAnticipada">Con entrega anticipada</Link>
        </li>

      </ul>
      
      <CartWidget />
      
    </div>
  </div>
</nav>

    );
}

export default Navbar;

import './Navbar.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => { 
  const navigate = useNavigate(); // Hook to programmatically navigate

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src="" alt="Logo" />  {/* Placeholder for logo */}
        <p>Littleyaks</p>
      </div>
      <ul className="nav-menu">
        {/* Use onClick with navigate to route to different pages */}
        <li onClick={() => navigate("/")}>HOME</li>
        <li onClick={() => navigate("/backpack")}>BACKPACK</li>
        <li onClick={() => navigate("/fannypack")}>FANNYPACK</li>
        <li onClick={() => navigate("/all")}>ALL</li>
        <li onClick={() => navigate("/sale")}>SALE</li>
      </ul>
      <div className="nav-login-cart">
        <a href="#" aria-label="Search">
          <span className="material-icons">search</span> {/* Search icon */}
        </a>
        <button>LOGIN</button> {/* Login button */}
        <a href="#" aria-label="Cart">
          <span className="material-icons">shopping_cart</span> {/* Cart icon */}
          <div className="nav-cart-count">0</div> {/* Cart count */}
        </a>
      </div>
    </div>
  );
};

export default Navbar;

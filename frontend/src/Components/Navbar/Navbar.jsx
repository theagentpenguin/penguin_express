import React from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/shopping_cart.png'
const Navbar = ()=>{
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt=""></img>
                <h1>Pen<span>guin</span></h1> <h1>Exp<span>ress</span></h1>
            </div>
            <ul className="nav-menu">
                <li>Home<hr/></li>
                <li>Men<hr/></li>
                <li>Women<hr/></li>
                <li>Kids<hr/></li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart} alt=""></img>
                <div className="nav-cart-count">0</div>
            </div>

        </div>
    )
}

export default Navbar
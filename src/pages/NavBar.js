import React from 'react';
import logo1 from '../styles/images/logo1.png';
import { Link }from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
            <a className="navbar-brand" href="/WelcomeUser">
                <img src={ logo1 } height="35px"alt="logo-quot"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/WelcomeUser" className="nav-link">Inicio<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Quotmaker" className="nav-link">¡Cotiza ahora!<span className="sr-only"></span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/LogIn" className="nav-link">Inicia sesión<span className="sr-only"></span></Link>
                    </li>
                </ul>
            </div>
            </div>
            
        </nav>
    )
}
 
export default NavBar;
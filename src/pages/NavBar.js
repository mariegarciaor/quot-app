import React from 'react';
import logo1 from '../styles/images/logo1.png';


const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
            <a className="navbar-brand" href="/WelcomeUser">
                <img src={ logo1 } height="35px"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Inicio<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">¡Cotiza ahora!</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Inicia sesión</a>
                    </li>
                </ul>
            </div>
            </div>
            
        </nav>
    )
}
 
export default NavBar;
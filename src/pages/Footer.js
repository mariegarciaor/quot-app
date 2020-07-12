import React from 'react';
import { Facebook } from 'react-feather';
import { Instagram } from 'react-feather';
import { MessageCircle } from 'react-feather';
import { Twitter } from 'react-feather';

const Footer = () => {

    return (
        <footer className="main-footer">
            <div className="container">
                <div className="social-media">
                    <Facebook />
                    <Instagram />
                    <MessageCircle />
                    <Twitter />
                </div>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link" href="#">¡Cotiza ahora!</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Contáctanos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Acerca de Quot</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
 
export default Footer;
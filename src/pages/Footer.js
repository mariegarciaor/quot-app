import React from 'react';
import { Facebook } from 'react-feather';
import { Instagram } from 'react-feather';
import { MessageCircle } from 'react-feather';
import { Twitter } from 'react-feather';

const Footer = () => {

    return (
        <footer className="main-footer">
            <div className="container-fluid">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" href="/ComingSoon">Contáctanos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/ComingSoon">Facturación</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/ComingSoon">Programa de lealtad</a>
                    </li>
                </ul>
                
                <div className="social-media">
                    <Facebook />
                    <Instagram />
                    <MessageCircle />
                    <Twitter />
                </div>
            </div>
        </footer>
    )
}
 
export default Footer;
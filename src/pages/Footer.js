import React from 'react';
import { Facebook } from 'react-feather';
import { Instagram } from 'react-feather';
import { MessageCircle } from 'react-feather';
import { Twitter } from 'react-feather';

const Footer = () => {

    return (
        <footer>
             <div>
                <Facebook />
                <Instagram />
                <MessageCircle />
                <Twitter />
            </div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            
        </footer>
    )
}
 
export default Footer;
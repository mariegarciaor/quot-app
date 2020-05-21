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
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            
        </footer>
    )
}
 
export default Footer;
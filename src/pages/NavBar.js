import React from 'react';


const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <a className="navbar-brand" href="/WelcomeUser">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgbGRhHn7qbXF02gicUB1GNiHraUqfy_G767gGaC-QLboTJ3MM&usqp=CAU" height="30" alt="" />
            </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </nav>
    )
}
 
export default NavBar;
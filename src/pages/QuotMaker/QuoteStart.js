import React from 'react';
import QuotMaker from './QuotMaker';
import {Link} from "react-router-dom";

const QuoteStart = () => {

    return (
        <div className="container QuotemakerContainer">

            <div className="QuoteStart__Header">
                <h6 className="Header__Step">Bienvenido</h6>
                <h1 className="Header__Title">
                    ¿Qué servicio te gustaría cotizar?  
                </h1>
            </div>

            <div className="card-columns">
                <div className="card">
                    <img src="https://i.pinimg.com/564x/c1/62/fd/c162fd3c80df85a1ad63e8757863da6a.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Tarjetas de Presentación</h5>
                        <p className="card-text">Deja tu huella al hacer networking reflejando tu identidad y talento.</p>
                        <Link to={'/QuotMaker'}><button type="button" class="btn btn-info">Cotizar</button></Link>
                    </div>
                </div>

                <div className="card brochure-img">
                    <img src="https://i.pinimg.com/564x/bc/97/86/bc97868ab27caec12181f2f0cb6c03fa.jpg" className="card-img-top" alt="..." />
                </div>
                
                <div className="card">
                    <img src="https://i.pinimg.com/564x/c5/50/42/c550423d509ac4b730877704697b7544.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Papeleria Corporativa</h5>
                        <p className="card-text">Nada más profesional para impactar que papeleria personalizada ¿Listo para cerrar el trato?</p>
                        <Link to={'/QuotMaker'}><button type="button" class="btn btn-info">Cotizar</button></Link>
                    </div>
                </div>

                <div className="card brochure-img">
                    <img src="https://i.pinimg.com/564x/79/b6/ac/79b6ac8b69b9c15ffb5ac7ca7c7cc402.jpg" className="card-img-top" alt="..." />
                </div>

                <div className="card brochure-img">
                    <img src="https://i.pinimg.com/564x/f3/c2/df/f3c2dfee1ddd7ce63a42668d8006c59a.jpg" className="card-img-top" alt="..." />
                </div>

                <div className="card brochure-img">
                    <img src="https://i.pinimg.com/564x/2a/50/ef/2a50ef4efbe5c6d068e854027eae3a28.jpg" className="card-img-top" alt="..." />
                </div>

                <div className="card">
                    <img src="https://images.creativemarket.com/0.1.0/ps/2177310/910/607/m1/fpnw/wm0/moscovita-event-flyer-7-.jpg?1485282176&s=f30d9de4073732e4403c40e415da0af5" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Brochures</h5>
                        <p className="card-text">¡Atrae aun mas clientes! La cantidad de tu negocio no estar en duda con estos acabados.</p>
                        <Link to={'/QuotMaker'}><button type="button" class="btn btn-info">Cotizar</button></Link>
                    </div>
                </div>

                <div className="card brochure-img">
                    <img src="https://i.pinimg.com/564x/dc/9d/eb/dc9deb5d24a413f524cb8e3ba4ad02e5.jpg" className="card-img-top" alt="..." />
                </div>

                <div className="card">
                    <img src="https://i.pinimg.com/564x/0f/cc/e5/0fcce58280ac2aa43323793d8b0a0500.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Posters</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <Link to={'/QuotMaker'}><button type="button" class="btn btn-info">Cotizar</button></Link>
                    </div>
                </div>
                
                <div className="card">
                    <img src="https://i.pinimg.com/564x/7d/24/57/7d245790858f8ef3bfb4825bd8879ef9.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Tripticos</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <Link to={'/QuotMaker'}><button type="button" class="btn btn-info">Cotizar</button></Link>
                    </div>
                </div>

                <div className="card brochure-img">
                    <img src="https://i.pinimg.com/564x/c9/e1/69/c9e169f1ae59f7ecb83bdd7553f0b377.jpg" className="card-img-top" alt="..." />
                </div>
                
                <div className="card">
                    <img src="https://i.pinimg.com/564x/45/20/50/452050d1e2e4f0f05782b0db0655e441.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Editorial</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <Link to={'/QuotMaker'}><button type="button" class="btn btn-info">Cotizar</button></Link>
                    </div>
                </div>

                <div className="card brochure-img">
                    <img src="https://i.pinimg.com/564x/b5/5d/a9/b55da97f7739e0949adc0743b8e42c45.jpg" className="card-img-top" alt="..." />
                </div>

            </div>
        </div>
    )
}

export default QuoteStart;
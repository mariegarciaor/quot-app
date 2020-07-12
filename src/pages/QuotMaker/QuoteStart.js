import React from 'react';
import {Printer} from 'react-feather';

const QuoteStart = () => {

    return (
        <div className="container QuoteStart quot-maker-survey">
            <div className="QuoteStart__Header">
                <h6 className="Header__Step"> Paso 1 </h6>
                <h1 className="Header__Title">
                    ¿Qué servicio te gustaría cotizar?
                </h1>
            </div>
            
            <div className="card my-5 QuoteStart__Option">
                <div className="Option__Image">
                    <img src="https://cdn.dribbble.com/users/1408866/screenshots/7903851/media/ee68a4f057437472689c9cd1bc1a64a6.jpg" className="card-img-top" alt="..."/>
                </div>
                <div className="card-body Option__Body">
                    <h4 className="card-title">Tarjeta de presentacion</h4>
                    <p className="card-text">Deja tu huella al hacer networking reflejando tu identidad y talento.</p>
                    <a href="/PrintSystem" className="btn Option__Btn">
                        Elegir
                    </a>
                </div>
            </div>

            <div className="card  my-5 QuoteStart__Option">
                <div className="Option__Image">
                    <img src="https://cdn.dribbble.com/users/1111995/screenshots/4165918/dribbble.png" className="card-img-top" alt="..."/>
                </div>
                <div className="card-body Option__Body">
                    <h4 className="card-title">Volantes y folletos</h4>
                    <p className="card-text">¡Atrae aun mas clientes! La cantidad de tu negocio no estar en duda con estos acabados.</p>
                    <a href="/PrintSystem" className="btn Option__Btn">Elegir</a>
                </div>
            </div>

            <div className="card  my-5 QuoteStart__Option">
                <div className="Option__Image">
                    <img src="https://www.colorhexa.com/2cc2d1.png" className="card-img-top" alt="..."/>
                </div>

                <div className="card-body Option__Body">
                    <h4 className="card-title">Hojas membretadas</h4>
                    <p className="card-text">Nada más profesional para impactar que papeleria personalizada ¿Listo para cerrar el trato?</p>
                    <a href="/PrintSystem" className="btn Option__Btn">Elegir</a>
                </div>
            </div>
        </div>
        )
    }

export default QuoteStart;
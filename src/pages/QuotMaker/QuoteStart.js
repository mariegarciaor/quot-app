import React from 'react';
import {Printer} from 'react-feather';

const QuoteStart = () => {

    return (
        <div class="container">
            <div>
                <h3> Paso 1 </h3>
                <h1> Escoge el archivo a imprimir </h1>
            </div>
            
            <div class="card">
                <div>
                    <img src="https://www.colorhexa.com/2cc2d1.png" class="card-img-top" alt="..."/>
                    <Printer />
                </div>
                <div class="card-body">
                    <h4 class="card-title">Tarjeta de presentacion</h4>
                    <p class="card-text">Deja tu huella al hacer networking reflejando tu identidad y talento.</p>
                    <a href="#" class="btn btn-primary">Cotizar</a>
                </div>
            </div>

            <div class="card">
                <img src="https://colorate.azurewebsites.net/SwatchColor/54A6DE" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h4 class="card-title">Volantes y folletos</h4>
                    <p class="card-text">¡Atrae aun mas clientes! La cantidad de tu negocio no estar en duda con estos acabados.</p>
                    <a href="#" class="btn btn-primary">Cotizar</a>
                </div>
            </div>

            <div class="card">
                <img src="https://www.beautycolorcode.com/84e1ff.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h4 class="card-title">Hojas membretadas</h4>
                    <p class="card-text">Nada más profesional para impactar que papeleria personalizada ¿Listo para cerrar el trato?</p>
                    <a href="" class="btn btn-primary">Cotizar</a>
                </div>
            </div>
        </div>
        )
    }

export default QuoteStart;
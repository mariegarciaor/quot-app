import React from 'react';
import { Link } from 'react-router-dom';


const QuoteStart = () => {

    return (
        <div>
           <h4> Paso 1 </h4>
           <h1> Escoge el archivo a imprimir </h1>
           <div>
               <Link rel="icon" type="" href="">icono prueba </Link>
               <h2> Tarjeta de presentacion </h2>
               <p> Deja tu huella al hacer networking reflejando tu identidad y talento</p>
               <button>Elegir</button>
           </div>
           <div>
               <h2>Volantes y folletos</h2>
               <p>¡Atrae aun mas clientes! La cantidad de tu negocio no estar en duda con estos acabados</p>
               <button>Elegir</button>
           </div>
           <div>
               <h2>Hojas membretadas</h2>
               <p>Nada más profesional para impactar que papeleria personalizada ¿Listo para cerrar el trato? </p>
               <button>Elegir</button>
           </div>
        </div>
    )
    }

export default QuoteStart;
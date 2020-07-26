import React from "react";
import {Route, Link} from "react-router-dom";

import QuoteStart from './QuoteStart'
import PrintSystem from './PrintSystem'
import PrintSides from './PrintSides'
import PrintQuantity from './PrintQuantity'
import PrintFinish from './PrintFinish'
import PrintPaper from './PrintPaper'
import PrintDesign from './PrintDesign'


const QuotMaker = (props) => {
    const match = props.match 
    const nextStep = !match.params.step? '1':'2'
    const previousStep = !match.params.step? '2':'1'

    console.log('props: ', props)
    return (
        <div className="container quotmaker-division QuotemakerContainer">
            <div className="QuoteStart__Header">
                <h6 className="Header__Step"> Paso 1 </h6>
                <h1 className="Header__Title">
                    ¿Qué producto te gustaría cotizar?
                </h1>
            </div>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>

            <Route exact path="/QuotMaker" component ={QuoteStart}/> 
            <Route path={`/QuotMaker/1`} component ={PrintSystem}/> 
            <Route path={`/QuotMaker/2`} component ={PrintSides}/> 
            <Route path={`/QuotMaker/3`} component ={PrintQuantity}/> 
            <Route path={`/QuotMaker/4`} component ={PrintQuantity}/> 
            <Route path={`/QuotMaker/5`} component ={PrintFinish}/> 
            <Route path={`/QuotMaker/6`} component ={PrintPaper}/> 
            <Route path={`/QuotMaker/7`} component ={PrintDesign}/> 
            
            <div className="quotmaker-nextButton">
                <Link to={`/QuotMaker/${previousStep}`}><button type="button" class="btn btn-info ">← Anterior</button></Link>
                <Link to={`/QuotMaker/${nextStep}`}><button type="button" class="btn btn-info">Siguiente →</button></Link>
            </div>
        </div>
    )
}

export default QuotMaker;

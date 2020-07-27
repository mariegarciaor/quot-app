import React from "react";
import { Wizard, Steps, Step } from 'react-albus';
import {Link} from "react-router-dom";


import PrintSystem from './PrintSystem'
import PrintSides from './PrintSides'
import PrintQuantity from './PrintQuantity'
import PrintFinish from './PrintFinish'
import PrintPaper from './PrintPaper'
import PrintDesign from './PrintDesign'

//QuoteStart -> Quotmaker

//QUOTEMAKER:
//PrintSystem 1
//PrintSides 2
//PrintQuantity 3
//PrintFinish 4
//PrintPaper 5
//PrintDesign 6



const QuotMaker = (props) => {
    const match = props.match 

    console.log('props: ', props)
    return (
      <div className="container-fluid quotmaker">
          <Wizard>
            <Steps>
              <Step
                id="PrintSystem"
                render={({ next }) => (
                  <div className="container quotmaker-container">
                    <PrintSystem />
                    <button class="btn button-1 step-button" onClick={next}>Siguiente</button>
                  </div>
                )}
              />
              <Step
                id="PrintSides"
                render={({ next, previous }) => (
                  <div className="container quotmaker-container">
                    <PrintSides />
                    <div>
                      <button class="btn button-4 previous step-button" onClick={previous}>← Anterior</button>
                      <button class="btn button-1 step-button" onClick={next}>Siguiente →</button>
                    </div>
                  </div>
                )}
              />
              <Step
                id="PrintQuantity"
                render={({ next, previous }) => (
                  <div className="container quotmaker-container">
                    <PrintQuantity />
                    <div>
                      <button class="btn button-4 previous step-button" onClick={previous}>← Anterior</button>
                      <button class="btn button-1 step-button" onClick={next}>Siguiente →</button>
                    </div>
                  </div>
                )}
              />
              <Step
                id="PrintFinish"
                render={({ next, previous }) => (
                  <div className="container quotmaker-container">
                    <PrintFinish />
                    <div>
                      <button class="btn button-4 previous step-button" onClick={previous}>← Anterior</button>
                      <button class="btn button-1 step-button" onClick={next}>Siguiente →</button>
                    </div>
                  </div>
                )}
              />
              <Step
                id="PrintPaper"
                render={({ next, previous }) => (
                  <div className="container quotmaker-container">
                    <PrintPaper />
                    <div>
                      <button class="btn button-4 previous step-button" onClick={previous}>← Anterior</button>
                      <button class="btn button-1 step-button" onClick={next}>Siguiente →</button>
                    </div>
                  </div>
                )}
              />
              <Step
                id="PrintDesign"
                render={({ previous }) => (
                  <div className="container quotmaker-container">
                    <PrintDesign />
                    <div>
                      <button class="btn button-4 previous step-button"  onClick={previous}>← Anterior</button>
                      <Link to={"/ReviewOrder"}><button type="button" class="btn step-button button-1">Finalizar</button></Link>
                    </div>
                  </div>
                )}
              />
            </Steps>
          </Wizard>           
      </div>
    )
}

export default QuotMaker;

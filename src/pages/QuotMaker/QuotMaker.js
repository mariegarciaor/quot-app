import React from "react";
import { Wizard, Steps, Step } from 'react-albus';


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
      <div className="container">
          <Wizard>
            <Steps>
              <Step
                id="PrintSystem"
                render={({ next }) => (
                  <div className="container">
                    <PrintSystem />
                    <button class="btn btn-info" onClick={next}>Siguiente</button>
                  </div>
                )}
              />
              <Step
                id="PrintSides"
                render={({ next, previous }) => (
                  <div className="container">
                    <PrintSides />

                    <button class="btn btn-info" onClick={previous}>← Anterior</button>
                    <button class="btn btn-info" onClick={next}>Siguiente →</button>
                  </div>
                )}
              />
              <Step
                id="PrintQuantity"
                render={({ next, previous }) => (
                  <div className="container">
                    <PrintQuantity />

                    <button class="btn btn-info" onClick={previous}>← Anterior</button>
                    <button class="btn btn-info" onClick={next}>Siguiente →</button>
                  </div>
                )}
              />
              <Step
                id="PrintFinish"
                render={({ next, previous }) => (
                  <div className="container">
                    <PrintFinish />

                    <button class="btn btn-info" onClick={previous}>← Anterior</button>
                    <button class="btn btn-info" onClick={next}>Siguiente →</button>
                  </div>
                )}
              />
              <Step
                id="PrintPaper"
                render={({ next, previous }) => (
                  <div className="container">
                    <PrintPaper />

                    <button class="btn btn-info" onClick={previous}>← Anterior</button>
                    <button class="btn btn-info" onClick={next}>Siguiente →</button>
                  </div>
                )}
              />
              <Step
                id="PrintDesign"
                render={({ previous }) => (
                  <div className="container">
                    <PrintDesign />

                    <button class="btn btn-info"  onClick={previous}>Previous</button>
                  </div>
                )}
              />
            </Steps>
          </Wizard>           
      </div>
    )
}

export default QuotMaker;

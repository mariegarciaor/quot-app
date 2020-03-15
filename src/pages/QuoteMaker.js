import React, { useState, useEffect } from 'react';

const [selected, setSelected] =useState([])
const [totalCost, setCost] =useState(0)

const useEffect =0 () => {
    const costo = 0
    for(const item of selected) {
        costo += item.cost
    };
    setCost([costo, selected])

    function handleSelected(option) {
        setSelected([...selected, option])
    };

}

const QuoteMaker = () => {

    return (
        <div>
            <div id='section-header'>
                <h4>PASO</h4>
                <h1>Título de pregunta</h1>
            </div>

            <div id='card-option'>
                <div id='card-container'>
                    <div id='card-container-header'>
                        <i className='' alt='icono'></i>
                    </div>

                    <div id='card-content'>
                        <h2>Option name</h2>
                        <p>Option description</p>
                        <button>Seleccionar</button>
                    </div>
                </div>
            </div>

            <div id='card-option'>
                <div id='card-container'>
                    <div id='card-container-header'>
                        <i></i>
                    </div>

                    <div id='card-content'>
                        <h2>Option name</h2>
                        <p>Option description</p>
                        <button>Seleccionar</button>
                    </div>
                </div>
            </div>

            <div id='card-option'>
                <div id='card-container'>
                    <div id='card-container-header'>
                        <i></i>
                    </div>

                    <div id='card-content'>
                        <h2>Option name</h2>
                        <p>Option description</p>
                        <button>Seleccionar</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
    }


export default QuoteMaker;
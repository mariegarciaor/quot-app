import React, { useState } from 'react';


//Importar NavBar que se hará como un componente aparte

const QuoteMaker = () => {
    const [selected, setSelected] =useState([])
    const [totalCost, setCost] = useState(0)

    const useEffect = () => {
        const costo = 0
        for(const item of selected) {
            costo += item.cost
        };
        setCost([costo, selected])

<<<<<<< Updated upstream
const QuoteMaker = () => {
=======
        function handleSelected(option) {
            setSelected([...selected, option])
        };

    }

>>>>>>> Stashed changes

    return (
        <div>
            <div id='section-header'>
                <h4>PASO</h4>
                <h1>Título de pregunta</h1>
            </div>

            <div id='card-option'>
                <div id='card-container'>
                    <div id='card-container-header'>
                        <i className='' src={} alt='icono'></i>
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
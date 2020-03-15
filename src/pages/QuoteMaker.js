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

//Importar NavBar que se hará como un componente aparte

const QuoteMaker = () => {

    return (
        <div>
            <p>aquí van los componentes de QuoteMaker</p>
        </div>
        
    )
}

//Importar timeline (componente aparte) que se vaya actualizando de acuerdo al componente que esté en ese momento.


export default QuoteMaker;
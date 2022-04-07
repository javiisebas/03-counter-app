// Para generar el código de forma automática:
// -----> rafcp <-----
import React, {useState} from 'react';
import PropTypes from 'prop-types'

// Los hooks son funciones y cuando importo, todo lo que empieza por use son hooks

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value);

    // Si solo tengo un parámetro de entrada puedo obviarlo en el onClick y simplifico la llamada
    const handleAdd = () => setCounter(counter + 1)
    const handleReset = () => setCounter(value)
    const handleSubstract = () => setCounter(counter - 1)

    return (
        <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubstract}>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp

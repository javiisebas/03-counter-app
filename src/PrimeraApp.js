// Dos tipos de componentes, basados en clases y en funciones
// Antes los basados en funciones no podían manejar estados (con Hooks sí)
import React from 'react';
import PropTypes from 'prop-types'

// Los componentes devulven HTML
const PrimeraApp = ({nombre, apellido}) => {
    return (
        <>
            <h1>{nombre}</h1>
            <h1>{apellido}</h1>
        </>
    );
}


// Type de mis propiedades:
PrimeraApp.propTypes = {
    nombre: PropTypes.string.isRequired
}

// Propiedades por defectos:
PrimeraApp.defaultProps= {
    apellido: 'Sebastián'
}


export default PrimeraApp;
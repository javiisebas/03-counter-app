const personajes = ['Javi', 'Carlos', 'Manu']

// Desestructuramos un arreglo
const [, , persona1] = personajes

export const returnArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = returnArreglo()

const createState = (valor) => {
    return [valor, () => {console.log('HOLA :)')}];
}

const [nombre, saludar] = createState('Javi')
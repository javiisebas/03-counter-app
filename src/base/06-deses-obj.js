const persona = {
    nombre: 'Javi',
    apellido: 'Sebastián',
    edad: 23,
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);

// Desestructuración y asignación desestructurante
const {
    nombre,
    apellido,
    edad
} = persona
console.log(nombre, apellido, edad);

// Si lo quiero renombrar
const {
    nombre: fullName
} = persona
console.log(fullName);

const retornaPersona = (usuario) => {
    const {
        nombre,
        apellido,
        edad
    } = usuario
    console.log(nombre, apellido, edad);
}
retornaPersona(persona)

// Otra forma de hacerlo:
const retornaPersona2 = ({
    nombre,
    apellido,
    edad
}) => {

    console.log(nombre, apellido, edad);
}
retornaPersona2(persona)


// Entrada por defecto si no existe un valor
const retornaPersona3 = ({
    nombre,
    calle = 'Mozart'
}) => {
    console.log(nombre, calle);
}

retornaPersona3(persona)
persona.calle = 'Madrid'
retornaPersona3(persona)


// Desestructuración desde funciones:

const retornaPersona4 = ({
    nombre,
    apellido
}) => {
    return {
        username: `${nombre} ${apellido}`
    }
}

const {username} = retornaPersona4(persona);
console.log(username);
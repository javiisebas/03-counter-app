function saludar(nombre) {
    return `Hola, ${nombre}`
}

// Es mucho más recomendable hacerlo así:
const saludar2 = function (nombre) {
    return `Hola, ${nombre}`
}

// Ahora podemos transformarlo a una función flecha
const saludar3 = (nombre) => {
    return `Hola, ${nombre}`
}

// También podemos hacerlo todavía más ligero
const saludar4 = (nombre) => `Hola, ${nombre}`

const saludar5 = () => `Hola Mundo`


export const getUser = () => {
    return {
        id: 12345,
        usermame: 'javiisebas',
    }
}

// Otro método para devolver de forma implícita:
const getUser2 = () => ({
    id: 12345,
    usermame: 'javiisebas',
})

// Función fleja que retorna objeto implícito
const getUsuarioActivo = (nombre) => ({
    id: 12345,
    usermame: nombre,
})
const usuarioActivo = getUsuarioActivo('javiisebas')
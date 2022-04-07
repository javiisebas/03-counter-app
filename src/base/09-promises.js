import {
    getHeroeById
} from './config/09-functions'


const promesa = new Promise((resolve, reject) => {
    // Función propia de JavaScript
    setTimeout(() => {
        const heroe = getHeroeById(2)
        reject(heroe)
    }, 100)
});

promesa.then((heroe) => {
    console.log('Heroe', heroe);
}).catch((err) => {
    console.warn(err)
})

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id)
            if (heroe) {
                resolve(heroe)
            }
            reject('No existe heroe con ese Id')
        }, 100)
    });
}

getHeroeByIdAsync(5)
    .then(console.log)
    .catch(console.warn)
import heroes, {owners} from "../data/heroes";
// Tenemos la exportación por defecto y la importación individual

// Aprendemos el uso de FIND y FILTER en arreglos

export const getHeroeById = (id) => {
    return heroes.find((heroe) =>
        heroe.id === id)
}


export const getHeroeByOwner = (owner) => {
    return heroes.filter((heroe) =>
        heroe.owner === owner)
}

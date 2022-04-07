import { getHeroeById } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Prueba 8 funciones en heroes', () => {
    test('Debe de retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id)

        const heroeData = heroes.find(heroe => 
            heroe.id === id
        )

        expect(heroe).toEqual(heroeData)
    })
    
});

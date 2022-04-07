import '@testing-library/jest-dom'
import {
    returnArreglo
} from '../../base/07-deses-arr'

describe('Prueba 07 desestrucuturación arreglos', () => {
    test('prueba en el método returnArreglo', () => {

        const arr = returnArreglo()
        const [letras, numeros] = returnArreglo()

        expect(arr).toEqual(['ABC', 123])

        expect(letras).toBe('ABC')
        expect(numeros).toBe(123)
    })

});
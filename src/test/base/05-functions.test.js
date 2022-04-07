import '@testing-library/jest-dom'
import {
    getUser
} from '../../base/05-functions'

describe('Prueba 05 functions', () => {
    test('prueba en el método getUser', () => {
        const userTest = {
            id: 12345,
            usermame: 'javiisebas',
        }

        const user = getUser()

        expect(user).toEqual(userTest)
    })

});
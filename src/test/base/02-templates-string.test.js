import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-templates-string";

describe('Prueba 02 template string', () => {
    test('prueba en el método getSaludo', () => {
      const nombre = 'Javi'
      const saludo = getSaludo(nombre)
      expect(saludo).toBe('Hola ' + nombre)
    })
    
});

//Declaracion de funciones - creacion

//convencional, comun
function name() {
    return 'hola'
}

//funcion flecha version 1
let func = () => 'hola'

//funcion flecha version 2
let func2 = () => {
    return 'hola'
}

//funcion con parametros
function suma(a, b) {
    return a + b
}

//llamado de funciones - ejecucion
func2()

//guardar en variable resultado de funcion
let resultado = suma(1, 2)
resultado + 100

//callback
//ejecuta una funcion dentro de otra para manejarla en un contexto superior
function test(a, b, callback) {
    return callback(a, b)
}

function resta(a, b) {
    return a - b
}

test(1, 2, suma)
test(6, 2, resta)

console.log('callback suma:', test(1, 2, suma))
console.log('callback resta:', test(6, 2, resta))
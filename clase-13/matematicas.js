function matematicas(a, b, operacion) {
    if(operacion === 'suma'){
        return a + b
    } else if (operacion === 'resta'){
        return a - b 
    } else if (operacion === 'multiplicacion'){
        return a * b
    } else if (operacion === 'division'){
        return a / b
    } else return 'ingrese operacion valida'
}

var division = matematicas(20, 5, 'division') // 4
var suma = matematicas(1, 1, 'suma') // 2

console.log("retornos:", division * suma)
console.log("normal:", 4 * 2)

function saludar(nombre){
    console.log('hola', nombre)
}
function saludarApellido(nombre, apellido, serie) {
    console.log("Hola " + nombre + " " + apellido + ' tu serie favorita es ' + serie);
    }

saludarApellido('julian', 'alvarez', 'from')

function sumar() {
   return 2 + 2
}

console.log( (sumar()) + 4 )

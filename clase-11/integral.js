//comentar = ctrl + k - ctrl + c
//descomentar = ctrl + k - ctrl + u

// let valorA = 'javier'
// let valorB = 'javierl'

// if(valorA === valorB){
//     console.log('Son iguales')
// } else {
//     console.log('No son iguales')
// }

// if(valorA !== valorB){
//     console.log('No son iguales')
// } else {
//     console.log('Son iguales')
// }

// if(!(valorA === valorB)){
//     console.log('No son iguales')
// } else {
//     console.log('Son iguales')
// }

// let usuario = "javier"
// let password = 12346

// if((usuario === 'javier') && (password === 1234)){
//     console.log('usuario logueado')
// } else {
//     console.log('Datos invalidos')
// }

var billetera = 12000
var precio = 2000

if(((billetera - precio) < 0) ){
    console.log('Fondo insuficiente para realizar compra')
} else if ((billetera - precio) === 0){
    console.log('gastaste todo el saldo')
} else {
    var saldo = billetera - precio
    console.log('Su saldo restante es: ', saldo)
}
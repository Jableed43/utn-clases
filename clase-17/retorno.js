//El retorno es el resultado de una funcion
//El retorno corta la ejecucion
//Podemos usar el resultado de la funcion para otra cosa

function suma(a, b) {
    return a + b
}

console.log( (suma(2, 6)) + 2 )

//no siempre el retorno va a ser un valor numerico o un msje
// puede ser un booleano

function esPar(num) {
    if(num % 2 === 0){
        return true
    } else {
        return false
    }
}

function ejemplo(num) {
    if(num > 20 && esPar(num)){
        console.log('el numero es mayor a 20 y es par')
    } else {
        console.log('el numero o no es mayor a 20 o no es par')
    }
}

ejemplo(41, esPar)
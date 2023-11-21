/* 
1. Programa para Calcular Media Aritmética:
   - Implementa una función que pida al usuario que ingrese 4 números por parámetro y calcule la media aritmética de esos números.
   Media aritmetica es la suma de valores y division por la cantidad de valores
*/

function calcularMedia(a, b, c, d) {
    let suma = a + b + c + d
    return suma / 4
}

console.log(calcularMedia(2, 5, 7, 6))


/* 2. Generar Listado de Números Primos:
   - Crea una función que pida al usuario un número límite y utilice un bucle for para generar un listado de números primos hasta el valor ingresado. */

function esPrimo(numero) {
    if(numero < 2){
        return false
    }
    for( let i = 2; i < numero; i ++ ){
        if(numero % i === 0){
            return false
        }
    }
    return true
}

function listar(limite) {
    let primos = []
    for (let index = 2; index < limite; index++) {
        if(esPrimo(index)){
            primos.push(index)
        }
        
    }
    return primos
}

console.log(listar(100))

/* 
3. Encontrar Divisores de un Número:
   - Implementa una función que tome un número ingresado por el usuario y, mediante un bucle for, encuentre todos sus divisores y los muestre en una lista.
*/

function encontrarDivisores(numero) {
    let divisores = []
    for(let i = 1; i <= numero; i++){
        if(numero % i === 0){
            divisores.push(i)
        }
    }
    console.log(divisores)
    return divisores
}

encontrarDivisores(256)
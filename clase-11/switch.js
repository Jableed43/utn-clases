// var numero = 50
// switch (true) {
//     case numero < 10 :
//         console.log('Es menor a 10')
//         break;
//     case numero > 10:
//         console.log('Es mayor a 10')
//         break;
//     case numero == 10:
//         console.log('Es 10')
//         break;
//     default:
//         console.log(numero)
//         break;
// }

// if(lluvia){
//     console.log('Llueve')
// } else {
//     console.log('No llueve')
// }

var anioNacimiento = 1960

switch (true) {
    case ((anioNacimiento >= 1920) && (anioNacimiento <= 1940)) :
        console.log('Generacion Silenciosa')
        break;
    case ((anioNacimiento >= 1946) && (anioNacimiento <= 1964)):
        console.log('Baby boomer')
        break;
    case ((anioNacimiento >= 1965) && (anioNacimiento <= 1979)):
        console.log('Generacion X')
        break;
    case ((anioNacimiento >= 1980) && (anioNacimiento <= 2000)):
        console.log('Generacion Y')
        break;
    case ((anioNacimiento >= 2001) && (anioNacimiento <= 2010)):
        console.log('Generacion Z')
        break;
    default:
        console.log('No existe')
        break;
}
// function llueve(cielo) {
//     if(cielo === 'gris'){
//         return 'tal vez llueva'
//     } else {
//         return 'tal vez no llueva'
//     }
// }

// console.log(llueve('gris'))

function calor(temperatura) {
    if(temperatura < 10) {
        return 'Esta fresco, abrigate'
    } else if(temperatura < 20) {
        return 'Esta templado'
    } else if (temperatura > 20 && temperatura < 30){
        return 'Hace calorcito'
    } else if (temperatura > 30 && temperatura < 40){
         return 'Hace mucho calor, prende el ventilador, y toma agua fresca'}
    else return 'Prende el aire'
}

console.log(calor(32))
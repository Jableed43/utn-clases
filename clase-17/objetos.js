// es una estructura de datos que posee clave: valor. Cada dato posee una clave
let persona = {
    nombre: 'javi',
    edad: 31,
    pelo: 'negro',
    saludar() {return 'hola, estoy dentro del objeto'},
}
//usamos dot notation para acceder a los datos
console.log(`El color de pelo de ${persona.nombre}, es ${persona.pelo} y tiene ${persona.edad} años`)
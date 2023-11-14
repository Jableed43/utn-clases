let heading = document.querySelector('#heading2')
let perro = document.getElementById('perro')
//node list
let autos = document.getElementsByClassName('auto')
perro.style.color = 'red'

for (var i = 0; i < autos.length; i++) {
    autos[i].style.color = 'blue';
 }

//NodeList a un Array
autos = Array.from(autos);

// autos.map(auto => {
//     auto.style.color = 'yellow';
// });

function colorAuto() {
    autos.forEach(auto => {
        auto.style.color = 'violet';
    });
}

let perro = document.querySelector('#perro')
console.log(perro)
perro.style.color = 'red'
perro.style.fontSize = '80px'
perro.innerText = 'gato'


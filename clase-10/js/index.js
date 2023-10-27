//global
const casa = 'buenos aires'
console.log('global:', casa)

function hogar() {
//local
   const casa = 'santa fe'
    console.log('local:',casa)
}
hogar()
console.log("final:", casa)
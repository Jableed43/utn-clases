let fosforos = '222'
let listaSuper =["harina", "cafe", fosforos, true, 10 ]

//agrego elemento al final
listaSuper.push("aceite")
//borro elemento del final
listaSuper.pop()

console.log(listaSuper)

listaSuper.splice(1,2)

console.log(listaSuper)

console.log(listaSuper.unshift('papitas'))
console.log(listaSuper.shift())
console.log(listaSuper)
console.log(listaSuper.indexOf("harina"))
console.log(listaSuper[0])
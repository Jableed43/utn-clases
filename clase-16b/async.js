function accionAResolverEnSegundos(segundos) {
    return new Promise((resolve) => {
        setTimeout( function(){
            resolve(`La operacion se ha completado despues de ${segundos} segundos`)
        }, segundos * 1000  )
    })
}

async function ejemplo(){
    try {
        const resultado = await accionAResolverEnSegundos(3)
        console.log(resultado)
    } catch (error) {
        console.error('error:', error)
    }
}

ejemplo()
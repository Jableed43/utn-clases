 /*Escribe un programa en JavaScript que simule transacciones bancarias. El programa utiliza un array de objetos que representa cuentas de usuarios, cada una con un saldo y una clave asociada. El programa permite la impersonación (login) de usuarios mediante la verificación de claves. La función “simulacionTransaccion” toma como parámetros el nombre de usuario, la clave correspondiente y el monto a extraer. Antes de realizar la transacción, verifica la existencia del usuario, la validez de la clave y si hay saldo suficiente en la cuenta. En caso de ser exitosa, actualiza el saldo y muestra un mensaje indicando el nuevo saldo; de lo contrario, informa la razón de la transacción fallida. */


 var cuentasUsuarios = [
    {usuario: 'pepito' , saldo: 10000, clave: '123'},
    {usuario: 'juancito', saldo: 50000, clave: '223'},
    {usuario: 'laurita', saldo: 150000, clave: '122'}
 ]


 function simulacionTransaccion(usuario, clave, montoAExtraer) {
    //buscar al usuario
        var cuentaUsuario = cuentasUsuarios.find(cuenta => cuenta.usuario === usuario)
    
    //chequea si lo encontró o no
        if(!cuentaUsuario){
            console.log('Usuario no encontrado')
            return
        }
    //chequea si la clave es valida
        if(clave !== cuentaUsuario.clave){
            console.log('Clave incorrecta')
            return
        }

        //restar al saldo el monto a extraer
        if(montoAExtraer > cuentaUsuario.saldo){
           return 'Transaccion invalida, saldo insuficiente'
        } else {
            cuentaUsuario.saldo -= montoAExtraer
            return 'Transaccion exitosa, el saldo del usuario ' + cuentaUsuario.usuario + ' es : ' + cuentaUsuario.saldo
        }
 }

console.log(simulacionTransaccion('pepito', '123', 2000))
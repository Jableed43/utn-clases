/* 
1. Programa para Calcular Media Aritmética:
   - Implementa una función que pida al usuario que ingrese 4 números por parámetro y calcule la media aritmética de esos números.
   Media aritmetica es la suma de valores y division por la cantidad de valores
*/

function calcularMedia(a, b, c, d) {
  let suma = a + b + c + d;
  return suma / 4;
}

console.log(calcularMedia(2, 5, 7, 6));

/* 2. Generar Listado de Números Primos:
   - Crea una función que pida al usuario un número límite y utilice un bucle for para generar un listado de números primos hasta el valor ingresado. */

function esPrimo(numero) {
  if (numero < 2) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

function listar(limite) {
  let primos = [];
  for (let index = 2; index < limite; index++) {
    if (esPrimo(index)) {
      primos.push(index);
    }
  }
  return primos;
}

console.log(listar(100));

/* 
3. Encontrar Divisores de un Número:
   - Implementa una función que tome un número ingresado por el usuario y, mediante un bucle for, encuentre todos sus divisores y los muestre en una lista.
*/

function encontrarDivisores(numero) {
  let divisores = [];
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisores.push(i);
    }
  }
  console.log(divisores);
  return divisores;
}

encontrarDivisores(256);

/* 4. Calcular Factorial de un Número:
   - Crea una función para calcular el factorial de un número dado. */
// 5 * 4 * 3 * 2 * 1
// una funcion, darle parametro
// resultado
// bucle - for
// if

function factorial(numero) {
  //validacion sirve para atajar situaciones que rompen el codigo
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    let factorial = 1;
    // indice ; condicion; aumento
    for (let i = 2; i <= numero; i++) {
      //factorial acumula los resultados
      factorial = factorial * i;
    }
    console.log("factorial: ", factorial);
    return factorial;
  }
}

factorial(5);

/* 5. Calcular Área de un Triángulo:
- Crea una función para calcular el área de un triángulo dado su base y altura. */

// funcion, parametros: base y altura
// como calcular el area?  (base x altura) / 2

function areaTriangulo(base, altura) {
  if (base < 1 || altura < 1) {
    return;
  } else {
    let baseAltura = base * altura;
    let resultado = baseAltura / 2;
    console.log("area triangulo: ", resultado);
    return resultado;
  }
}

areaTriangulo(10, 42);

/* 
6. Encontrar el Número Mayor entre Tres Números o Determinar si Son Iguales:
   - Implementa una función que solicite al usuario tres números y, mediante un bucle for y un condicional, determine y retorne el número mayor entre ellos o muestre "Son iguales" si los tres números son iguales.
*/

// funcion, 3 parametros, for, condicional

function numeroMayor(num1, num2, num3) {
  //primero verificamos que no sean iguales
  if (num1 === num2 && num2 === num3) {
    console.log("Son iguales");
    return "Son iguales";
  }
  //guardar el primero como mayor, lo tomamos como referencia para comparar
  // variable auxiliar, guardar datos para operar
  let numMayor = num1;
  //este if me devuelve el numero mayor entre num1 y num2
  if (num2 > numMayor) {
    //guardo en numMayor el mayor entre ambos numeros
    numMayor = num2;
  }
  //devuelve el numero mayor entre num3 y el numero mayor del if anterior
  if (num3 > numMayor) {
    numMayor = num3;
  }
  console.log("numero mayor: ", numMayor);
  return numMayor;
}
numeroMayor(10, 1, 2);
numeroMayor(1, 19, 2);
numeroMayor(2, 1, 20);
numeroMayor(2, 2, 2);

/* 
7. Calificar una Nota:
   - Crea una función que pida al usuario una nota (número) y, mediante un condicional, muestre la calificación correspondiente según los rangos establecidos. 
    Si la nota es menor a 3: muy deficiente
    si es menor a 5: insuficiente, 
    si es menor a 6: suficiente,
    Si es menor a 7: bien
    si es menor a 9: notable
    si es menor o igual a 10: sobresaliente
    sino: nota fuera de rango
*/

// funcion, parametro, condicional

function calificarNota(nota) {
  if (nota < 3) {
    return "Muy deficiente";
  } else if (nota < 5) {
    return "Insuficiente";
  } else if (nota < 6) {
    return "Suficiente";
  } else if (nota < 7) {
    return "Bien";
  } else if (nota < 9) {
    return "Notable";
  } else if (nota <= 10) {
    return "Sobresaliente";
  } else {
    return "Nota fuera de rango";
  }
}

console.log("calificar: ", calificar(10));

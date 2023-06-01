/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:

       // Obtener la primera letra del nombre en mayúscula
  var primeraLetraMayuscula = nombre.charAt(0).toUpperCase();

  // Obtener el resto del nombre sin la primera letra
  var restoNombre = nombre.slice(1);

  // Combinar la primera letra mayúscula con el resto del nombre
  var nombreMayuscula = primeraLetraMayuscula + restoNombre;

  // Devolver el nombre con la primera letra en mayúscula
  return nombreMayuscula;
   
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   return cb()
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   
      var resultado= num1+num2;
      return cb(resultado)
   
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
var suma=0
   for (var i=0;i<arrayOfNumbers.length;i++){
      suma += arrayOfNumbers[i]
   }
   return cb(suma)
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   
   for (var i=0;i<array.length;i++){
     cb(array[i]);
   }
   
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   
   var nuevoArray=[];
   for (var i=0;i< array.length;i++){
      var resultado =cb(array[i]);
      nuevoArray.push(resultado);
   }
   return (nuevoArray)
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var newArray = [];

  for (var i = 0; i < arrayOfStrings.length; i++) {
    var elemento = arrayOfStrings[i];

    if (typeof elemento === 'string' && elemento.charAt(0).toLowerCase() === 'a') {
      newArray.push(elemento);
    }
  }

  return newArray;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};

// Ejercicio 1
'use strict';


/*
 * Completa la función 'mayorMenor' a continuación.
 *
 * La función debería retornar un ARREGLO DE ENTEROS.
 * La función acepta un ARREGLO DE ENTEROS como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de esta función.
 */

function mayorMenor(numeros) {
    // tu código aquí:

    var max= Math.max(...numeros);
  var min=Math.min(...numeros)
  var array=[max,min]
  console.log(array)
}




// Ejercicio 2
'use strict'

/*
 * Completa la función 'palabraMasLarga' a continuación.
 *
 * La función debe retornar un STRING.
 * La función recibe un ARRAY DE STRINGS 'frases' como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function palabraMasLarga(frases) {
    //Tu código aquí
    var palabra ='';
    for(let i=0;i<frases.length;i++){
      var separar=frases[i].split(' ')
      //console.log([separar])
      for(let j=0;j<separar.length;j++){
        let valor=separar[j]
      if(valor.length>palabra.length){
        palabra=separar[j]
      }  
        
      }
    }console.log(palabra)
}




// Ejercicio 3


/*
 * Completa la clase 'Profesor' a continuación.
 *
 * No modifiques nada por fuera del cuerpo de los métodos.
 */

class Profesor {
    constructor(nombre, edad, cursos, certificados) {
        // Inicializar las propiedades del Profesor con los valores recibidos como argumento
        // tu código aquí:
        this.nombre=nombre;
        this.edad=edad;
        this.curso=curso;
        this.certificados=certificados;
    }
  
    getCursos() {
        // tu código aquí:
        return(this.curso)
    }
  
    addCurso(curso) {
        // tu código aquí:
        return(this.curso + '')
    }
  
    countCertificados() {
        // tu código aquí
        return(this.certificados)
    }
  
    addCertificado(nombre, entidad, anio) {
        // Agregar un objeto: { nombre: nombre, entidad: entidad, anio: anio }
        // al arreglo de certificados del Profesor.
        // tu código aquí
  
       class Objeto extends Persona{
       }
       var nuevo=new Objeto(this.addCertificado)
       nuevo.countCertificados()
       nuevo.codear()
    }
}




//Ejercicio 4
/*
 * Completa la función 'ingredienteEnMalEstado' a continuación.
 *
 * La función debe retornar un ARRAY DE STRING ó un STRING.
 * La función recibe los siguientes parámetro(s):
 *  1. OBJETO 'menu'
 *  2. STRING 'comida'
 *  3. STRING 'ingrediente'
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function ingredienteEnMalEstado(menu, comida, ingrediente) {
    //Tu código aquí
}



// Ejercicio 5
/*
 * Completa la función 'agregaPropiedad' a continuación.
 *
 * La función debe retornar un ARREGLO DE OBJETOS.
 * La función recibe un ARREGLO DE OBJETOS 'amigos' y un STRING 'propiedad' como parámetros.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function agregaPropiedad(amigos, propiedad) {
    // tu código aquí

 
    
     for (var i=0;i<amigos.length;i++){
        if( propiedad in amigos[i]){
            
        }else {
            (amigos[i][propiedad]=null)
        }
     }
    return(amigos)
    
        }
    
    var objeto=[{nombre:'mary',edad:8},{nombre:'juan',edad:6},{edad:5}]
    
    console.log(agregaPropiedad(objeto,'nombre'))
    




// Ejercicio 6
/*
 * Completa la función 'duplicarCaracteres' a continuación.
 *
 * La función debe retornar un STRING.
 * La función acepta un STRING como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función
 */

function duplicarCaracteres(palabra) {
    // tu código aquí
    
       var nuevo=[];
        var newpalabra=palabra.split('')
        for(var i=0;i<newpalabra.length;i++){
        nuevo[2*i]=newpalabra[i]
        nuevo[2*i+1]=newpalabra[i] 
        // Tambien funciiona asi:nuevo+=newpalabra[i]+newpalabra[i]
        } 
}



// Ejercicio 7
/*
 * Completa la función 'ideas' a continuación.
 *
 * La función debe retornar un STRING.
 * La función acepta un ARREGLO DE STRINGS como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function ideas(listaDeIdeas) {
    // tu código aquí
    var contador=0
    for(var i=0;i<ideas.length;i++){
        if(ideas[i]==="buenas"){
            contador=contador+1
         } 
    }

    if(contador=1){
        console.log("Activa!")
    }else if (contador>=3){
        console.log("Jackpot!")
    }else if (contador=0){
        console.log("Fail!")
    }

}
   


// Ejercicio 8
/*
 * Completa la función soloStrings a continuación.
 *
 * La función debería retornar un ARREGLO.
 * La función acepta un ARREGLO como parámetro.
 * 
 * No modifiques nada por fuera del cuerpo de esta función.
 */

function soloStrings(arregloMixto){
    // tu código aquí
var letras=[];
var letras2=[];
    for(var i=0;i<arregloMixto.length;i++){
        if(typeof arregloMixto[i]==='string'){
            letras.push(arregloMixto[i])
            
       
         }//else {console.log('02')}
    } 
    return (letras)
    }
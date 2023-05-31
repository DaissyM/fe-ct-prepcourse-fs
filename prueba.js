//class Persona{
//   constructor(nombre,edad){
//      this.nombre=nombre;
//      this.edad=edad;
//   }
//   datos(){
//      return(this.nombre + ', ' + this.edad +' años')
//   }
//
//}
//var propersona=new Persona('maria',20)
//console.log(propersona.datos())

class Persona{
   constructor (nombre,edad){
       this.nombre=nombre;
       this.edad=edad
   }
   saludar(){
       console.log('hola,minombre es' + this.nombre + 'tengo' + this.edad);
   }
}

class Programador extends Persona{
   constructor(nombre,edad,añosExperiencia){
       super(nombre,edad);
       this.añosExperiencia=añosExperiencia
   }

   codear(){
       console.log('soy' + this.nombre + '.Codeo desde hace' + this.añosExperiencia + 'años');
   }
}
var martin=new Persona('MARTIN',26);
var programador=new Programador('Maria',37,4)
martin.saludar();
programador.codear();
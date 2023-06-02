
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
console.log(soloStrings(['hola12',5,'tgu',89,'negro']))

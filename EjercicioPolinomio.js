// declaracion de variables
var a=0 ;
var b =0;
var c =0;
// 
var aCorrect=0 ;
var bCorrect =0;
var cCorrect =0;
var delta;
var res ;


// Funciones 


// funion de validacion de tipo de numero
funcionVal=(dato)=>{
 try{
    if (typeof(dato) =='number' ){
		if(dato <=100){
           console.log('dato valido ')

         return true;
      }else {
         console.log('revisar los datos ingresados')
      }
    	
  }
   // return true ;
  
 }catch(error){
  	console.log('error de dato no valido ');
   return false;
 }
}
// caculo de las raices
calcularRaices=(a,b,c)=>{
  delta = (parseInt(b) * parseInt(b)) - (((4 * parseInt(a) )* parseInt(c))); 
  // console.log(delta);
  if (delta < 0)  
  {  
   console.log("Sin soluciones,Numero complejo"); 
  }  
  else  
  {  
     if (delta == 0) 
     {  
           console.log("Solución única: " + (-b / (2 * a))); 
     } 
     else 
     { 
            console.log("Solución n.°1: " + (-b +  Math.sqrt(delta))/(2*a)) ;
       			console.log("Solución n.°2: " + (-b -  Math.sqrt(delta))/(2*a)) ;
     }
  }
}

funcionPolinomio=(a,b,c)=>{

 try{
    (funcionVal(a)== true)?
      aCorrect=a
   	:console.log('dato invalido,revise los datos ingresados');
   (funcionVal(b)== true)?
      bCorrect=b
   	:console.log('dato invalido,revise los datos ingresado');
   (funcionVal(c)== true)?
      cCorrect=c
   	:console.log('dato invalido,revise los datos ingresado');
  
   if ( aCorrect !=0 ){
     				// proceso de cacular 
     				calcularRaices(aCorrect,bCorrect,cCorrect);
     
     
     
    }else{
      console.log('ingrese un valor diferente de 0')
    }
      // return false
   console.log(aCorrect)
  	// Proceso para calcular
   

   
     // return true ;
  
 }catch(error){
  	console.log('error del proceso');
   return false;
 } 
}




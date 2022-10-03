// declaracion de variables
var a=0 ;
var b =0;
var c =0;
// 
var aCorrect=0 ;
var aCorrect =0;
var cCorrect =0;
var delta;
var res ;


// Funciones 


// funion de validacion de tipo de numero
funcionVal=(dato)=>{
 try{
    if (typeof(dato) =='number' ){
		  // console.log('dato numerico')
      return true;
    	
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

// 1.el valor de A debe ser distinto de cero 
funcionPolinomio(0,2,3);

// 2.el valor ingresado no es un numero 
funcionPolinomio("a",2,3);

// 3. el discriminante negativo 
funcionPolinomio(1,1,1);
// delta negativo 

//4. a=1 b=3 c=2 
funcionPolinomio(1,3,2);

//4. a=5 b=-20 c=15 
funcionPolinomio(5,-20,15);

// Ingreso de valores  
// funcionPolinomio(1,2,-8);


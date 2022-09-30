// declaracion de variables
var a=0 ;
var b =0;
var c =0;
// 
var aCorrect=0 ;
var aCorrect =0;
var cCorrect =0;
var tipo='' ;
// var res ;


// Funciones 
// funion de validacion de tipo de numero
funcionVal=(dato)=>{
 try{
    if (typeof(dato) =='number' ){
		  // console.log('dato numerico')
    	if (dato>0){
     		 console.log('dato valido');
      		return true;
      
    }else{
      console.log('ingrese un valor positivo o diferente de 0 ')
      return false
    }
  }else{
    console.log('dato no numerico')
    return false
  }
   // return true ;
  
 }catch(error){
  	console.log('error de dato no valido ');
   return false;
 }
}

// identificar el tipo de triangulo
funcionTipo=(a,b,c)=>{
	if(a==b && b==c) {
    			tipo= 'equilatero';
           console.log('equilatero');
    			    // console.log(" ")
    			return tipo
        } else if(a==b || b==c || a==c) {
          	tipo= 'isosceles';
          console.log('isosceles');
          return tipo
        } else { //(a!=b && b!=c)
          	tipo= 'escaleno';
          console.log('escaleno');
          return tipo
        }
}


funcionTipodeltriangulo=(a,b,c)=>{
// 
 try{
    if(funcionVal(a)== true){
      // 
      aCorrect=a
   		// console.log('dato invalido')
       if(funcionVal(b)== true){
         // 
      bCorrect=b
         // 
      if(funcionVal(c)== true){
     			cCorrect=c
        	funcionTipo(aCorrect,bCorrect,cCorrect);
   		}
   }
    }else{
	    console.log('dato invalido')
      return 
   }
    console.log(aCorrect);
    console.log(bCorrect);
    console.log(cCorrect);
   // 
 }catch(error){
  	console.log('error del proceso');
   return false;
 }
  
}
funcionTipodeltriangulo(1,2,3);

// 



















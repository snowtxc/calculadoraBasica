
var txtResultado = document.getElementById("txtResultado");
var botones = document.getElementsByClassName("botones");  //Captura todos los botones  donde van los numeros
var buttonResult = document.querySelector("#boton-resultado");

 for(let idBotones in botones){    //Recorre el array de botones
  
 	if(botones[idBotones].className == "botones"){    //Si el largo de el valor de los array es igual o menor que 1 entra en la condicion,lo usamos en la calculadora por que solo tenemos elementos de el 0 a el 9
 		
       
 		     botones[idBotones].addEventListener('click',function(){  //Agrega un evento click a cada boton 

 		     txtResultado.value = txtResultado.value + botones[idBotones].innerHTML;  //Agrega el valor de los botones a el txtResultado

		});




 	}


 } 


  function calcular(array){
  	let contador = 1;
  	var resultado = array[0];

  	while(contador<array.length){
  		if(array[contador] == "+"){
  			resultado=resultado+array[contador+1];
  			contador+=2;
  		}else if (array[contador] == "-") {
  			resultado = resultado-array[contador+1];
  			contador+=2;

  		}else if (array[contador] == "%"){
  			resultado = resultado/array[contador+1];
  			contador+=2;

  		}else if( array[contador] == "*"){
  			resultado = resultado*array[contador+1];
  			contador+=2;
  		}
  	}

  	return resultado;
  	resultado = null;
  	contador = null;





  }





 buttonResult.addEventListener('click',function(){   //Evento para el boton de = ,ejecuta el resultado
 	var resultado = txtResultado.value;    //Trae los valores ingresados a traves de el txt
   if(resultado.charAt(0) !="+" && resultado.charAt(0)!="-" && resultado.charAt(0)!= "%" && resultado.charAt(0) != "*" && resultado.charAt(resultado.length-1) !="+" && resultado.charAt(resultado.length-1)!="-" && resultado.charAt(resultado.length-1)!= "%" && resultado.charAt(resultado.length-1) != "*"  ){ //Evalua que el primer y ultimo digito no sea un operador ,de lo contrario lanza un mensaje de syntax error
    	var num = "";   //Variable num que almacenara los numeros que se vayan ingresando para posteriormente agregarlos
 	    var arrayCuenta= []  //array que almacenara paso a paso la cuenta ,los numeros y los operadores
        alert(resultado.length);
        var rastreo="";
 	    for(var i=0; i < resultado.length ; i++){     //For in que recorrera cada caracter de el valor de el txt Resultado

 	    	if(i>=1){
 	    	   rastreo = resultado.charAt(i-1);
 	    	}

 		    if(resultado.charAt(i)== "+" || resultado.charAt(i) == "-" || resultado.charAt(i) == "%" || resultado.charAt(i) == "*"){  //Evalua si encuentra un operador,si lo encuentra:
 		    	   if(num!=""){   //Si el numero no esta vacio
 		    	   	  
 		    	   	  num = parseInt(num);
 		    	   	  arrayCuenta.push(num) //Lo agrega a el array

 		    	   }

 		    	    if(rastreo == "+" || rastreo == "-" || rastreo == "%" || rastreo == "*"){
 		    	    	alert("Syntax error");
 		    	    	break;

 		    	    }




 			       arrayCuenta.push(resultado.charAt(i));  //agrega el operador a el array a continuacion de el numero 
 			       num =""  //Vacia la memoria de num
            }else{       //Si no encuentro un operador es numero y ejecuta:

               num=num+resultado.charAt(i);  //Concatena la cadena de numero anterior con el nuevo
               if(resultado.length-1 == i){
                  num = parseInt(num);                          //Si el ultimo indice de el resultado es igual a la i 
               	  arrayCuenta.push(num);  //Agrega el ultimo numero
                  num = "";


              }
              
            }
 	    } 

 	}else{
 		alert("Syntax error");
 	

 	}
 	


 	console.log(arrayCuenta);
    console.log("El resultado es " + calcular(arrayCuenta));






 });



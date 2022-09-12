const v = document.getElementById("v");

v.addEventListener('keyup', convertir);
valor1= document.getElementById("valor1");
valor1.addEventListener('change',convertir);
valor2= document.getElementById("valor2");
valor2.addEventListener('change',convertir);

var resultado;
function convertir(){
   if(v.value==''){
    return
   }

numero= v.value;
numero= parseFloat(numero);


if(valor1.value=="Fahrenheit" && valor2.value=="Fahrenheit"){
   resultado=numero*1;
   alert(numero + " Fahrenheit equivalen a " + resultado + " Fahrenheit");
  }

if(valor1.value=="Fahrenheit" && valor2.value=="Celsius"){
   resultado=(numero-32)/1,8;
   alert(numero + " Fahrenheit equivalen a " + resultado + " Celsius");
  }

if(valor1.value=="Fahrenheit" && valor2.value=="Kelvin"){
   resultado=(numero+459,67)*5/9;
   alert(numero +" Fahrenheit equivalen a " + resultado +" Kelvin");
   }


if(valor1.value=="Celsius" && valor2.value=="Celsius"){
   resultado=numero*1;
   alert(numero +" Celsius equivalen a " + resultado + " Celsius");
   }

if(valor1.value=="Celsius" && valor2.value=="Fahrenheit"){
   resultado=(numero-1,8)+32;
   alert(numero +" Celsius equivalen a " + resultado + " Fahrenheit");
   }

if(valor1.value=="Celsius" && valor2.value=="Kelvin"){
  resultado=numero+273;
  alert(numero +" Celsius equivalen a " + resultado + " Kelvin");
   }


if(valor1.value=="Kelvin" && valor2.value=="Kelvin"){
   resultado=numero*1;
   alert(numero +" Kelvin equivalen a " + resultado + " Kelvin");
   }  
if(valor1.value=="Kelvin" && valor2.value=="Fahrenheit"){
   resultado=1,8*(numero-273)+32;
   alert(numero +" Kelvin equivalen a " + resultado +" Fahrenheit");
 }

if(valor1.value=="Kelvin" && valor2.value=="Celsius"){
   resultado=numero-273;
   alert(numero +" Kelvin equivalen a " + resultado +" Celsius");
   }
                             
}
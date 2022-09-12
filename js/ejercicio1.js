/*longitud palabra*/
function lon(){
    const lon =document.getElementById('p').value.length;
    alert("la longitud que tiene la palabra es: " +lon)
    }

 /*palabra en mayuscula*/
function mayus(){
    const mayus=document.getElementById('p').value;
    const upperCasemayus = mayus.toUpperCase();
    alert("la palabra en mayuscula queda: "+upperCasemayus);
}

 /*palabra en minuscula*/
function minus(){
    const minus=document.getElementById('p').value;
    const lowerCaseminus = minus.toLowerCase();
   alert ("la palabra en minuscula queda: "+lowerCaseminus);
 }

 /*primer caracter*/
function primero(){
const primero =document.getElementById('p').value;
alert ("el primer caracter de la palabra es: " +primero.charAt(0));
 }
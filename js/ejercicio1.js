/*longitud palabra*/
function lon(){
    const lon =document.getElementById('p').value.length;
    alert("la longitud que tiene la palabra es: " +lon)
    }
    /*palabra en mayuscula*/
function mayus(){
let mayus=document.getElementById('p').value;
            alert("la palabra en mayuscula queda: " +mayus.toUpperCase());
            }
            /*palabra en minuscula*/
function minus(){
let minus=document.getElementById('p').value;
                alert ("la palabra en minuscula queda: " +minus.toLowerCase());
                }
 /*primer caracter*/
function primero(){
let primero =document.getElementById('p').value[0];
                alert ("el primer caracter de la palabra es: "  +primero.toUpperCase());

                }
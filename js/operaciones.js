var actualask;
var offset;
var result;
var elemento;
var elemento2;
var buy;
var sell;
var favour;
var adverse;
    
function mostrarMensaje1(){
alert('Bienvenido al curso JavaScript de aprenderaprogramar.com');
}

function mostrarMensaje2(){
alert('Ha hecho click sobre el párrafo inferior');
}
function capturar(){
     
    //actualask = (document.getElementById("actualAsk").value);
    //offset = (document.getElementById("offset").value);

    actualask=parseFloat(document.getElementById("actualAsk").value);
    offset=parseFloat(document.getElementById("offset").value);
    //document.getElementById("result").value = actualask+offset;   Muestra El resultado 

}
function capturarCheckBox(){
    elemento = document.getElementById("buy");
    alert(" Elemento: " + elemento.value + "\n Seleccionado: " + elemento.checked);
    elemento = document.getElementById("sell");
    alert(" Elemento: " + elemento.value + "\n Seleccionado: " + elemento.checked);
    elemento = document.getElementById("favour");
    alert(" Elemento: " + elemento.value + "\n Seleccionado: " + elemento.checked);
    elemento = document.getElementById("adverse");
    alert(" Elemento: " + elemento.value + "\n Seleccionado: " + elemento.checked);
}
// Trailing Stop Ask -> Numeric -> Increment None
 function myFunction() {
    document.getElementById("formulario").reset();
}
function AskNumeric(){
    //Recolectando los datos
    actualask=parseFloat(document.getElementById("actualAsk").value);
    offset=parseFloat(document.getElementById("offset").value);
    buy = document.getElementById("buy");
    sell = document.getElementById("sell");
    favour = document.getElementById("favour");
    adverse = document.getElementById("adverse");
    // valor final del ask
    var sum;
    // calculando 
    if (buy.checked==true & favour.checked==true) {
        document.getElementById("result").value = 10.01+offset;
    }else
    if (buy.checked==true & adverse.checked==true) {
            if((actualask+offset)>=10.31){
                document.getElementById("result").value = 10.01+offset;
            }
            else
                document.getElementById("result").value = actualask+offset; 
        }
         

        if (sell.checked==true & favour.checked==true) {
        document.getElementById("result").value = 10.31-offset;
        }else
        if (sell.checked==true & adverse.checked==true) {
            if((actualask-offset)<=10.01){
                document.getElementById("result").value = 10.31-offset;
            }
            else
                document.getElementById("result").value = actualask-offset; 
        }
        
}

window.onload = init;
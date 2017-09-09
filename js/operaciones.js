var actualask;
var offset;
var result;
var elemento;
var elemento2;
    
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
    document.getElementById("result").value = actualask+offset;

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

window.onload = init;
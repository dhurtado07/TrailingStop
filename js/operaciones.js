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

function AskPercentage(){
    //Recolectando los datos
    actualask=parseFloat(document.getElementById("actualAsk").value);
    offset=parseFloat(document.getElementById("offset").value);
    buy = document.getElementById("buy");
    sell = document.getElementById("sell");
    favour = document.getElementById("favour");
    adverse = document.getElementById("adverse");
    // valor final del ask
    var percentage;
    percentage = (actualask*offset)/100;

    // calculando 
    if (buy.checked==true & favour.checked==true) {
        document.getElementById("result").value = 10.01+percentage;
    }else
    if (buy.checked==true & adverse.checked==true) {
            if((actualask+percentage)>=10.31){
                document.getElementById("result").value = 10.01+percentage;
            }
            else
                document.getElementById("result").value = actualask+percentage; 
        }
         

        if (sell.checked==true & favour.checked==true) {
        document.getElementById("result").value = 10.31-percetage;
        }else
        if (sell.checked==true & adverse.checked==true) {
            if((actualask-percentage)<=10.01){
                document.getElementById("result").value = 10.31-percetage;
            }
            else
                document.getElementById("result").value = actualask-percentage; 
        }
}

function AskTickSize(){
    //Recolectando los datos
    actualask=parseFloat(document.getElementById("actualAsk").value);
    offset=parseFloat(document.getElementById("offset").value);
    buy = document.getElementById("buy");
    sell = document.getElementById("sell");
    favour = document.getElementById("favour");
    adverse = document.getElementById("adverse");
    // valor final del ask
    var tick = 0.01;
    var total = tick*offset;
    // calculando 
    if (buy.checked==true & favour.checked==true) {
        document.getElementById("result").value = 10.01+total;
    }else
    if (buy.checked==true & adverse.checked==true) {
            if((actualask+total)>=10.31){
                document.getElementById("result").value = 10.01+total;
            }
            else
                document.getElementById("result").value = actualask+total; 
        }
         

        if (sell.checked==true & favour.checked==true) {
        document.getElementById("result").value = 10.31-total;
        }else
        if (sell.checked==true & adverse.checked==true) {
            if((actualask-total)<=10.01){
                document.getElementById("result").value = 10.31-total;
            }
            else
                document.getElementById("result").value = actualask-total; 
        }
}
//---------------------  BID ------------------------------
function BidNumeric(){
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
        document.getElementById("result").value = 10.00+offset;
    }else
    if (buy.checked==true & adverse.checked==true) {
            if((actualask+offset)>=10.30){
                document.getElementById("result").value = 10.00+offset;
            }
            else
                document.getElementById("result").value = actualask+offset; 
        }
         

        if (sell.checked==true & favour.checked==true) {
        document.getElementById("result").value = 10.30-offset;
        }else
        if (sell.checked==true & adverse.checked==true) {
            if((actualask-offset)<=10.00){
                document.getElementById("result").value = 10.30-offset;
            }
            else
                document.getElementById("result").value = actualask-offset; 
        }
}

function BidPercentage(){
    //Recolectando los datos
    actualask=parseFloat(document.getElementById("actualAsk").value);
    offset=parseFloat(document.getElementById("offset").value);
    buy = document.getElementById("buy");
    sell = document.getElementById("sell");
    favour = document.getElementById("favour");
    adverse = document.getElementById("adverse");
    // valor final del ask
    var percentage;
    percentage = (actualask*offset)/100;

    // calculando 
    if (buy.checked==true & favour.checked==true) {
        document.getElementById("result").value = 10.00+percentage;
    }else
    if (buy.checked==true & adverse.checked==true) {
            if((actualask+percentage)>=10.30){
                document.getElementById("result").value = 10.00+percentage;
            }
            else
                document.getElementById("result").value = actualask+percentage; 
        }
         

        if (sell.checked==true & favour.checked==true) {
        document.getElementById("result").value = 10.30-percetage;
        }else
        if (sell.checked==true & adverse.checked==true) {
            if((actualask-percentage)<=10.00){
                document.getElementById("result").value = 10.30-percetage;
            }
            else
                document.getElementById("result").value = actualask-percentage; 
        }
}

function BidTickSize(){
    //Recolectando los datos
    actualask=parseFloat(document.getElementById("actualAsk").value);
    offset=parseFloat(document.getElementById("offset").value);
    buy = document.getElementById("buy");
    sell = document.getElementById("sell");
    favour = document.getElementById("favour");
    adverse = document.getElementById("adverse");
    // valor final del ask
    var tick = 0.01;
    var total = tick*offset;
    // calculando 
    if (buy.checked==true & favour.checked==true) {
        document.getElementById("result").value = 10.00+total;
    }else
    if (buy.checked==true & adverse.checked==true) {
            if((actualask+total)>=10.30){
                document.getElementById("result").value = 10.00+total;
            }
            else
                document.getElementById("result").value = actualask+total; 
        }
         

        if (sell.checked==true & favour.checked==true) {
        document.getElementById("result").value = 10.30-total;
        }else
        if (sell.checked==true & adverse.checked==true) {
            if((actualask-total)<=10.00){
                document.getElementById("result").value = 10.30-total;
            }
            else
                document.getElementById("result").value = actualask-total; 
        }
}

//---------------------  LAST PRICE ------------------------------

function LastNumeric(){
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
        document.getElementById("result").value = 10.00+offset;
    }else
    if (buy.checked==true & adverse.checked==true) {
            if((actualask+offset)>=10.30){
                document.getElementById("result").value = 10.00+offset;
            }
            else
                document.getElementById("result").value = actualask+offset; 
        }
         

        if (sell.checked==true & favour.checked==true) {
        document.getElementById("result").value = 10.30-offset;
        }else
        if (sell.checked==true & adverse.checked==true) {
            if((actualask-offset)<=10.00){
                document.getElementById("result").value = 10.30-offset;
            }
            else
                document.getElementById("result").value = actualask-offset; 
        }
}

function LastPercentage(){
    //Recolectando los datos
    actualask=parseFloat(document.getElementById("actualAsk").value);
    offset=parseFloat(document.getElementById("offset").value);
    buy = document.getElementById("buy");
    sell = document.getElementById("sell");
    favour = document.getElementById("favour");
    adverse = document.getElementById("adverse");
    // valor final del ask
    var percentage;
    percentage = (actualask*offset)/100;

    // calculando 
    if (buy.checked==true & favour.checked==true) {
        document.getElementById("result").value = 10.00+percentage;
    }else
    if (buy.checked==true & adverse.checked==true) {
            if((actualask+percentage)>=10.30){
                document.getElementById("result").value = 10.00+percentage;
            }
            else
                document.getElementById("result").value = actualask+percentage; 
        }
         

        if (sell.checked==true & favour.checked==true) {
        document.getElementById("result").value = 10.30-percetage;
        }else
        if (sell.checked==true & adverse.checked==true) {
            if((actualask-percentage)<=10.00){
                document.getElementById("result").value = 10.30-percetage;
            }
            else
                document.getElementById("result").value = actualask-percentage; 
        }
}

function LastTickSize(){
    //Recolectando los datos
    actualask=parseFloat(document.getElementById("actualAsk").value);
    offset=parseFloat(document.getElementById("offset").value);
    buy = document.getElementById("buy");
    sell = document.getElementById("sell");
    favour = document.getElementById("favour");
    adverse = document.getElementById("adverse");
    // valor final del ask
    var tick = 0.01;
    var total = tick*offset;
    // calculando 
    if (buy.checked==true & favour.checked==true) {
        document.getElementById("result").value = 10.00+total;
    }else
    if (buy.checked==true & adverse.checked==true) {
            if((actualask+total)>=10.30){
                document.getElementById("result").value = 10.00+total;
            }
            else
                document.getElementById("result").value = actualask+total; 
        }
         

        if (sell.checked==true & favour.checked==true) {
        document.getElementById("result").value = 10.30-total;
        }else
        if (sell.checked==true & adverse.checked==true) {
            if((actualask-total)<=10.00){
                document.getElementById("result").value = 10.30-total;
            }
            else
                document.getElementById("result").value = actualask-total; 
        }
}

//---------------------  MID POINT  ------------------------------

function MidPointNumeric(){
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
        document.getElementById("result").value = 10.0005+offset;
    }else
    if (buy.checked==true & adverse.checked==true) {
            if((actualask+offset)>=10.305){
                document.getElementById("result").value = 10.0005+offset;
            }
            else
                document.getElementById("result").value = actualask+offset; 
        }
         

        if (sell.checked==true & favour.checked==true) {
        document.getElementById("result").value = 10.305-offset;
        }else
        if (sell.checked==true & adverse.checked==true) {
            if((actualask-offset)<=10.005){
                document.getElementById("result").value = 10.305-offset;
            }
            else
                document.getElementById("result").value = actualask-offset; 
        }
}

function MidPointPercentage(){
    //Recolectando los datos
    actualask=parseFloat(document.getElementById("actualAsk").value);
    offset=parseFloat(document.getElementById("offset").value);
    buy = document.getElementById("buy");
    sell = document.getElementById("sell");
    favour = document.getElementById("favour");
    adverse = document.getElementById("adverse");
    // valor final del ask
    var percentage;
    percentage = (actualask*offset)/100;

    // calculando 
    if (buy.checked==true & favour.checked==true) {
        document.getElementById("result").value = 10.005+percentage;
    }else
    if (buy.checked==true & adverse.checked==true) {
            if((actualask+percentage)>=10.305){
                document.getElementById("result").value = 10.005+percentage;
            }
            else
                document.getElementById("result").value = actualask+percentage; 
        }
         

        if (sell.checked==true & favour.checked==true) {
        document.getElementById("result").value = 10.305-percetage;
        }else
        if (sell.checked==true & adverse.checked==true) {
            if((actualask-percentage)<=10.005){
                document.getElementById("result").value = 10.305-percetage;
            }
            else
                document.getElementById("result").value = actualask-percentage; 
        }
}

function MidPointTickSize(){
    //Recolectando los datos
    actualask=parseFloat(document.getElementById("actualAsk").value);
    offset=parseFloat(document.getElementById("offset").value);
    buy = document.getElementById("buy");
    sell = document.getElementById("sell");
    favour = document.getElementById("favour");
    adverse = document.getElementById("adverse");
    // valor final del ask
    var tick = 0.01;
    var total = tick*offset;
    // calculando 
    if (buy.checked==true & favour.checked==true) {
        document.getElementById("result").value = 10.005+total;
    }else
    if (buy.checked==true & adverse.checked==true) {
            if((actualask+total)>=10.305){
                document.getElementById("result").value = 10.005+total;
            }
            else
                document.getElementById("result").value = actualask+total; 
        }
         

        if (sell.checked==true & favour.checked==true) {
        document.getElementById("result").value = 10.305-total;
        }else
        if (sell.checked==true & adverse.checked==true) {
            if((actualask-total)<=10.005){
                document.getElementById("result").value = 10.305-total;
            }
            else
                document.getElementById("result").value = actualask-total; 
        }
}

window.onload = init;
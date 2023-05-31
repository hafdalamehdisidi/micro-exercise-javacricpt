var button = document.getElementById('greaterThan');
button.onclick = function mayor(){
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);
    var number3 = parseInt(document.getElementById("number3").value);
    var largest;
    
    if(number1>number2 && number1>number3){
        largest=number1;
    }else if(number2>number1 && number2>number3){
        largest=number2;
    }else{
        largest=number3;
    }
    alert("el mayor es el número: "+largest);

}



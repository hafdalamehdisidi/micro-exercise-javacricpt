var button = document.getElementById('order');
button.onclick = function greaterThan() {
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);
    if (number1>number2) {
        alert('El mayor es el: '+number1);
        
        
    }else{
        alert('el mayor es el: '+number2)
    }
}
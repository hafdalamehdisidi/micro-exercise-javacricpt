var button = document.getElementById('sumator');
button.onclick = function addition() {
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);
    var sumator = number1+number2;
    alert('La suma de '+number1+' y '+number2+' es '+sumator);
    
}
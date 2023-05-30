var button = document.getElementById("submit");
button.onclick = function hello(){
    var user = document.getElementById("name").value;
    document.write("<p>Hola, bienvenido "+user+"</p>")
}


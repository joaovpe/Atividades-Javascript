function calcular() {
    var op = document.getElementById("operação").value;
   
    if (op == "+")
    {
        var x = parseInt(document.getElementById("n1").value);
        var y = parseInt(document.getElementById("n2").value);
        var resultado = y + x;
        alert(resultado);
    }
    if (op == "-")
    {
        var x = parseInt(document.getElementById("n1").value);
        var y = parseInt(document.getElementById("n2").value);
        var resultado = y - x;
        alert(resultado);
    }
    if (op == "*")
    {
        var x = parseInt(document.getElementById("n1").value);
        var y = parseInt(document.getElementById("n2").value);
        var resultado = y * x;
        alert(resultado);
    }
    if (op == "/")
    {
        
        var x = parseInt(document.getElementById("n1").value);
        var y = parseInt(document.getElementById("n2").value);
       
    }
    if(y == 0)
    {
        alert("erro");
    }  
    else{
        var resultado = y / x;
        alert(resultado);
    }
    
}
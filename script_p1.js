function suma()
{
    var num1, num2, suma;
    num1 = prompt("Escribe un numero","Numero 1");
    num2 = prompt("Escribe otro numero","Numero 2");
    suma = parseFloat(num1) + parseFloat(num2);
    alert("La suma es igual " + suma);
}

function resta()
{
    var num1, num2, resta;
    num1 = prompt("Escribe un numero","Numero 1");
    num2 = prompt("Escribe otro numero","Numero 2");
    resta = parseFloat(num1) - parseFloat(num2);
    alert("La resta es igual " + resta);
}

function multiplicacion()
{
    var num1, num2, multiplicacion;
    num1 = prompt("Escribe un numero","Numero 1");
    num2 = prompt("Escribe otro numero","Numero 2");
    multiplicacion = parseFloat(num1) * parseFloat(num2);
    alert("La multiplicacion es igual " + multiplicacion);
}

function division()
{
    var num1, num2, division;
    num1 = prompt("Escribe un numero","Numero 1");
    num2 = prompt("Escribe otro numero","Numero 2");
    division = parseFloat(num1) / parseFloat(num2);
    alert("La division es igual " + division);
}

function comparacion()
{
    var num1;
    num1 = prompt("Escribe un numero","Numero");
    if (parseInt(num1)>0)
        alert("El numero es positivo");
    else
        alert("El numero es negativo");
}
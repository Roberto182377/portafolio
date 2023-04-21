function suma()
{
    var n1=document.getElementById("num1").value;
    var n2=document.getElementById("num2").value;
    document.getElementById("resultado").innerHTML=parseFloat(n1)+parseFloat(n2);
}
function resta()
{
    var n1=document.getElementById("num1").value;
    var n2=document.getElementById("num2").value;
    document.getElementById("resultado").innerHTML=parseFloat(n1)-parseFloat(n2);
}
function multiplicacion()
{
    var n1=document.getElementById("num1").value;
    var n2=document.getElementById("num2").value;
    document.getElementById("resultado").innerHTML=parseFloat(n1)*parseFloat(n2);
}
function division()
{
    var n1=document.getElementById("num1").value;
    var n2=document.getElementById("num2").value;
    document.getElementById("resultado").innerHTML=parseFloat(n1)/parseFloat(n2);
}
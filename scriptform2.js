function rfc()
{
    var nombre, apaterno, amaterno, year, mes, dia;
    /*Definir las variables*/
    nombre = document.getElementById("nombre").value;
    apaterno = document.getElementById("ap").value;
    amaterno = document.getElementById("am").value;
    year = document.getElementById("year").value;
    mes = document.getElementById("mes").value;
    dia = document.getElementById("dia").value;

    /*Separar las letras (subcadena)*/
    var subcad1= nombre.substring(0,1);
    var subcad2= apaterno.substring(0,2);
    var subcad3= amaterno.substring(0,1);
    var subcad4= year.substring(2,4);

    /*Concatenar*/
    var concatenar = subcad2.concat(subcad1+subcad3+subcad4+mes+dia);

    /*Mayuscula*/
    var mayus= concatenar.toUpperCase();

    /*Mostrar resultado*/
    document.getElementById("resultado").value=mayus;
}
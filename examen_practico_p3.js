function evaluar()
{
    /*Se convierte la fecha ingresada*/
    var cumpleString = document.getElementById("fecha").value;
     /*Se declaran las variables de la fecha ingresada y del dia de hoy*/
    var cumple = new Date(cumpleString);
    var hoy = new Date();

    /*Se obtiene solo el mes de las fechas*/
    var meshoy = hoy.getMonth();
    var mescumple = cumple.getMonth();

    if(meshoy==mescumple){
        document.getElementById("resultado").innerHTML="Felicidades consigues un descuento 2x1";
    }else{
        document.getElementById("resultado").innerHTML="No obtuviste descuento, suerte para la proxima";
        
    }
}
var total; //Se crea una variable global
function califica()
    {
        var total=0; //Una variable local
        /*Se crea un ciclo 'for' que se repitira segun el total de preguntas(5)*/
    	for (var x=1;x<=5;x++)
    	{
            var res=0;
            /*Evalua cada 'rx' buscando la respuesta correcta*/
            var nom="r"+x; 
            var resul=document.getElementsByName(nom);
            /*Se crea otro ciclo 'for' que se repitira segun el tamaño de las respuestas*/
            for(var i=0;i<resul.length;i++)
            {
                /*If que revisara si se cumple la condicion devolviendo un total que se ira acomulando*/
                if(resul[i].checked==true)
                    res=parseInt(resul[i].value);
            }
            total=total+res;
            document.getElementById("total").innerHTML="Puntos obtenidos: "+total+" Puntos";
        }
        /*Evaluacion final que soltara un mensaje*/
        if(total==25)
        	document.getElementById("comentario").innerHTML="Excelente :D";
        else
        	if(total>15)
        	document.getElementById("comentario").innerHTML="Nada mal ;)";
        else
        	if(total<=15)
        	document.getElementById("comentario").innerHTML="Falta estudiar :/";
    }
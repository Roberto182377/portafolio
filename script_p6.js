//API Forms
function iniciar()
{
    nombre1=document.getElementById("nombre");
    nombre2=document.getElementById("apellido");
    nombre1.addEventListener("input", validacion, false);
    nombre2.addEventListener("input", validacion, false);
    validacion();
}
function validacion()
{
    if(nombre1.value=='' && nombre2.value==''){
    nombre1.setCustomValidity('inserte al menos un nombre');
    nombre1.style.background='#FFDDDD';
    }else{
    nombre1.setCustomValidity('');
    nombre1.style.background='#FFFFFF';
    }
}
window.addEventListener("load", iniciar, false);

//API 
google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Película", "Recaudación", { role: "style" } ],
        ["Avatar", 2923706026, "#33A7FF"],
        ["Avengers: Endgame", 2799439100, "#AE38FB"],
        ["Avatar: The Way of Water", 2319346656, "#2240BA"],
        ["Titanic", 2264577439, "#22BA6D"],
        ["Star Wars: Episodio VII - El despertar de la Fuerza", 2071310218, "#F00E0E"],
        ["Avengers: Infinity War", 2052415039 , "#E2C913"],
        ["Spider-Man: No Way Home", 1921847111 , "#E21C13"],
        ["Jurassic World", 1671537444 , "#678E8E"],
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Top 8: Películas más taquilleras de la historia",
        width: 1400,
        height: 600,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
      chart.draw(view, options);
  }
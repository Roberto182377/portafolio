google.charts.load('current', {
  'packages':['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['Pais', 'Poblacion'],
    /*Paises*/
    ['Max', 1500000000],
    ['China', 1414782000],
    ['India', 1396559000],
    ['United States',334687000],
    ['Indonesia', 279154000],
    ['Pakistan', 241181000],
    ['Nigeria', 224437000],
    ['Brazil', 209106000],
    ['Bangladesh', 172441000],
    ['RU', 146571000],
    ['Mexico', 130997000],
    ['Japan', 124304000],
    ['CD', 112849000],
    ['Philippines', 110857000],
    ['Ethiopia', 107381000],
    ['Egypt', 107058000],
    ['Vietman', 100600000],
    ['Iran', 87019000],
    ['Turkey', 85580000],
    ['Germany', 84544000],
    ['Thailand', 68950000],

    ['Min', 50000000]
  ]);

  var options = {
    colorAxis: {colors: ['#00A6FF','#00ECFF','#00FF9E','#00FF2A']} // orange to blue
  };

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
}
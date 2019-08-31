
function buildGauge(freq) {



  var data = [{domain: {x: [0, 1], y: [0, 1]}, 
  value: freq,
  title: {text: "<b>Belly Button Washing Frequency</b><br>Scrubs Per Week<br>"},
  type: "indicator", 
  mode: "gauge+number", 
  gauge:
  {axis: {range: [null, 9], tickmode: "array", tickvals: [0,1,2,3,4,5,6,7,8,9], ticktext: ["0","1","2","3","4","5","6","7","8","9"]}, steps: [
    {range: [0, 1], color: 'rgb(247,242,235)'}, 
    {range: [1, 2], color: 'rgb(234,240,205)'},
    {range: [2, 3], color: 'rgb(228,239,190)'}, 
    {range: [3, 4], color: 'rgb(222,238,175)'},
    {range: [4, 5], color: 'rgb(215,238,161)'},
    {range: [5, 6], color: 'rgb(209,237,146)'},
    {range: [6, 7], color: 'rgb(203,236,131)'},
    {range: [7, 8], color: 'rgb(196,235,116)'},
    {range: [8, 9], color: 'rgb(190,234,101)'}], 
  }}];

  
var layout = {width: 600, height: 500, margin: {t: 0, b: 0}};
var graphDiv = document.getElementById('gauge') 
Plotly.newPlot(graphDiv,data,layout);
  };

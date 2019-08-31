function buildMetadata(sample) {

  // Use `d3.json` to fetch the sample data for the plots
  var url = `/metadata/${sample}`;

  d3.json(url).then(function(sample) {

    // Use d3 to select the panel with id of `#sample-metadata`
    var metadata = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    metadata.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    Object.entries(sample).forEach(([key, value]) => {
      metadata.append("p").text(`${key}: ${value}`);
    });

    // buildGauge(data.WFREQ);
  });
};

function buildCharts(sample) {

  // Use `d3.json` to fetch the sample data for the plots
  var url = `/samples/${sample}`;

  d3.json(url).then(function(data) {

    // Get the data for the Bubble Chart
    var xValues = data.otu_ids;
    var yValues = data.sample_values;
    var bLabels = data.otu_labels;
    var bSize = data.sample_values;
    var bColors = data.otu_ids;

    var bubbles = {
      x: xValues,
      y: yValues,
      text: bLabels,
      mode: 'markers',
      marker: {
        size: bSize,
        color: bColors
      }
    };
  
    var data = [bubbles];

    var layout = {
      xaxis: {title: "OTU ID"}
    };

    Plotly.newPlot('bubble', data, layout);
  });

   // Get the data for the Pie Chart
   // Use slice() to grab the top 10 sample_values, otu_ids, and labels (10 each).
  d3.json(url).then(function(data) {
    var pValues = data.sample_values.slice(0,10);
    var pLabels = data.otu_ids.slice(0, 10);
    var pHovers = data.otu_labels.slice(0, 10);

    var data = [{
      values: pValues,
      labels: pLabels,
      hovertext: pHovers,
      type: 'pie'
    }];

    Plotly.newPlot('pie', data);
  });
};

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
 
    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();

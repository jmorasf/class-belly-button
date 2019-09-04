## Belly Button Biodiversity

In this project, we created an interactive dashboard to explore the Belly Button Biodiversity Dataset.

. Step 1 - Plotly.js

We used Plotly.js to build interactive charts for the dashboard.

We created a PIE chart that uses data from your samples route (/samples/<sample>) to display the top 10 samples.

We used sample_values as the values for the PIE chart.

We created a Bubble Chart that uses data from your samples route (/samples/<sample>) to display each sample.

We also displayed the sample metadata from the route /metadata/<sample>. And

The dashboard updates all the plots any time a new sample is selected.

. Step 2 - Heroku

The app was deployed to Heroku.

. Step 3. Advanced Challenge Assignment 

We adapted the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to plot the Weekly Washing Frequency obtained from the /metadata/<sample>route.

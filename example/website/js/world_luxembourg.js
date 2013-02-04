g = new Dygraph(
    document.getElementById("graphdiv1"),
    "csv_agg/world_luxembourg",
    {
          labels: ['date', 'World', 'Luxembourg'],
      'Luxembourg': { axis: {} },
      axes: {
              y:{
                },
              y2: {
                  valueFormatter: function(y) {
                      return y.toPrecision(8);
                      },
                  axisLabelFormatter: function(y) {
                      return y.toPrecision(5);
                      },
                 }
            },
      legend: 'always',
      fillGraph: true,
      rollPeriod: 30,
      showRoller: true,
      logscale : true,
      ylabel: 'World Trend',
      y2label: 'Luxembourg Trend',
      yAxisLabelWidth: 50,
      xAxisLabelWidth: 60
    }
);

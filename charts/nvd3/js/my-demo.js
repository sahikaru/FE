/*These lines are all chart setup. Pick and choose which chart featrues you want to utilize.*/
nv.addGraph(function) {
  var chart =  nv.models.lineChart()
                 .useInteractiveGuideline(true)
                 .transitionDuration(350)

  chart.xAxis
    .axisLabel('Time  (ms)')
    .tickFormat(d3.format(',r'));

  chart.yAxis
    .axisLabel('Voltage (v)')
    .tickFormat(d3.format('.02f'));

  d3.select('line-chart')
    .datum(sinAndCos)
    .call(chart);

  nv.utils.windowResize(function() {chart.update() });
  return chart;
});

/********************************************
 * Simple test data generator
 */
function sinAndCos() {
  var sin = [], sin2 = [],
      cos = [];

  for(var i = 0; i < 100; i++) {
    sin.push({x: i, y: Math.sin(i/100)});
    sin2.push({x:i, y: Math.sin(i/10) * 0.25 + 0.5 });
    cos.push({x:i, y: .5 * Math.cos(i/10)});
  }

  return [
  {
    values: sin,
      key: 'Sine Wave',
      color: '#ff7f0e'
  },
  {
    values: cos,
    key: 'Cosine Wave',
    color: '#2ca02c'
  },
  {
    values: sin2,
    key: 'Another sine wave',
    color: '#7777ff',
    area: true
  }
  ];
}

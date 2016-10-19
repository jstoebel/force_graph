// posted image: https://dl.dropboxusercontent.com/u/58498173/an.png

d3.json("https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json", function(data){

  // stubbed data for testing
//   var data = {
// 	"nodes": [
// 		{ "country": "East Timor", "code": "tl" },
// 		{ "country": "Canada", "code": "ca" },
// 	],
// 	"links": [
// 		{ "target": 0, "source": 1 },
// 	]
// }

  var margin = { top: 30, right: 30, bottom: 70, left:70 }

  var vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - 200;
  var vpHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100 ;

  var height = vpHeight - margin.top - margin.bottom,
      width = vpWidth - margin.left - margin.right

  var nodes = data.nodes;

  var links = data.links;

  var myChart = d3.select("#chart").append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)

  var force = d3.layout.force()
    .size([width + margin.left + margin.right,
      height + margin.top + margin.bottom])
    .nodes(nodes)
    .links(links)
    .charge(-100)
    .linkDistance(50)


  var link = myChart.selectAll('.link')
    .data(links)
    .enter().append('line')
    .attr('class', 'link');

  var node = myChart.selectAll("g.node")
    .data(nodes, function(d) { return d.code})

  var nodeInner = node.enter().append("svg:g")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
    .call(force.drag)

  nodeInner.append("svg:image")
    .attr("xlink:href",  function(d) {
      return "https://dl.dropboxusercontent.com/u/58498173/"+d.code+".png"
    })
    .attr("height", 20)
    .attr("width", 20)

  force.on('end', function() {

    node.attr('transform', function(d){
      return ("transform", 'translate(' + d.x + ', ' + d.y + ')')
    })

    link.attr('x1', function(d) { return d.source.x; })
      .attr('y1', function(d) { return d.source.y; })
      .attr('x2', function(d) { return d.target.x; })
      .attr('y2', function(d) { return d.target.y; });
  })

  force.on("tick", function() {
     link.attr("x1", function(d) { return d.source.x; })
         .attr("y1", function(d) { return d.source.y; })
         .attr("x2", function(d) { return d.target.x; })
         .attr("y2", function(d) { return d.target.y; });

     node.attr("transform", function (d) {
         return "translate(" + d.x + "," + d.y + ")";
   });

 })
  force.start();
})

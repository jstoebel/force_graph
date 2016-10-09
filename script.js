d3.json("https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json", function(data){

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
    .linkDistance(width/4);

  var link = myChart.selectAll('.link')
    .data(links)
    .enter().append('line')
    .attr('class', 'link');

  var node = myChart.selectAll("g.node")
    .data(nodes, function(d) { return d.code})

  var nodeInner = node.enter().append("svg:g")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })

  nodeInner.append("svg:circle")
    .attr("r", 5)

  nodeInner.append("img")
    .attr("src", "flags.png")
    // .attr("class", function(d){
    //   return("flag flag-"+d.code)
    // })
    .attr("class", "flag flag-us")
    .attr("alt", "")


  force.on('end', function() {

    // node.attr('cy', function(d){return d.y})
    //   .attr('cx', function(d){return d.x})
    //   .attr('r', 5)
    node.attr('width', 100)
      .attr('height', 100)
      .attr('x', function(d){return d.x})
      .attr('y', function(d){return d.y})
      .attr('transform', function(d){
        return ("transform", 'translate(' + d.x + ', ' + d.y + ')')
      })

    link.attr('x1', function(d) { return d.source.x; })
      .attr('y1', function(d) { return d.source.y; })
      .attr('x2', function(d) { return d.target.x; })
      .attr('y2', function(d) { return d.target.y; });
  })

  force.start();

})

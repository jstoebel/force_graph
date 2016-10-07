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
    .links(links);
    .linkDistance(width/2);

  var link = svg.selectAll('.link')
    .data(links)
    .enter().append('line')
    .attr('class', 'link');

  var node = svg.selectAll('.node')
      .data(nodes)
      .enter().append('circle')
      .attr('class', 'node');

  //     .append('g')
  //       .attr('transform', 'translate('+ margin.left +', '+ margin.top +')')
  //       .selectAll('rect').data(monthlies)
  //       .enter().append('rect')
  //         .style('fill', function(point, i){
  //           return colorScale(point.variance + baseTemp)
  //         })
  //         .attr('x', function(point, i){
  //           return xScale(new Date(point.year,0))
  //         })
  //         .attr('y', function(point, i){
  //           return yScale(point.month-1)
  //         })
  //         .attr('width', width/(endYear - startYear))
  //         .attr('height', boxHeight)
  //
  //         .on('mouseenter', function(d) {
  //             tooltip.transition()
  //             .duration(100)
  //             .style('opacity', .8)
  //
  //             var ttStr = `<div>${months[d.month-1]}, ${d.year}: ${d.variance}</div>`
  //
  //             tooltip.html(ttStr)
  //                 .style('left', (d3.event.pageX - 35) + 'px')
  //                 .style('top',  (d3.event.pageY - 30) + 'px')
  //         })
  //
  //         .on('mouseout', function(d) {
  //
  //           console.log("Mouseout: "+`${months[d.month-1]}, ${d.year}`)
  //
  //           tooltip.transition()
  //             .duration(200)
  //             .style("opacity", 0);
  //         })
  //
  // var vGuideScale = d3.scale.ordinal()
  //         .domain(months)
  //         .range(d3.range(0, height + boxHeight, height/12))
  //
  // var vAxis = d3.svg.axis()
  //     .scale(vGuideScale)
  //     .orient('left')
  //     .ticks(12)
  //
  // var vGuide = d3.select('svg').append('g')
  //     vAxis(vGuide)
  //     vGuide.attr('transform', 'translate(' + margin.left + ', ' + (margin.top + (boxHeight/2)) + ')')
  //     vGuide.selectAll('path')
  //         .style('visibility', 'hidden')
  //     vGuide.selectAll('line')
  //         .style('visibility', 'hidden')
  //
  // var hGuideScale = d3.scale.linear()
  //         .domain([startYear, endYear])
  //         .range([0, width])
  //
  // var hAxis = d3.svg.axis()
  //     .orient("bottom")
  //     .scale(xScale)
  //     .ticks(d3.time.years, 20);
  //
  // var hGuide = d3.select('svg').append('g')
  //     hAxis(hGuide)
  //     hGuide.attr('transform', 'translate(' + (margin.left) + ', ' + (height + margin.top) + ')')
  //     hGuide.selectAll('path')
  //         .style({ fill: 'none', stroke: "#000"})
  //     hGuide.selectAll('line')
  //         .style({ stroke: "#000"})
  //
  // var tooltip = d3.select('#chart').insert("div", ":first-child")
  //   .classed('tooltip',  true)

})

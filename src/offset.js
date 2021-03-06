export default function(d, nodeSize) {
  var diffX = d.target.y - d.source.y;
  var diffY = d.target.x - d.source.x;

  var angle0 = ( Math.atan2( diffY, diffX ) + ( Math.PI / 2 ) );
  var angle1 = angle0 + ( Math.PI * 0.75 );
  var angle2 = angle0 + ( Math.PI * 0.25 );

  var x1 = d.source.x + (nodeSize * Math.cos(angle1));
  var y1 = d.source.y - (nodeSize * Math.sin(angle1));
  var x2 = d.target.x + (nodeSize * Math.cos(angle2));
  var y2 = d.target.y - (nodeSize * Math.sin(angle2));

  return {source: {x: x1, y: y1}, target: {x: x2, y: y2}};

}
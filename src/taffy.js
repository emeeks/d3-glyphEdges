export default function(d, nodeSourceSize, nodeTargetSize, midpointSize) {
    var diffX = d.target.y - d.source.y;
    var diffY = d.target.x - d.source.x;

    var angle0 = ( Math.atan2( diffY, diffX ) + ( Math.PI / 2 ) );
    var angle1 = angle0 - ( Math.PI / 2 );
    var angle2 = angle0 + ( Math.PI / 2 );

    var x1 = d.source.x + (nodeSourceSize * Math.cos(angle1));
    var y1 = d.source.y - (nodeSourceSize * Math.sin(angle1));
    var x2 = d.source.x + (nodeSourceSize * Math.cos(angle2));
    var y2 = d.source.y - (nodeSourceSize * Math.sin(angle2));

    var x3 = d.target.x + (nodeTargetSize * Math.cos(angle2));
    var y3 = d.target.y - (nodeTargetSize * Math.sin(angle2));
    var x4 = d.target.x + (nodeTargetSize * Math.cos(angle1));
    var y4 = d.target.y - (nodeTargetSize * Math.sin(angle1));

    var mx1 = d.source.x + (midpointSize * Math.cos(angle1));
    var my1 = d.source.y - (midpointSize * Math.sin(angle1));
    var mx2 = d.source.x + (midpointSize * Math.cos(angle2));
    var my2 = d.source.y - (midpointSize * Math.sin(angle2));

    var mx3 = d.target.x + (midpointSize * Math.cos(angle1));
    var my3 = d.target.y - (midpointSize * Math.sin(angle1));
    var mx4 = d.target.x + (midpointSize * Math.cos(angle2));
    var my4 = d.target.y - (midpointSize * Math.sin(angle2));

    var midY2 = (my1 + my3) / 2;
    var midX2 = (mx1 + mx3) / 2;
    var midY1 = (my2 + my4) / 2;
    var midX1 = (mx2 + mx4) / 2;

    return "M" + x1 + "," + y1 + "L" + x2 + "," + y2 + " L " + midX1 + "," + midY1 + " L " + x3 + "," + y3 + " L " + x4 + "," + y4 + " L " + midX2 + "," + midY2 + "z";
};
export default function(d, nodeTargetSize, bodySize, headSize) {
    var diffX = d.target.y - d.source.y;
    var diffY = d.target.x - d.source.x;

    var headDistance = headSize * 3;

    var angle0 = ( Math.atan2( diffY, diffX ) + ( Math.PI / 2 ) );
    var angle1 = angle0 - ( Math.PI / 2 );
    var angle2 = angle0 + ( Math.PI / 2 );

    var x1 = d.source.x + (headSize * Math.cos(angle1));
    var y1 = d.source.y - (headSize * Math.sin(angle1));
    var x2 = d.source.x + (headSize * Math.cos(angle2));
    var y2 = d.source.y - (headSize * Math.sin(angle2));

    var x3 = d.target.x - (headSize * Math.cos(angle1));
    var y3 = d.target.y + (headSize * Math.sin(angle1));
    var x4 = d.target.x - (headSize * Math.cos(angle2));
    var y4 = d.target.y + (headSize * Math.sin(angle2));

    var mx1 = d.source.x + (bodySize * Math.cos(angle1));
    var my1 = d.source.y - (bodySize * Math.sin(angle1));
    var mx2 = d.source.x + (bodySize * Math.cos(angle2));
    var my2 = d.source.y - (bodySize * Math.sin(angle2));

    var mx3 = d.target.x + (bodySize * Math.cos(angle1));
    var my3 = d.target.y - (bodySize * Math.sin(angle1));
    var mx4 = d.target.x + (bodySize * Math.cos(angle2));
    var my4 = d.target.y - (bodySize * Math.sin(angle2));

    var dY = d.source.y - d.target.y;
    var dX = d.source.x - d.target.x;

    var midDiffY1 = my1 - my3;
    var midDiffX1 = mx1 - mx3;
    var midDiffY2 = my2 - my4;
    var midDiffX2 = mx2 - mx4;

    var diffY1 = y1 - y3;
    var diffX1 = x1 - x3;
    var diffY2 = y2 - y4;
    var diffX2 = x2 - x4;

    var pythag = Math.sqrt((midDiffX1 * midDiffX1) + (midDiffY1 * midDiffY1));
    var pythag2 = Math.sqrt((dX * dX) + (dY * dY));

    var adjX1 = mx2 - ((midDiffX1 * (pythag - headDistance - nodeTargetSize)) / pythag);
    var adjY1 = my2 - ((midDiffY1 * (pythag - headDistance - nodeTargetSize)) / pythag);
    var adjX2 = mx1 - ((midDiffX2 * (pythag - headDistance - nodeTargetSize)) / pythag);
    var adjY2 = my1 - ((midDiffY2 * (pythag - headDistance - nodeTargetSize)) / pythag);

    var headX2 = x1 - ((diffX2 * (pythag - headDistance - nodeTargetSize)) / pythag);
    var headY2 = y1 - ((diffY2 * (pythag - headDistance - nodeTargetSize)) / pythag);
    var headX1 = x2 - ((diffX1 * (pythag - headDistance - nodeTargetSize)) / pythag);
    var headY1 = y2 - ((diffY1 * (pythag - headDistance - nodeTargetSize)) / pythag);

    var tipX = d.source.x - ((dX * (pythag2 - nodeTargetSize)) / pythag2);
    var tipY = d.source.y - ((dY * (pythag2 - nodeTargetSize)) / pythag2);

    return "M" + mx2 + "," + my2 + "L" + adjX1 + "," + adjY1 + "L" + headX1 + "," + headY1 + "L" + tipX + "," + tipY + "L" + headX2 + "," + headY2 + "L" + adjX2 + "," + adjY2 + "L" + mx1 + "," + my1 + "z";
};
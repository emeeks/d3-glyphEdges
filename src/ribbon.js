export default function(d, bodySize) {
        var diffX = d.target.y - d.source.y;
        var diffY = d.target.x - d.source.x;

        var angle0 = ( Math.atan2( diffY, diffX ) + ( Math.PI / 2 ) );
        var angle1 = angle0 - ( Math.PI / 2 );
        var angle2 = angle0 + ( Math.PI / 2 );

        var mx1 = d.source.x + (bodySize * Math.cos(angle1));
        var my1 = d.source.y - (bodySize * Math.sin(angle1));
        var mx2 = d.source.x + (bodySize * Math.cos(angle2));
        var my2 = d.source.y - (bodySize * Math.sin(angle2));

        var mx3 = d.target.x - (bodySize * Math.cos(angle1));
        var my3 = d.target.y + (bodySize * Math.sin(angle1));
        var mx4 = d.target.x - (bodySize * Math.cos(angle2));
        var my4 = d.target.y + (bodySize * Math.sin(angle2));

        return "M" + mx1 + "," + my1 + "L" + mx2 + "," + my2 + "L" + mx3 + "," + my3 + "L" + mx4 + "," + my4 + "z";
}
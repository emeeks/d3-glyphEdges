(function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define('d3-glyphEdge', ['exports'], factory) :
        factory((global.d3_glyphEdge = {}));
}(this, function (exports) { 'use strict';

        function halfArrow(d, nodeTargetSize, bodySize, headSize) {
            var diffX = d.target.y - d.source.y;
            var diffY = d.target.x - d.source.x;

            var headDistance = headSize * 3;

            var angle0 = ( Math.atan2( diffY, diffX ) + ( Math.PI / 2 ) );
            var angle1 = angle0 - ( Math.PI / 2 );
            var angle2 = angle0 + ( Math.PI / 2 );

            var x1 = d.source.x + (headSize * Math.cos(angle1));
            var y1 = d.source.y - (headSize * Math.sin(angle1));

            var x3 = d.target.x - (headSize * Math.cos(angle1));
            var y3 = d.target.y + (headSize * Math.sin(angle1));

            var mx1 = d.source.x + (bodySize * Math.cos(angle1));
            var my1 = d.source.y - (bodySize * Math.sin(angle1));
            var mx2 = d.source.x + (bodySize * Math.cos(angle2));
            var my2 = d.source.y - (bodySize * Math.sin(angle2));

            var mx3 = d.target.x + (bodySize * Math.cos(angle1));
            var my3 = d.target.y - (bodySize * Math.sin(angle1));

            var dY = d.source.y - d.target.y;
            var dX = d.source.x - d.target.x;

            var midDiffY1 = my1 - my3;
            var midDiffX1 = mx1 - mx3;

            var diffY1 = y1 - y3;
            var diffX1 = x1 - x3;

            var pythag = Math.sqrt((midDiffX1 * midDiffX1) + (midDiffY1 * midDiffY1));
            var pythag2 = Math.sqrt((dX * dX) + (dY * dY));

            var adjX1 = mx2 - ((midDiffX1 * (pythag - headDistance - nodeTargetSize)) / pythag);
            var adjY1 = my2 - ((midDiffY1 * (pythag - headDistance - nodeTargetSize)) / pythag);

            var headX1 = x2 - ((diffX1 * (pythag - headDistance - nodeTargetSize)) / pythag);
            var headY1 = y2 - ((diffY1 * (pythag - headDistance - nodeTargetSize)) / pythag);

            var tipX = d.source.x - ((dX * (pythag2 - nodeTargetSize)) / pythag2);
            var tipY = d.source.y - ((dY * (pythag2 - nodeTargetSize)) / pythag2);

            return "M" + d.source.x + "," + d.source.y + "L" + mx2 + "," + my2 + "L" + adjX1 + "," + adjY1 + "L" + headX1 + "," + headY1 + "L" + tipX + "," + tipY + "L" + d.source.x + "," + d.source.y + "z";
        };

        function lineArc(d) {
          var dx = d.target.x - d.source.x,
              dy = d.target.y - d.source.y,
              dr = Math.sqrt(dx * dx + dy * dy);
          return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
        };

        function ribbon(d, bodySize) {
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

        function taffy(d, nodeSourceSize, nodeTargetSize, midpointSize) {
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

        function nail(d, nodeSize) {
            var diffX = d.target.y - d.source.y;
            var diffY = d.target.x - d.source.x;

            var angle0 = ( Math.atan2( diffY, diffX ) + ( Math.PI / 2 ) );
            var angle1 = angle0 - ( Math.PI / 2 );
            var angle2 = angle0 + ( Math.PI / 2 );

            var x1 = d.source.x + (nodeSize * Math.cos(angle1));
            var y1 = d.source.y - (nodeSize * Math.sin(angle1));
            var x2 = d.source.x + (nodeSize * Math.cos(angle2));
            var y2 = d.source.y - (nodeSize * Math.sin(angle2));

            return "M" + x1 + "," + y1 + "L" + x2 + "," + y2 + " L " + d.target.x + "," + d.target.y + "z";
        };

        function comet(d, nodeSize) {
            var diffX = d.target.y - d.source.y;
            var diffY = d.target.x - d.source.x;

            var angle0 = ( Math.atan2( diffY, diffX ) + ( Math.PI / 2 ) );
            var angle1 = angle0 - ( Math.PI / 2 );
            var angle2 = angle0 + ( Math.PI / 2 );

            var x1 = d.target.x + (nodeSize * Math.cos(angle1));
            var y1 = d.target.y - (nodeSize * Math.sin(angle1));
            var x2 = d.target.x + (nodeSize * Math.cos(angle2));
            var y2 = d.target.y - (nodeSize * Math.sin(angle2));

            return "M" + x1 + "," + y1 + "L" + x2 + "," + y2 + " L " + d.source.x + "," + d.source.y + "z";
        };

        function arrowhead(d, nodeTargetSize, bodySize, headSize) {
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

        function parallel(d, sourceSize, targetSize, edgeNumber) {

          var diffX = d.target.y - d.source.y;
          var diffY = d.target.x - d.source.x;

          var angle0 = ( Math.atan2( diffY, diffX ) + ( Math.PI / 2 ) );
          var angle1 = angle0 + ( (Math.PI * 0.75) + (edgeNumber * 0.25) );
          var angle2 = angle0 + ( (Math.PI * 0.25) - (edgeNumber * 0.25) );

          var x1 = d.source.x + (sourceSize * Math.cos(angle1));
          var y1 = d.source.y - (sourceSize * Math.sin(angle1));
          var x2 = d.target.x + (targetSize * Math.cos(angle2));
          var y2 = d.target.y - (targetSize * Math.sin(angle2));

          return {source: {x: x1, y: y1}, target: {x: x2, y: y2}};

        }

        function offset(d, nodeSize) {
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

        function particle(d, path, pathWidth, speed) {
            pathWidth = pathWidth / 2;

            d.particles = d.particles.filter(function (d) {return d.current < path.getTotalLength()});

            if (d.frequency < 1) {
                if (Math.random() < d.frequency) {
                    pushParticle();
                }
            } else {
                for (var x = 0; x < d.frequency; x++) {
                    pushParticle();
                }
            }

            function pushParticle() {
                d.particles.push({current: 0, xOffset: pathWidth - (pathWidth * Math.random() * 2), yOffset: pathWidth - (pathWidth * Math.random() * 2)});
            }

            d.particles.forEach(function (particle) {
                particle.current = particle.current + speed;
                var currentPosition = path.getPointAtLength(particle.current);
                particle.x = currentPosition.x + particle.xOffset;
                particle.y = currentPosition.y + particle.yOffset;
            });
        };

        var d = {
        	arrowhead: arrowhead,
        	comet: comet,
        	nail: nail,
        	taffy: taffy,
        	ribbon: ribbon,
        	lineArc: lineArc,
        	halfArrow: halfArrow
        };

        var project = {
        	offset: offset,
        	parallel: parallel
        }

        var mutate = {
        	particle: particle
        }

        var version = "1.1.0";

        exports.version = version;
        exports.d = d;
        exports.project = project;
        exports.mutate = mutate;

}));
export default function(d, path, pathWidth, speed) {
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
;(function() {
  var archemedesSpiral = {
    a: Math.random() * 20 + 2,
    b: Math.random() * 20 + 4,
    iterations: 0,
    maxIterations: 2000,
    intervalID: null,
    drawSpiral: function() {
      var c = document.getElementById('c');
      c.height = window.innerHeight * .99;
      c.width = window.innerWidth * .99;
      var context = c.getContext("2d");
      var centerx = context.canvas.width / 2;
      var centery = context.canvas.height / 2;
      context.clearRect(0, 0, c.width, c.height);
      context.moveTo(centerx, centery);
      context.beginPath();
      context.strokeStyle = "#F62459";

      archemedesSpiral.intervalID = setInterval(function() {
        angle = 0.1 * archemedesSpiral.iterations;
          x = centerx + (archemedesSpiral.a + archemedesSpiral.b * angle) * Math.cos(angle);
          y = centery + (archemedesSpiral.a + archemedesSpiral.b * angle) * Math.sin(angle);
          context.lineTo(x, y);
          context.stroke();
          console.log('hi)');
          archemedesSpiral.iterations++;
          if (archemedesSpiral.iterations > archemedesSpiral.maxIterations) {
            clearInterval(archemedesSpiral.intervalID);
          }
      }, 5);
    }
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    archemedesSpiral.drawSpiral();
  }, false);
})();
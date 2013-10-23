$(document).ready(function() {
    var a = Math.random() * 20 + 2;
    var b = Math.random() * 20 + 4;

    function drawSpiral() {
        var c = document.getElementById('c');
        c.height = window.innerHeight * .99;
        c.width = window.innerWidth * .99;
        var context = c.getContext("2d");
        var centerx = context.canvas.width / 2;
        var centery = context.canvas.height / 2;
        context.clearRect(0, 0, c.width, c.height);
        context.moveTo(centerx, centery);
        context.beginPath();
        context.strokeStyle = "#9CFF00";

        for (i = 0; i < 2000; i++) {
            angle = 0.1 * i;
            x = centerx + (a + b * angle) * Math.cos(angle);
            y = centery + (a + b * angle) * Math.sin(angle);
            context.lineTo(x, y);
            context.stroke();
        }
    }
    drawSpiral();
});

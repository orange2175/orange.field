var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

function loop() {

 ctx.fillStyle = "#ccc";
 ctx.fillRect(0,0,canvas.width, canvas.height);
}

loop();
const canvasEl = document.querySelector("canvas");
const canvasContext = canvasEl.getContext("2d");

canvasEl.width = 1500;
canvasEl.height = 720;
// --------------------------------------------------------------------
function drawRact(xP, yP, width, height, color) { 
    canvasContext.fillStyle = color
    canvasContext.fillRect(xP, yP, width, height)
}

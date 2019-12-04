//se inicia el canvas guardando en variable
let canvas = document.getElementById('canvas');
// se indica que es en 2d el canvas
let ctx = canvas.getContext("2d");

//creamos funciones que dibujaran la figura en el canvas

// dibujo en color rojo
function dibujo(x,y,z,w) {
    ctx.fillStyle='red';
    ctx.fillRect(x,y,z,w);
};

dibujo(350,100,50,50);
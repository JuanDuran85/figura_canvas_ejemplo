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

// dibujo en color amarillo
function dibujo2(x,y,z,w) {
    ctx.fillStyle='yellow';
    ctx.fillRect(x,y,z,w);
};

dibujo(350,100,50,50);
dibujo2(365,150,20,30);
dibujo(340,180,70,80);
dibujo(285,180,60,15);
dibujo(410,180,60,15);
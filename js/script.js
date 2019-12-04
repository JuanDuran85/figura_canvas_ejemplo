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

// dibujo en color azul
function dibujo3(x,y,z,w) {
    ctx.fillStyle='blue';
    ctx.fillRect(x,y,z,w);
};

let posicion = 0;

setInterval (() => {
    //limpiamos el canvas
    ctx.clearRect(0, 0, 1000, 800);

    dibujo(350+posicion,100+posicion,50,50);
    dibujo2(365+posicion,150+posicion,20,30);
    dibujo(340+posicion,180+posicion,70,80);
    dibujo(285+posicion,180+posicion,60,15);
    dibujo(410+posicion,180+posicion,60,15);
    dibujo3(340+posicion,250+posicion,10,50);
    dibujo3(400+posicion,250+posicion,10,50);

    posicion++;

    if (posicion > 300) {
        posicion = 0;
    };
},30);

let punto = (event) => {
    $('#aqui').text(`X:${event.pageX} + Y:${event.pageY}`);
};

$('#canvas').click(punto);

let esconderTexto_btn1 = document.getElementById("esconderTexto_btn1");

let esconderTexto1 = document.getElementById("esconderTexto1");

esconderTexto_btn1.addEventListener("click", mostrarProcedimientos);

function mostrarProcedimientos() {
    esconderTexto1.classList.toggle("aparecer1");
}


let escondertexto_btn = document.getElementById("escondertexto_btn");

let escondertexto = document.getElementById("escondertexto");

escondertexto_btn.addEventListener("click", mostrarContactos);

function mostrarContactos() {
    escondertexto.classList.toggle("aparecer");
}



let misdatos_btn  = document.getElementById("misdatos_btn");

let datosescondido = document.getElementById("datosescondido");

misdatos_btn.addEventListener("click", mostrarDatos);

function mostrarDatos() {
    datosescondido.classList.toggle("datoaparecido");
}
 


let red_btn = document.getElementById("red_btn");

let redescondida = document.getElementById("redescondida");

red_btn.addEventListener("click", mostrarRed);

function mostrarRed() {
    redescondida .classList.toggle("redaparecida");
}
 

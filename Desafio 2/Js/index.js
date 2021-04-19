const pantalla_numero_guardado = document.getElementById("numero_guardado");
const pantalla_operador = document.getElementById("operador");
const pantalla_numero_actual = document.getElementById("numero_actual");
const bt_numeros = document.querySelectorAll(".numero");
const bt_operaciones = document.querySelectorAll(".operacion");

const pantalla = new Pantalla(pantalla_numero_guardado, pantalla_operador, pantalla_numero_actual);

bt_numeros.forEach(boton => {
    boton.addEventListener("click", () =>  pantalla.agregar_numero(boton.innerHTML));
});

bt_operaciones.forEach(boton => {
    boton.addEventListener("click", () => pantalla.computar(boton.value));
});
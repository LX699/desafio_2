class Pantalla {
    constructor(pantalla_numero_guardado, pantalla_operador, pantalla_numero_actual) {
        this.pantalla_numero_guardado = pantalla_numero_guardado;
        this.pantalla_numero_actual = pantalla_numero_actual;
        this.pantalla_operador = pantalla_operador;
        this.calculadora = new Calculadora();
        this.numero_guardado = "";
        this.operador = "";
        this.numero_actual = "";
        this.signos= {
            sumar: "+",
            restar: "-",
            multiplicar: "x",
            dividir: "/"
        }

    }

    agregar_numero(numero) {
        if (numero == "." && this.numero_actual.includes(".")) return
        this.numero_actual = this.numero_actual.toString() + numero.toString();
        this.visualizar_valores();

    }

    visualizar_valores() {
        this.pantalla_numero_guardado.textContent = this.numero_guardado;
        this.pantalla_operador.textContent = this.signos[this.operador] || "";
        this.pantalla_numero_actual.textContent = this.numero_actual;
    }

    borrar_ultimo_digito() {
        this.numero_actual = this.numero_actual.toString().slice(0, -1);
        this.visualizar_valores();
    }

    multiplicar_por_menos1(){
        const numero_actual = parseFloat(this.numero_actual) * -1;
        if(isNaN(numero_actual)) return;
        this.numero_actual = numero_actual;
        this.visualizar_valores();

    }

    limpiar_pantalla() {
        this.numero_guardado = "";
        this.operador = "";
        this.numero_actual = "";
        this.visualizar_valores();
    }

    calcular() {
        const numero_guardado = parseFloat(this.numero_guardado);
        const numero_actual = parseFloat(this.numero_actual);

        if( isNaN(numero_actual) || isNaN(numero_guardado)) return;

        this.numero_actual = this.calculadora[this.operador](numero_guardado,numero_actual);

    }

    computar(tipo){
        this.operador !== "igual" && this.calcular();
        this.operador = tipo;
        this.numero_guardado = this.numero_actual || this.numero_guardado;
        this.numero_actual = "";
        this.visualizar_valores();
    }

}
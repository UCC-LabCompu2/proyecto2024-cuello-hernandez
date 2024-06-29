/**
 * La funcion sirve para comprobar que la fecha indicada sea valida y si esta es valida se lleva a la pestaña correspondiente
 * @comprobarinputs
 * (number) valor    El valor de los imputs segun el dia, mes y ano
 */
function comprobarinputs() {

    const inputDia = document.getElementById('dia').value;
    const inputMes = document.getElementById('mes').value;
    const inputAno = document.getElementById('año').value;

    if (isNaN(inputDia) || isNaN(inputMes) || isNaN(inputAno) || inputDia < 1 || inputDia > 31 || inputMes < 1 || inputMes > 12 || inputAno > 2016 || inputAno < 1900) {
        window.open("Error.html");
    } else {
        switch (inputMes) {
            case "1":
                window.open("Horoscopo segun el mes/Enero.html");
                break;
            case "2":
                window.open("Horoscopo segun el mes/Febrero.html");
                break;
            case "3":
                window.open("Horoscopo segun el mes/Marzo.html");
                break;
            case "5":
                window.open("Horoscopo segun el mes/Junio.html");
                break;
            case "6":
                window.open("Horoscopo segun el mes/Junio.html");
                break;
            case "7":
                window.open("Horoscopo segun el mes/Julio.html");
                break;
            case "8":
                window.open("Horoscopo segun el mes/Agosto.html");
                break;
            case "9":
                window.open("Horoscopo segun el mes/Septiembre.html");
                break;
            case "10":
                window.open("Horoscopo segun el mes/Octubre.html");
                break;
            case "11":
                window.open("Horoscopo segun el mes/Noviembre.html");
                break;
            case "12":
                window.open("Horoscopo segun el mes/Diciembre.html");

        }


    }


}

/**
 *La funcion sirve para dibujar un circulo violeta con canvas
 * @dibujocanvas
 */


function dibujocanvas() {
    const canvas = document.getElementById('Canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'purple';
    ctx.beginPath();
    ctx.arc(100, 50, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}




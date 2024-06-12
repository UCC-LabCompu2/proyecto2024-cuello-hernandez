/**
 * La funcion sirve para comprobar que la fecha indicada sea valida y si esta es valida se lleva a la pestaña correspondiente
 * @comprobarinputs
 * preguntar a profe que iria bien aca :)
 */
function comprobarinputs() {

    let inputDia = document.getElementById('dia');
    let inputMes = document.getElementById('mes');
    let inputAno = document.getElementById('año');

    let diavalido;
    if(Number.isNaN(inputDia) && inputDia.value.trim() === ""){
        diavalido= true;
    }
    let mesvalido;
    if(Number.isNaN(inputMes) && inputMes.value.trim() !== ""){
        mesvalido=true;
    }
    let anovalido;
    if(Number.isNaN(inputAno) && inputAno.value.trim() !== ""){
        anovalido= true;
    }

    if (diavalido && mesvalido && anovalido) {
        if (inputMes.value.trim() === 1) {
            window.location.href = "Horoscopo segun el mes/Enero.html";
        }
        if (inputMes.value.trim() === 2) {
            window.location.href = "Horoscopo segun el mes/Febrero.html";
        }
        if (inputMes.value.trim() === 3) {
            window.location.href = "Horoscopo segun el mes/Marzo.html";
        }
        if (inputMes.value.trim() === 4) {
            window.location.href = "Horoscopo segun el mes/Abril.html";
        }
        if (inputMes.value.trim() === 5) {
            window.location.href = "Horoscopo segun el mes/Mayo.html";
        }
        if (inputMes.value.trim() === 6) {
            window.location.href = "Horoscopo segun el mes/Junio.html";
        }
        if (inputMes.value.trim() === 7) {
            window.location.href = "Horoscopo segun el mes/Julio.html";
        }
        if (inputMes.value.trim() === 8) {
            window.location.href = "Horoscopo segun el mes/Agosto.html";
        }
        if (inputMes.value.trim() === 9) {
            window.location.href = "Horoscopo segun el mes/Septiembre.html";
        }
        if (inputMes.value.trim() === 10) {
            window.location.href = "Horoscopo segun el mes/Octubre.html";
        }
        if (inputMes.value.trim() === 11) {
            window.location.href = "Horoscopo segun el mes/Noviembre.html";
        }
        if (inputMes.value.trim() === 12) {
            window.location.href = "Horoscopo segun el mes/Diciembre.html";
        }
    } else {
        window.location.href = "Error.html";
    }


}
    

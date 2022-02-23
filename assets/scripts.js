let obj = {
    botaoStart: document.getElementsByClassName("button1")[0],
    botaoReset: document.getElementsByClassName("button2")[0],
    botaoPause: document.getElementsByClassName("button3")[0],
    segundos: document.getElementById("span3"),
    minutos: document.getElementById("span2"),
    horas: document.getElementById("span1")
}

let segundos = 0;
let minutos = 0;
let horas = 0;
let tempo = "";

obj.horas.innerHTML = "0" + horas;
obj.minutos.innerHTML = "0" + minutos;
obj.segundos.innerHTML = "0" + segundos;

obj.botaoReset.addEventListener("click", resetar)
obj.botaoStart.addEventListener("click", iniciar);
obj.botaoPause.addEventListener("click", parar);


function resetar() {
    segundos = 0;
    horas = 0;
    minutos = 0;
    obj.horas.innerHTML = "0" + horas;
    obj.minutos.innerHTML = "0" + minutos;
    obj.segundos.innerHTML = "0" + segundos;
}

function parar() {
    clearInterval(tempo);
}

function iniciar() {
    tempo = setInterval(atualizarHora, 0.001);
}

function atualizarHora() {
    segundos = segundos + 1;
    if (segundos == 60) {
        minutos = minutos + 1;
        segundos = 0;
        obj.segundos.innerHTML = segundos;
        if (minutos == 60) {
            minutos = 0;
            obj.minutos.innerHTML = minutos
            horas = horas + 1;
            obj.horas.innerHTML = horas;
        } else {
            obj.minutos.innerHTML = minutos
        }
    } else {
        obj.segundos.innerHTML = segundos;
    }
}

let lampada = document.querySelector("#lampada")
let isBroken = false

function on() {
    if (!isBroken) {
        lampada.src = "ligada.png"
    }
}

function off() {
    if (!isBroken) {
        lampada.src = "desligada.png"
    }
}

function piscar() {
    let intervalo = 0

    if (!isBroken) {
        for (let i = 1; i <= 100; i++) {
            intervalo += 1
            setTimeout('lampada.src = "ligada.png"', intervalo)
            intervalo += 1
            setTimeout('lampada.src = "desligada.png"', intervalo)
        }
    }
}

function quebrar() {
    lampada.src = "quebrada.png"
    isBroken = true
}

lampada.addEventListener("mouseover", on)
lampada.addEventListener("mouseleave", off)
lampada.addEventListener("dblclick", quebrar)
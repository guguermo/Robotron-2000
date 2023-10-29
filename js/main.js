const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 25,
        "poder": 30,
        "energia": -20,
        "velocidade": -10
    },

    "blindagem": {
        "forca": 40,
        "poder": 20,
        "energia": 0,
        "velocidade": -25
    },
    "nucleos":{
        "forca": 0,
        "poder": 15,
        "energia": 50,
        "velocidade": -30
    },
    "pernas":{
        "forca": 25,
        "poder": 20,
        "energia": -30,
        "velocidade": 45
    },
    "foguetes":{
        "forca": 0,
        "poder": 40,
        "energia": 0,
        "velocidade": -5
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    }   else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica]
    })
}
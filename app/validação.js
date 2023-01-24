
function verificacaoDeChute(chute) {
    const numero = +chute

    if (Number.isNaN(numero)) {
       elementoChute.innerHTML += '<div>Este não é um valor válido 🤔</div>'
       return
    }

    if (numeroMaiorQuePermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido! O número secreto está escondido entre ${menorValor} e ${maiorValor}.</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Parabéns, você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}.<br><br><br>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button> 
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }

}

function numeroMaiorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
     
})
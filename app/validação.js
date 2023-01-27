function verificacaoDeChute(chute) {
    let elementoChute = document.getElementById('chute')
    if (chute === 'game over') {
        document.body.innerHTML = `
            <h2>GAME OVER</h2>
            <h3>Pressione o botão se deseja jogar novamente com outro número secreto!</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
        document.body.style.backgroundColor('red')
    }
    
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
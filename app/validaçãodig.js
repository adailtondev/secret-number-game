let botao = document.getElementById('botao')
var teclado = document.getElementById('teclado')
var inputDig = document.getElementById('chute-digitado')

teclado.addEventListener('click', e => {
    inputDig.style.display = 'flex'
    botao.style.display = 'flex'
})

botao.addEventListener('click', e => {
    e.preventDefault()
    let chuteDigitado = document.getElementById('chute-digitado').value
    elementoChute.innerHTML = ''
    exibeChuteNaTela(chuteDigitado)
    verificacaoDeChute(chuteDigitado)
})


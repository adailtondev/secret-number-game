var elementoChute = document.getElementById('chute')
var microfone = document.getElementById('microfone')

microfone.addEventListener('click', e => {
    window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-Br';
    recognition.start();

    recognition.addEventListener('result', onSpeach)

    function onSpeach(e) {
        chute = e.results[0][0].transcript  
        exibeChuteNaTela(chute)
        verificacaoDeChute(chute)
    }

    



    recognition.addEventListener('end', () => recognition.start())
})

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}
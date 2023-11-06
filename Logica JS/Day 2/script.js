var btnEnviar = document.querySelector('#enviar')

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault()

    var nome = document.querySelector('#nome').value
    var idade = document.querySelector('#idade').value
    var linguagem = document.querySelector('#linguagem').value
    var resposta = document.querySelector('#resposta')

    resposta.textContent  = `
        Olá ${nome}, você tem ${idade} anos e já está 
        aprendendo ${linguagem}!
    `

    var label = document.createElement('label')
    label.classList.add('.continue')
    label.setAttribute('for', 'novaEscolha')
    label.textContent = `Você gosta de estudar ${linguagem}? 
        Responda com o número 1 para SIM ou 2 para NÃO.
    `

    var input = document.createElement('input')
    input.classList.add('.resposta')
    input.setAttribute("type", "text")
    input.setAttribute('name', 'novaEscolha')

    document.getElementById('bankai').appendChild(label)
    document.getElementById('bankai').appendChild(input)

    input.addEventListener('focusout', (e) => {
        var valorResposta = e.target.value;
        var respostaFinal = document.createElement('p');

        if (valorResposta === '1') { // Compare com uma string
            respostaFinal.textContent = 'Muito bom! Continue estudando e você terá muito sucesso.';
            document.getElementById('bankai').appendChild(respostaFinal)
        } else if (valorResposta === '2') { // Compare com uma string
            respostaFinal.textContent = 'Ahh que pena... Já tentou aprender outras linguagens?';
            document.getElementById('bankai').appendChild(respostaFinal)
        }

    })

})

var botao = document.getElementById('botao')
var texto = document.getElementById('texto')

botao.addEventListener('click', mudar)

function mudar() {
    var corAtual = document.body.style.background
    if (corAtual === 'yellow') {
        document.body.style.background = 'orange'
        texto.style.color = 'blue'
    } else if (corAtual === 'orange') {
        document.body.style.background = 'red'
        texto.style.color = 'yellow'
    } else if (corAtual === 'red') {
        document.body.style.background = 'purple'
        texto.style.color = 'pink'
    } else if (corAtual === 'purple') {
        document.body.style.background = 'blue'
        texto.style.color = 'orange'
    } else if (corAtual === 'blue') {
        document.body.style.background = 'green'
        texto.style.color = 'pink'
    } else if (corAtual === 'green') {
        document.body.style.background = 'white'
        texto.style.color = 'black'
    } else {
        document.body.style.background = 'yellow'
        texto.style.color = 'red'
    }
}

// linha 8 esta vendo se o fundo esta azul, se nao é BLUE (false).
var agora = new Date()
var hora = agora.getHours()
var texto = window.document.getElementById('texto')
var imagem = window.document.getElementById('foto')

texto.innerHTML = `Agora são ${hora} horas`

if (hora < 12) {
    texto.innerHTML += ", Bom dia!"
    document.body.style.background = '#e2cd9f'
} else if (hora < 18) {
    texto.innerHTML += ", Boa tarde!"
    imagem.src = 'imagens/tarde.png' 
    imagem.alt = 'Imagem de um final de tarde'
    window.document.body.style.background = '#A17461'
} else {
    texto.innerHTML += ", Boa Noite"
    imagem.src = 'imagens/noite.png'
    imagem.alt = 'Imagem de um ceu estrelado'
    window.document.body.style.background = '#323B46'
}

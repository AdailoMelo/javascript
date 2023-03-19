function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nas = document.getElementById("nascimento").value
    var res = document.getElementById("res")

    if (nas.toString().length == 0 || nas > ano || nas < 1900) {
        alert('[ERRO] Valor inválido, verifique os dados e tente novamente')
    } else {
        var idade = ano - nas
        var sexo = document.getElementsByName('sexo')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'um homem'
            if (idade < 5) {
                img.setAttribute('src', 'imagens/masculino/bebe.png')
            } else if (idade < 14) {
                img.setAttribute('src', 'imagens/masculino/crianca.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/masculino/jovem.png')
            } else if (idade < 55) {
                img.setAttribute('src', 'imagens/masculino/adulto.png')
            } else {
                img.setAttribute('src', 'imagens/masculino/idoso.png')
            }

        } else if (sexo[1].checked) {
            genero = 'uma mulher'
            if (idade < 5) {
                img.setAttribute('src', 'imagens/feminino/bebe.png')
            } else if (idade < 14) {
                img.setAttribute('src', 'imagens/feminino/crianca.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/feminino/jovem.png')
            } else if (idade < 55) {
                img.setAttribute('src', 'imagens/feminino/adulta.png')
            } else {
                img.setAttribute('src', 'imagens/feminino/idosa.png')
            }
        }

        res.style.textAlign = 'center'
        img.style.borderRadius = '50%'
        img.style.width = '350px'

        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
        res.appendChild(img)
    }
}
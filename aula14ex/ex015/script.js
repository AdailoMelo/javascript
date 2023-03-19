function passo() {
    var res = document.getElementById('res')
    var inicio = document.getElementById('inicio').value;
    var fim = document.getElementById('fim').value;
    var caminho = document.getElementById('caminho').value;
    var mostrar = ''

    if (inicio.toString().length == 0 || fim.toString().length == 0 || caminho.toString().length == 0) {
        alert('Algun valor faltando')
    } else {
        var c = inicio
        while (c < fim) {
            mostrar += `${c}`
            c += caminho
        }
        res.innerHTML = mostrar
    }
}
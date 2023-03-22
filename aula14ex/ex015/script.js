function contar(){
    var res = document.getElementById('res')
    var i = document.getElementById('inicio').value.toString()
    var f = document.getElementById('fim').value.toString()
    var p = document.getElementById('caminho').value.toString()

    if (i.length == 0 || f.length == 0 || p.length == 0) {
        alert('Errou seu burro')
    } else {
        var inicio = Number(i)
        var fim = Number(f)
        var passo = Number(p)
        var mostrar = ''

        if (passo <= 0) {
            alert('caminho não pode ser 0 ou menor que 0, convertido para 1')
            passo = 1
        }
        
        if (inicio < fim) {
            while (inicio <= fim) {
                mostrar += `${inicio} => `
                inicio += passo
            }
            res.innerHTML = `${mostrar} FIM`
        } else {
            while (fim <= inicio) {
                mostrar += `${inicio} => `
                inicio -= passo
            }
            res.innerHTML = `${mostrar} FIM`
        }
    }
}
function calcular() {
    var res = document.getElementById('res')
    var num = Number(document.getElementById('num').value)
    var cont = 0
    var mostra = ''
    while (cont <= 10) {
        mostra += `${num} x ${cont} = ${num * cont} <br>`
        cont++
    }
    res.innerHTML = mostra
}
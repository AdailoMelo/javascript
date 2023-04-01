/*
ANALISADOR DE NÚMEROS

Receber os valores no input e colocar na lista:

Calcular:

    Maior número informado
    Menor número informado
    Somando todos os valores
    Média dos valores

*/

var res = document.getElementById('res')
var lista = document.getElementById('lista')
let numeros = [] 

function main() {
    var num = Number(document.getElementById('num').value)
    if (num > 0 && num <= 100) {
        adiciona(num)
    } else {
        alert('[ERRO] Valor invalido')
    }
}

function adiciona(n) {
    if (numeros.indexOf(n) == -1) {
        numeros.push(n)
        
        //Criando o option e adicionando valores
        let item = document.createElement('option')
        item.text = `Valor ${n} registrado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('O número ja está na lista')
    }   
}

function analisar() {
    if (numeros.length > 0) {
        var menor = 0
        var maior = 0
        var soma = 0
        var media = 0

        for(var pos in numeros) {
            if (pos == 0) {
                maior = numeros[pos]
                menor = numeros[pos]
            } else {
                if (numeros[pos] > maior) {
                    maior = numeros[pos]
                }

                if (numeros[pos] < menor) {
                    menor = numeros[pos]
                }
            }
            soma += numeros[pos]
        }
        media = soma / numeros.length
        res.innerHTML = `O maior número é ${maior} <br> O menor número é ${menor} <br> A soma dos número é ${soma} <br> A média dos números é ${media}`

    } else {
        res.innerHTML = 'A lista está vazia'
    }
    
}
var num = [8, 1, 7, 4, 2, 9]
num.sort()

for(var pos in num){
    console.log(`Posição ${pos}: ${num[pos]}`)
}

var pos = num.indexOf(10)
if (pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor foi encontrado na posição: ${pos}`)
}
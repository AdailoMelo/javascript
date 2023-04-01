let valores = [5, 8, 2, 9, 3]
valores.sort()
valores.push(1)
for(var pos in valores) {
    console.log(`Posição ${pos}, Valor ${valores[pos]}`)
}
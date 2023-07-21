let valores = [8, 1, 7, 4, 2, 9]

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`Exibindo a posição ${pos}: ${valores[pos]}`)
}

console.log('=================================')

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log('=================================')

let pos = valores.indexOf(5)

if (pos == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O valor está na posição ${pos}`)
}


let vetor = []

vetor.push('Primeiro', 'Segundo', 'Terceiro')

for (let pos in vetor) {
    console.log(vetor[pos])
}
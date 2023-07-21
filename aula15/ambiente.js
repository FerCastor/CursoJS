let num = [5, 8, 4]

console.log(`Nosso vetor é o ${num}`)
console.log(num)

num[3] = 6 // Adiciona o valor na posição declarada entre colchetes
console.log(num)

num.push(7) // Adiciona o valor declarado ao final da array
console.log(num)


num.length // Verifica quantos elementos existem dentro do array declarado
console.log(num.length)


num.sort() // Coloca o array em ordem crescente
console.log(num)


for (let pos = 0; pos < num.length; pos++) {    // Exibe o vetor item a item na tela
    console.log(num[pos])
}

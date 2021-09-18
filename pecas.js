const listadepecas = ["peca de testa", 'AB', 'Peca B']

console.log('quantidades de pecas')

if (listadepecas.legth <= 10) {
    console.log('as peças podem ser cadastradas')
}

console.log('quantidades de caracteres')

for (let index = 0; index < listadepecas.length; index++) {
    const pecaAtual = listadepecas[index];
    if (pecaAtual.length < 3) {
        console.log(pecaAtual + ' a peça possui nome inferior a 3 caracteres e não pode ser cadastrada.')
    } else {
        console.log(pecaAtual + ': a peça pode ser cadastrada')
    }
}

console.log('peso da peça')

const pesodapecaEmgramas = 50;

if (pesodapecaEmgramas >= 100) {
    console.log('peso suficiente.')
} else {
console.log('valor insuficiente')
}
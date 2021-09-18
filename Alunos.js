const quantidadeDeAlunos = 14;

for (let index = 0; index <= quantidadeDeAlunos; index++) {
    if (index === 0) {
        console.log('o número é zeró');
    } else if (index % 2 === 0) {
        console.log('o número é par' + index);
    } else {
        console.log('o número e impar' + index);
    }
}
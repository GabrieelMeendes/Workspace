function Calcula(nota) {
    if (nota < 7)
        console.log("Reprovado")
    else
        console.log("Aprovado")
};

const pessoa = {
    nome: `Gabriel`,
    sobrenome: `Mendes`,
    idade: 31,
    endereco: {
        Rua: `Marina Frutuoso`,
        Cep: `98251-500`
    }
}

if (pessoa.nome == `Gabriel` && pessoa.sobrenome == `Mendes`) {
    if (pessoa.idade < 30) {
        Calcula(8)
    }
    else {
        console.log(`Voce é mt velho pra estudar !!! `)
    }
}


console.log(pessoa.endereco)

const lista = [`lista1`, `lista2`, `lista3`]
console.log(lista)



function TesteSeVerdade(teste) {
    if (teste) {
        console.log(`É verdade ...`)
    }
    else {
        console.log(`é falso ...`)
    }
}

TesteSeVerdade(null)
TesteSeVerdade(undefined)
TesteSeVerdade(0)
TesteSeVerdade(NaN)
TesteSeVerdade(10)

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirresultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log(`Otima nota`)
    }
    else if (nota.entre(7, 8)) {
        console.log(`Boa nota `)
    }
    else if (nota.entre(6, 7)) {
        console.log(`Boa nota `)
    }
    else if (nota.entre(4, 5)) {
        console.log(`bad nota `)
    }
    else if (nota.entre(1, 3)) {
        console.log(`REPROVADO`)
    }
    else {
        console.log(`NOTA INVALIDA`)
    }
    console.log(`Fim`)
}

imprimirresultado(9)
imprimirresultado(7)
imprimirresultado(5)
imprimirresultado(4)
imprimirresultado(3)

const EscolheOmaisForte = function (forca) {

    switch (Math.floor(forca)) {
        case 10:
            console.log(`Voce tem 10 de forca`)
            break
        case 9: console.log(`Voce tem 9 de forca`)
            break
        case 8: console.log(`Voce tem 8 de forca`)
            break
        case 7: console.log(`Voce tem 7 de forca`)
            break
        case 6: console.log(`Voce tem 6 de forca`)
            break
        case 5: console.log(`Voce tem 5 de forca`)
            break
        case 4: console.log(`Voce tem 4 de forca`)
            break
        case 3: console.log(`Voce tem 3 de forca`)
            break
        case 2: console.log(`Voce tem 2 de forca`)
            break
        case 1: console.log(`Voce tem 1 de forca`)
            break
        case 0: console.log(`Voce tem 0 de forca`)
            break
    }
}

for (a = 0; a < 10; a++) {
    EscolheOmaisForte(a)
}




const RandomNumer = function (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
var opcao = 0

while (opcao != 3) {
    opcao = RandomNumer(-1, 5)
    console.log(opcao)

}

console.log(``)
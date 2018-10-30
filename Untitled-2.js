// Gera o Lancamento
class Lancamento {
    constructor(nome = 'Generico', valor = 0, validade = "10/11/18"){
        this.nome = nome
        this.valor = valor
        this.validade = validade

    }
}
// Gera o ciclo financeiro
class CicloFinanceiro{
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    // Contabiliza os lancamentos - Adiciona 1 no Array lancamentos []
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    // Faz a sumula dos Valor dos Lancamentos
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

// Adiciona Lancameto
const salario = new Lancamento("Salario" , 45000,"10/11/18")
const contaDeLuz = new Lancamento('luz', -200, "10/11/18")
const devendo = new Lancamento("Drogas", -42000, "10/11/18")

// Gera um novo Ciclo financeiro e adiciona lancamentos
const contas = new CicloFinanceiro(6,2018)
contas.addLancamentos(salario, contaDeLuz,devendo)
console.log(contas.sumario())
console.log(contas)

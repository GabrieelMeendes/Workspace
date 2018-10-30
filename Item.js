class NovoItem {
    constructor(nome = 'Nome do Item', quantidade = 0, validade = 0) {
        this.item = nome;
        this.quantidade = quantidade;
        this.validade = validade;
    }
}
class NovoLancamento {
    constructor(dia,mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        this.itens = [];
    }
    addItem(...itens) {
        itens.forEach( l => this.itens.push(l));
    }
}
const Ferro = new NovoItem('Ferro', 10, 102018);
const Lancamento = new NovoLancamento(15,10, 2018);
Lancamento.addItem(Ferro);
console.log(Lancamento);
class InfoCliente{
    constructor( nome = "" , endereco = {} , CNPJ = 0 , Saldo = 0){
        this.nome = nome
        this.endereco = endereco
        this.CNPJ = CNPJ
        this.Saldo = Saldo
    }
}

class AdicionaCliente{
    constructor(dia , mes , ano){
        this.dia = dia
        this.mes = mes
        this.ano = ano
        this.cliente = []
    }
        addCliente(...cliente){
        cliente.forEach( l => this.cliente.push(l));
        }
    }

const a = new InfoCliente("Gabriel" , "Francisca", 312312 , 300000)
const b = new AdicionaCliente(10,10,2018)
b.addCliente(a)
console.log(b)

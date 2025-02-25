class Veiculo{
    constructor (tipo, ano, marca, cor, velocidade = 0, passageiros = []){
        this.tipo = tipo;
        this.ano = ano;
        this.marca = marca;
        this.cor = cor;
        this.velocidade = velocidade;
        this.passageiros = passageiros
    }
    acelerar = function(){
        this.velocidade += 10
        console.log('A velocidade atual é', this.velocidade)
    }

    freiar = function(){
        this.velocidade -= 10
        console.log('A velocidade atual é', this.velocidade)
    }
}
const carro = new Veiculo(
    'SUV',
    2020,
    'Renault',
    'Azul',
    
)
console.log(carro)
carro.acelerar()
console.log(carro)
carro.freiar()
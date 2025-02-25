class Veiculo{
    constructor (tipo, ano, marca, cor, velocidade = 0, passageiros = []){
        this.tipo = tipo;
        this.ano = ano;
        this.marca = marca;
        this.cor = cor;
        this.velocidade = velocidade;
        this.passageiros = passageiros
    }
}
const carro = new Veiculo(
    'SUV',
    2020,
    'Renault',
    'Azul',
    
)
console.log(carro)
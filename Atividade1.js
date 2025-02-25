class Veiculo{
    constructor (tipo, marca, cor, velocidade, passageiros){
        this.tipo = tipo;
        this.marca = marca;
        this.cor = cor;
        this.velocidade = velocidade;
        this.passageiros = passageiros;
    }
}
const carro = new Veiculo(
    '',
    'BMW',
    'Azul',
    100,
    2
)
console.log(carro)
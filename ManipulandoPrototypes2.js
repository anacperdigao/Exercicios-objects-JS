function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Não vou criar os métodos dentro da função construtora, vou criar fora com os prototypes

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50);
p1.desconto(20)

console.log(p1)

// Criando um novo objeto literal pra depois eu atribuir o prototype do objeto Produto
const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2,Produto.prototype)
p2.aumento(10)

console.log(p2)




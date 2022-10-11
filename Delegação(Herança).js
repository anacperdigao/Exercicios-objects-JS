// Produtos: Camiseta, caneca
// Camiseta vai ter cor e caneca vai ter material

//função construtora
function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
}

//Aqui sao métodos que eu nao vou criar dentro da funçao construtora, mas sim no prototype
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;  
}

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;  
}

// Dentro de call tenho que passar quem é o this da função, nesse caso, vai ser a Camiseta, depois eu tenho que dizer
// quais os parametros utilizados na funcao construtora dessa funcao, ou seja, nome e preco.
function Camiseta(nome, preco, cor) { //Aqui ta a melhor parte da herança: a funcao Camiseta vai herdar nome e preco de Produto, mas eu posso acrescentar mais coisas, como a cor
    Produto.call(this, nome, preco);
    this.cor = cor; //herdei nome e preço, e passei a cor como uma propriedade nova
}

Camiseta.prototype = Object.create(Produto.prototype) //Aqui estou linkando o prototype do Produto em Camiseta
Camiseta.prototype.constructor = Camiseta //Aqui estou ajustando quem é a função construtora, pq ele tava puxando Produto como função construtora

const camiseta = new Camiseta('Regata', 7.5, 'Preta')
camiseta.aumento(10)
console.log(camiseta) //Nesse caso eu percebo que ele nao pegou a herança do aumento que era de Produto, mesmo eu chamando call()


//Treinando com outro produto
function Caneca (nome, preco, material){
    Produto.call(this, nome, preco)
    this.material = material
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const caneca = new Caneca('Pequena', 5, 'louça')
caneca.desconto(2)
console.log(caneca)
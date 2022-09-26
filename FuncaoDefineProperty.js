// defineProperty -> congela uma propriedade do objeto 
// Object.defineProperty(qual objeto quero trabalhar, qual propriedade quero trabalhar, o que quero fazer)
// defineProperties -> congela várias propriedades do objeto

//CRIANDO UM FUNÇAO CONSTRUTORA...
// o THIS torna o elemento do objeto público, ou seja, consigo acessar fora da função construtora.

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    //this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //MOSTRA A CHAVE
        value: estoque, //MOSTRA O VALOR DA CHAVE
        writable: false, //EU POSSO ALTERAR O VALOR DESSA PROPRIEDADE? TRUE SE SIM, FALSE PRA NAO.
        configurable: false // EU POSSO RECONFIGURAR A CHAVE? TRUE PRA SIM, FALSE PRA NAO.
    })
}

const produto1 = new Produto ('Camiseta', 20, 3);
console.log(produto1)
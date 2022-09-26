// GETTERS E SETTERS -> MANEIRA DE PROTEGER ALGUMA PROPRIEDADE
// GETTER PEGA O VALOR E SETTER PRA CONFIGURAR E VALIDAR O VALOR
// Vamos supor que o valor do estoque só possa receber numero e eu quero proteger e garantir que o usuario nao vai digitar uma string
// Vou retirar o "value" e o "writable" pq justamente vou usar o getter e setter nessas propriedades

// Fazendo por função construtora

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    //this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // MOSTRA A CHAVE
        //value: estoque, // MOSTRA O VALOR DA CHAVE
        //writable: false, // EU POSSO ALTERAR O VALOR DESSA PROPRIEDADE? TRUE SE SIM, FALSE PRA NAO.
        configurable: false, // EU POSSO RECONFIGURAR A CHAVE? TRUE PRA SIM, FALSE PRA NAO.
        get: function(){
            return estoque;
        },
        set: function (valor){
            if (typeof valor !== 'number'){
                console.log("O valor precisa ser um número.")
                return;
            }
            estoque = valor;
        }
    })
}

const produto1 = new Produto ('Camiseta', 20, 3);

console.log(produto1)
console.log(produto1.estoque)
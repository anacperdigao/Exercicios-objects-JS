// GETTERS E SETTERS -> MANEIRA DE PROTEGER ALGUMA PROPRIEDADE
// GETTER PEGA O VALOR E SETTER PRA CONFIGURAR E VALIDAR O VALOR
// Vamos supor que o valor do estoque só possa receber numero e eu quero proteger e garantir que o usuario nao vai digitar uma string
// Vou retirar o "value" e o "writable" pq justamente vou usar o getter e setter nessas propriedades

// Fazendo por factory functions

function criaProduto(nome){
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            //AQUI É ONDE EU POSSO INTERCEPTAR E FAZER ALGUMA VALIDAÇÃO
            nome = valor;
        }
    };
}

const produto = criaProduto('Camiseta');

console.log(produto)
console.log(produto.nome)
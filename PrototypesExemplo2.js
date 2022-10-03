// Por exemplo se eu quiser tirar o metodo nomeCompleto de dentro da função construtora e passar como prototype
// IMPORTANTE: se o método nomeCompleto for criado dentro da função construtora, a hierarquia dele prevalece 
// em cima do prototype criado fora.


// MOLDE
function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}


Pessoa.prototype.nomeCompleto = function () {
    return this.nome + " " + this.sobrenome;
};

const pessoa1 = new Pessoa('Ana', 'Perdigão');

console.log(pessoa1.nomeCompleto());
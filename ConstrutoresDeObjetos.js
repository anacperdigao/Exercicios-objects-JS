//Factory Function, Constructor Functions e Classes(ficou para outra aula)

// Caso 1: Factory Functions
function criaPessoa (nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto() { // o get é opcional
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const pessoa1 = criaPessoa('Ana Carolina', 'Perdigão');
//console.log(pessoa1);
//console.log(pessoa1.nomeCompleto);

/* RESULTADO NODE.JS

Info: Start process (15:54:29)
{ nome: 'Ana Carolina', sobrenome: 'Perdigão', nomeCompleto: [Getter] }
Ana Carolina Perdigão
Info: End process (15:54:29)
*/



// Caso2: Constructor Functions -----> Começar essa função com letra maiuscula
function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); //Ver na linha 40 a explicação
}

const pessoa2 = new Pessoa('Luiz', 'Otávio') // Não esquecer o NEW pq é o mais importante
// O NEW vai criar um objeto vazio, vai atrelar o this de cada pessoa nova a esse objeto e vai retornar esse objeto
// Por isso nao há necessidade de dar um return e o new faz tipo um "return this"

const pessoa3 = new Pessoa('Ana', 'Carol') //OBS INTERESSANTE: Vamos supor que alguem queira mudar o valor de um objeto criado por essa função
pessoa3.nome = 'Outra coisa' // Aqui eu mudaria o valor do nome criado pela função
//Se eu quiser travar, preciso usar na função construtora o seguinte "Object,freeze(this)"

console.log(pessoa2, pessoa3);

/* RESULTADO NODE.JS

Info: Start process (16:12:52)
Pessoa { nome: 'Luiz', sobrenome: 'Otávio' } Pessoa { nome: 'Ana', sobrenome: 'Carol' }
Info: End process (16:12:52)
*/
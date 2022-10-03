/*
Javascript é baseado em prototipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo:
Protótipo é o termo usado para se referir ao qe foi criado pela primeira vez, servindo de modelo ou molde
para futuras produções.

Todos os objetos tem uma referencia interna para um prototipo (__proto__) que vem da propriedade prototype
da função construtora que foi usada para criá-lo. Quando tentamos acessar um mebro de um objeto, primeiro o motor
do JS vai tentar encontrar este membro no proprio objeto e depois a cadeia de protótipos é usada ate o topo (null)
até encontrar (ou não) tal membro.
*/

// Funçao construtora serve de molde para depois criar objetos

// MOLDE
function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}

//INSTANCIA (onde de fato eu crio o objeto e cada objeto é uma instância)
const pessoa1 = new Pessoa('Ana', 'Perdigão');

Pessoa.prototype.estouAqui = "hahaha" 
/*No navegador dá ate pra ver melhor, esse prototype é para evitar a repeticao de métodos em todas as 
instâncias novas que eu vou criar, então vai arquivar uma vez só dentro de __proto__.
Esse é um problema relacionado à performance.
*/

console.log(pessoa1.estouAqui);
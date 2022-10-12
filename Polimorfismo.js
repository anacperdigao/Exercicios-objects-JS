// Polimorfismo de sobrescrita => fazer métodos se comportarem de forma diferente em subclasses (classes filhas de uma classe mae ou pai)
// Conta bancária -> conta poupança e conta corrente
// Método "Sacar" vai se comportar de maneira diferente em cada tipo de conta bancária


//Superclass ou classe mãe
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

//Métodos feitos em prototype
Conta.prototype.sacar = function(valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo()
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo()
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag/conta: ${this.agencia}/${this.conta} Saldo: R$${this.saldo.toFixed(2)}`)
};

//TESTANDO
const conta1 = new Conta(8558, 8721, 100)

//conta1.sacar(50)
//conta1.depositar(100)


//Função 1 que irão herdar a função Conta
function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente


//Vou sobrescrever o mesmo método de sacar só que agora modificando ele para ContaCorrente
ContaCorrente.prototype.sacar = function(valor) {
    if ((this.saldo + this.limite) < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo()
};

//TESTANDO
const conta2 = new ContaCorrente(8558, 8721, 100, 100)
conta2.sacar(150)


//Função 1 que irão herdar a função Conta
function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

//TESTANDO
const conta3 = new ContaPoupanca(8558, 8721, 100)
conta3.sacar(150)
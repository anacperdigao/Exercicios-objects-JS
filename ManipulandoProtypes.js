// Vamos utilizar o Object.setPrototypeOf(objeto A que vai configurar, objeto B que vai ser o prototype de A)

const objA = {
    chaveA: 'A'
    // objA.__proto__ === Object.prototype   ------>>>> vai dar true pq sao iguais
};

const objB = {
    chaveB: 'B'
};

Object.setPrototypeOf(objB, objA);

console.log(objB.chaveA)
console.log(objB.chaveB)

// OU SEJA, EU CONSIGO ENCADEAR E UTILIZAR A chaveA DENTRO DO objB
// COM SPREAD OPERATOR

const produto = {nome: "caneca", preco: 1.80};
const novoProduto = {...produto}

novoProduto.nome = "vaso";
novoProduto.preco = 2.50;

//console.log(produto);
//console.log(novoProduto);


// COM OBJECT ASSIGN - tenho que declarar um objeto vazio, e depois dizer qual eu to copiando

const produto2 = {nome: "caneca", preco: 1.80};
const novoProduto2 = Object.assign({}, produto2, {material: 'porcelana'})

novoProduto2.nome = "copo";
novoProduto2.preco = 3.50;

console.log(produto2);
console.log(novoProduto2);
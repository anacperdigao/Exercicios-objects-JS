// Object.GetOwnPropertyDescriptor(objeto que deseja ver, propriedade que deseja ver)

const produto = {nome: "caneca", preco: 1.80};

//console.log(Object.getOwnPropertyDescriptor(produto, "nome"));

/*
Info: Start process (13:10:50)
{
  value: 'caneca',
  writable: true,
  enumerable: true,
  configurable: true
}
Info: End process (13:10:50)
*/

//Agora eu posso pegar e mudar essas definições

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
})

//Vou tentar mudar o objeto e nao vou conseguir
produto.nome = "Tentando mudar";
delete produto.nome;

console.log(produto);
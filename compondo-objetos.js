const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12345678912",
    emails: "andre@email.com",
    fones: ["988889999", "999998888"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011",

}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)
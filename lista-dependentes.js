const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '12345678912',
    emails: 'andre@email.com',
    fones: ['988889999', '999998888'],
    dependentes: [{ nome: 'Sara Silva', parentesco: 'filha', dataNasc: '20/03/2011' }],
}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014")

console.log(filhaMaisNova[0].nome)
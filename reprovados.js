const nomes = ['Maria', 'Rita', 'Nazaré', 'Nina', 'João'];
const notas = [7, 5, 2, 9.5, 10];

const reprovados = nomes.filter((_, nota) => notas[nota] < 6)

console.log(`reprovados: ${reprovados}`);
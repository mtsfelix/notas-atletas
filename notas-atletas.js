let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function calcularMedia(atletas) {
    for (let i = 0; i < atletas.length; i++) {
        // 1. Obtém as notas e as ordena de forma crescente
        let notasOrdenadas = atletas[i].notas.sort((a, b) => a - b);

        // 2. Elimina a menor e a maior nota (as posições 1, 2 e 3 são as do meio)
        let notasComputadas = notasOrdenadas.slice(1, 4);

        // 3. Calcula a soma das notas restantes usando forEach
        let soma = 0;
        notasComputadas.forEach(function(nota) {
            soma += nota;
        });

        // 4. Calcula a média baseada na quantidade de notas computadas
        let media = soma / notasComputadas.length;

        // 5. Apresenta o resultado formatado conforme solicitado
        console.log(`Atleta: ${atletas[i].nome}`);
        console.log(`Notas Obtidas: ${atletas[i].notas.join(",")}`);
        console.log(`Média Válida: ${media}`);
        console.log(""); // Linha em branco para separar os atletas
    }
}

// Executa a função
calcularMedia(atletas);
